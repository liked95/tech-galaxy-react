import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import DetailHeading from './DetailHeading/index'
import queryString from 'query-string'
import Context from 'context/index'
import ProductDetail from './ProductDetail/index'
import Review from './Review/index'
import RelatedProducts from './RelatedProducts/index'
import { useSelector } from 'react-redux'
import { useGetProductsQuery } from 'features/Products/products.service'
import { PAGE_TRANSITION_DURATION, scrollToTop } from 'utils/index'

function Detail() {


    const { status } = useGetProductsQuery()
    let products = useSelector(state => state.productList.products)

    const location = useLocation()
    const params = queryString.parse(location.search)
    const id = +params.id

    useEffect(() => {
        scrollToTop()
    }, [id]);


    const product = products.find(p => p.id == id)


    if (status == 'fulfilled') {
        return (
            <motion.div
                className='detail-section'
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: PAGE_TRANSITION_DURATION } }}>
                <DetailHeading product={product} />
                <ProductDetail product={product} />
                <Review product={product} />
                <RelatedProducts product={product} />
            </motion.div>
        )
    }
}

export default Detail