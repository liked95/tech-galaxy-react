import React, { useState, useEffect } from 'react'
import { GHNShopID, GHNToken } from 'utils/index'
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'
import { updateCustomerAddress, updateCustomerName, updateCustomerPhone, updateDistrict, updateFee, updateProvince, updateWard } from 'features/Cart/cart.slice'

async function renderProvince() {

    try {

        let provinceURI = "https://online-gateway.ghn.vn/shiip/public-api/master-data/province"
        let provinceHeader = { headers: { token: GHNToken } }
        let res = await axios.get(provinceURI, provinceHeader)
        let data = res.data.data

    } catch (error) {
        console.log(error)
    }

}


function CustomerInfo() {
    const dispatch = useDispatch()

    const [provinces, setProvinces] = useState([])
    const [provinceId, setProvinceId] = useState(0)

    const [districts, setDistricts] = useState([])
    const [districtId, setDistrictId] = useState(0)

    const [wards, setWards] = useState([])
    const [wardId, setWardId] = useState(0)

    const [name, setName] = useState(useSelector(state => state.cartList.customerName))
    const [phone, setPhone] = useState(useSelector(state => state.cartList.customerPhone))

    const [address, setAddress] = useState("")


    async function renderProvince() {

        try {

            let provinceURI = "https://online-gateway.ghn.vn/shiip/public-api/master-data/province"
            let provinceHeader = { headers: { token: GHNToken } }
            let res = await axios.get(provinceURI, provinceHeader)
            setProvinces(res.data.data)

        } catch (error) {
            console.log(error)
        }
    }

    async function getDistrict() {
        try {
            let districtURI = "https://online-gateway.ghn.vn/shiip/public-api/master-data/district"
            let header = { headers: { token: GHNToken }, params: { province_id: provinceId } }
            let res = await axios.get(districtURI, header)
            setDistricts(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function getWard() {
        try {
            let wardURI = "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward"
            let header = { headers: { token: GHNToken }, params: { district_id: districtId } }
            let res = await axios.get(wardURI, header)
            setWards(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        renderProvince()
        dispatch(updateCustomerAddress(""))
    }, [])


    useEffect(() => {
        getDistrict()
        setDistrictId(0)
        setWardId(0)
    }, [provinceId])

    useEffect(() => {
        if (districtId != 0) getWard()
        setWardId(0)
    }, [districtId])



    const handleChangeProvince = e => {
        const [id, title] = e.target.value.split(",")
        setProvinceId(+id)
        dispatch(updateProvince(title))
    }

    const handleChangeDistrict = e => {
        const [id, title] = e.target.value.split(",")
        setDistrictId(+id)
        dispatch(updateDistrict(title))
    }

    const handleChangeWard = e => {
        const [id, title] = e.target.value.split(",")
        setWardId(+id)
        dispatch(updateWard(title))
    }

    const cart = useSelector(state => state.cartList.items)
    const auth = useSelector(state => state.userList.auth)


    const getFee = async () => {
        const items = cart.filter(item => item.userId == auth.id)
        let totalCount = 0
        for (let item of items) {
            if (item.checked) totalCount += item.count
        }
        // console.log(totalCount)

        if (districtId != 0 && wardId != 0 && totalCount > 0) {

            let URI = "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee"
            let header = {
                headers: { token: GHNToken, shop_id: GHNShopID },
                params: {
                    service_type_id: 2,
                    insurance_value: 0,
                    to_ward_code: wardId,
                    to_district_id: districtId,
                    from_district_id: 1493, // sender from quận Thanh Xuân
                    weight: 150,
                    length: 16,
                    width: 6,
                    height: 3,
                }
            }
            let res = await axios.get(URI, header)
            let shipmentFee = res.data.data.total * totalCount

            return shipmentFee
        } else {
            return 0
        }
    }

    useEffect(() => {
        let res = getFee()
        res.then(data => dispatch(updateFee(data)))

    }, [wardId, cart])


    const handleChangeName = e => {
        setName(e.target.value)
        dispatch(updateCustomerName(e.target.value))
    }

    const handleChangePhone = e => {
        setPhone(e.target.value)
        dispatch(updateCustomerPhone(e.target.value))
    }

    const handleChangeAddress = e => {
        setAddress(e.target.value)
        dispatch(updateCustomerAddress(e.target.value))
    }





    return (
        <div className="col-lg-4 col-md-6 customer-info">
            <h4>Thông tin khách hàng</h4>
            <div className="customer-info-form ">


                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="fullName" placeholder="fullName"
                        value={name} onChange={e => handleChangeName(e)} />
                    <label htmlFor="fullName">Tên đầy đủ</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="phone" placeholder="name@example.com"
                        value={phone} onChange={e => handleChangePhone(e)} />
                    <label htmlFor="phone">Số điện thoại</label>
                </div>

                <div className="form-floating mb-3">
                    <select
                        className="form-select"
                        id="province"
                        onChange={e => handleChangeProvince(e)}>
                        <option value="null" selected disabled hidden="" className="disabled">Tỉnh/Thành phố</option>
                        {provinces.map(ele => <option key={ele.ProvinceID}  value={[ele.ProvinceID,ele.ProvinceName]}>{ele.ProvinceName}</option>)}
                    </select>
                    <label htmlFor="province">Tỉnh/Thành phố</label>
                </div>

                <div className="form-floating mb-3">
                    <select className="form-select"
                        id="district"
                        disabled={provinceId == 0}
                        onChange={e => handleChangeDistrict(e)}
                    >
                        <option value="" selected={districtId == 0} disabled hidden="" className="disabled">Quận/Huyện</option>
                        {provinceId != 0 && districts.map(ele => <option key={ele.DistrictID} value={[ele.DistrictID, ele.DistrictName]}>{ele.DistrictName}</option>)}
                    </select>
                    <label htmlFor="district">Quận/Huyện</label>
                </div>

                <div className="form-floating mb-3">
                    <select className="form-select"
                        disabled={districtId == 0}
                        id="ward"
                        onChange={e => handleChangeWard(e)}>
                        <option value="" selected={wardId == 0} disabled hidden="" className="disabled">Phường/Xã</option>
                        {districtId != 0 && wards.map(ele => <option key={ele.WardCode} value={[ele.WardCode, ele.WardName]}>{ele.WardName}</option>)}
                    </select>
                    <label htmlFor="ward">Phường/Xã</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" disabled={wardId == 0} id="address"
                        placeholder="Số nhà, đường phố"
                        value={address} onChange={e => handleChangeAddress(e)} />
                    <label htmlFor="address">Số nhà, đường phố</label>
                </div>
            </div>
        </div>
    )
}

export default CustomerInfo