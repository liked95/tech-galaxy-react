import React, { useState, useEffect } from 'react'
import filterData from 'data/filterData'

function FilterByBrand(props) {
    const [brands, setBrands] = useState([])
    const {onChangeBrands, filters} = props
    // console.log(onChangeBrands)

    const handleChangeBrands = (brand) => {
        let updateBrands
        if (brands.includes(brand)) {
             updateBrands = brands.filter(b => b != brand)
        } else {
            updateBrands = [...brands, brand]
        }

        setBrands(updateBrands)
    }

    useEffect(() => {
        onChangeBrands(brands)
    }, [brands]);
    


    return (
        <div className="filter-category">
            <h4 className="filter-title">
                thương hiệu
            </h4>

            <form className="filter-option-container" id="brand">
                {filterData.brands.map((brand, index) => (
                    <div className="filter-option" key={index}>
                        <input
                            type="checkbox"
                            name={brand}
                            id={brand}
                            value={brand}
                            onChange={e => handleChangeBrands(e.target.value)}
                            checked = {filters.brands.includes(brand)}
                        />
                        <label htmlFor={brand}>{brand.toUpperCase()}</label>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default FilterByBrand