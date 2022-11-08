import Context from 'context/index'
import { useGetProductsQuery } from 'features/Products/products.service'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductSlider from '../ProductSlider'


function RelatedProducts({ product }) {
  useGetProductsQuery()
  let products = useSelector(state => state.productList.products)
  products = products.filter(p => p.brand == product.brand && p.category == 'smartphone')

  return (
    <div className="related-products">
      <div className="container">
        <h4>Sản phẩm liên quan</h4>
        <div id="related-product-carousel" className="owl-carousel">
          <ProductSlider products={products} />
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts