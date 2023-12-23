import React from "react";
import { NavLink } from "react-router-dom"
import Stars from '../../Stars/Stars'
import ImageLoader from '../../ImageLoader/ImageLoader'

export default function ProductCard({ product, subCatImage }) {

  return (
    <li className="product-card">
      <NavLink to={`/store/productDetails/${product.id}`}>
        <ImageLoader
          url={product.image}
          alt={product.name}
          backupUrl={subCatImage || '/store/assets/imgs/404/product404.png'}
          backupAlt="Product Image 404"
          thirdBackupUrl={'/store/assets/imgs/404/product404.png'}
        ></ImageLoader>
        <div className='infoDiv'>
          <p className='title'>{product.name}</p>
          <div className='ratingDiv'>
            <Stars initialRating={product.rating} id={product.id} shouldHover={false}></Stars>
            {/* <p>({product.ratings?.length || 0})</p> */}
          </div>
          <div className='priceDiv'>
            {product.discountPercentage > 1 ?
              <>
                <p>${product.price}</p>
                <h4>${product.discountedPrice}</h4>
              </>
              :
              <h4>${product.discountedPrice}</h4>
            }
          </div>
        </div>
      </NavLink>
    </li>
  )
}

