import Context from 'context/index'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';

import ProductItem from 'components/ProductItem/index'
import Tags from './Tags'
import FilterByBrand from './FilterByBrand'
import FilterByRam from './FilterByRam'
import FilterByRom from './FilterByRom'
import FilterByPriceRange from './FilterByPriceRange'
import Sort from './Sort';
import { avgRating } from 'components/ProductItem/index';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsQuery } from 'features/Products/products.service';
import { openSideNav, toggleBackdrop, toggleFilter } from 'components/SideNav/sideNav.slice';
import { PAGE_TRANSITION_DURATION } from 'utils/index';

function SmartPhone() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useGetProductsQuery()

  const active = useSelector(state => state.sideNav.isFilterSideNavActive)

  const handleToggleSideFilter = () => {
    dispatch(toggleFilter())
    dispatch(toggleBackdrop())
  }

  const handleCloseSideFilter = () => {
    dispatch(toggleFilter())
    dispatch(toggleBackdrop())
  }

  let products = useSelector(state => state.productList.products)
  products = products.filter(product => product.category == 'smartphone')

  const [filters, setFilters] = useState(() => {
    const params = queryString.parse(location.search, { arrayFormat: 'bracket' })

    return {
      brands: params.brands || [],
      rams: params.rams || [],
      roms: params.roms || [],
      maxPrice: params.maxPrice || 50000000,
      sort: params.sort || [],
    }
  })

  // console.log('filter  1 la', filters)


  useEffect(() => {
    const params = queryString.parse(location.search,
      { arrayFormat: 'bracket' })

    setFilters({
      brands: params.brands || [],
      rams: params.rams || [],
      roms: params.roms || [],
      maxPrice: params.maxPrice || 50000000,
      sort: params.sort || [],
    })
  }, [location.search])


  // Thay doi brand
  const handleChangeBrands = (brands) => {
    const queryParams = { ...filters, brands }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'bracket' })
    })
  }


  // Thay doi ram
  const handleChangeRams = (rams) => {
    const queryParams = { ...filters, rams }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'bracket' })
    })
  }


  // Thay doi rom
  const handleChangeRoms = (roms) => {
    const queryParams = { ...filters, roms }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'bracket' })
    })
  }

  // Thay doi gia max
  const handleChangeMaxPrice = (maxPrice) => {
    const queryParams = { ...filters, maxPrice }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'bracket' })
    })
  }

  // thay doi sort
  const handleChangeSelectedSort = sort => {
    const queryParams = { ...filters, sort }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams, { arrayFormat: 'bracket' })
    })
  }

  // reset filter
  const handleResetFilter = () => {
    navigate({
      pathname: location.pathname,
      search: ''
    })

    setFilters({
      brands: [],
      rams: [],
      roms: [],
      maxPrice: 50000000,
      sort: [],
    })
  }


  useEffect(() => {
    document.title ='??i???n tho???i'
  }, [])




  // Bat dau loc theo tieu chi
  const startFilter = () => {
    let updatedProducts = [...products]
    // console.log(updatedProducts)


    if (filters.brands && filters.brands.length > 0) {
      updatedProducts = updatedProducts.filter(product => filters.brands.includes(product.brand))
    }

    if (filters.rams && filters.rams.length > 0) {
      updatedProducts = updatedProducts.filter(product => {

        return filters.rams.includes(product.ram[0].slice(0, -2))
      })
    }

    if (filters.roms && filters.roms.length > 0) {

      updatedProducts = updatedProducts.filter(product => {
        // console.log(filters.roms)
        return filters.roms.some(r => {
          // console.log(r);
          return product.rom.includes(r + 'GB')
        })
      })
    }

    if (filters.maxPrice != 100000000) {
      updatedProducts = updatedProducts.filter(product => product.currentPrices[0] < filters.maxPrice)
    }

    if (filters.sort) {
      if (filters.sort == "priceAsc") updatedProducts = updatedProducts.sort((p1, p2) => p1.currentPrices[0] - p2.currentPrices[0])
      if (filters.sort == "priceDesc") updatedProducts = updatedProducts.sort((p1, p2) => p2.currentPrices[0] - p1.currentPrices[0])
      if (filters.sort == "quantityAsc") updatedProducts = updatedProducts.sort((p1, p2) => p1.soldQuantity - p2.soldQuantity)
      if (filters.sort == "quantityDesc") updatedProducts = updatedProducts.sort((p1, p2) => p2.soldQuantity - p1.soldQuantity)
      if (filters.sort == "ratingAsc") updatedProducts = updatedProducts.sort((p1, p2) => avgRating(p1.reviews) - avgRating(p2.reviews))
      if (filters.sort == "ratingDesc") updatedProducts = updatedProducts.sort((p1, p2) => avgRating(p2.reviews) - avgRating(p1.reviews))
    }
    return updatedProducts
  }

  // console.log('filter  2 la', filters)

  const renderedProducts = startFilter()


  const MotionProductItem = motion(ProductItem)



  return (
    <motion.section className="smartphone-container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: PAGE_TRANSITION_DURATION } }}
    >
      <div id="filter-btn__res" onClick={handleToggleSideFilter}>
       <FilterAltRoundedIcon fontSize='large'/>
      </div>
      <div className="container">
        <div className="breadcrumb"><Link to="/smartphone">??i???n tho???i</Link></div>

        <div className="row main-page-container">
          <div className={`filter-container ${active ? 'mobile-active' : ''}`}>
            <h4>
              <span>b??? l???c t??m ki???m</span>
              <span id="filter-sidebar-close" onClick={handleCloseSideFilter}>
                <CloseIcon />
              </span>
            </h4>
            <Button className="erase-tag-btn"
              onClick={handleResetFilter}
              style={{
                color: '#ffffff',
                backgroundColor: "#2e7d32",
                margin: '0 auto',
                display: "flex",
                width: '100%',
                marginBottom: '15px'
              }}
            >
              <i className="fa-solid fa-eraser"></i>&nbsp;
              ?????t l???i b??? l???c
            </Button>

            <div className="filter-category-container">
              <FilterByPriceRange onChangeMaxPrice={handleChangeMaxPrice} filters={filters} />
              <FilterByBrand onChangeBrands={handleChangeBrands} filters={filters} />
              <FilterByRam onChangeRams={handleChangeRams} filters={filters} />
              <FilterByRom onChangeRoms={handleChangeRoms} filters={filters} />
            </div>
          </div>


          <div className="panel-right">
            <div className="product-length-sort">
              <div className="product-length">
                <p>T??m th???y <b className="search-quantity">{renderedProducts.length}</b> s???n ph???m </p>
              </div>
              <Sort onChangeSort={handleChangeSelectedSort} filters={filters} />
            </div>
            <div className="row product-category-container">
              {renderedProducts.length > 0 && renderedProducts.map((item, index) => <MotionProductItem
                key={index}
                props={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />)}
              {renderedProducts.length == 0 && <p>Kh??ng t??m th???y s???n ph???m</p>}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default SmartPhone