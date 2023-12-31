import React from 'react'
import { useSelector } from 'react-redux'
import ImageLoader from '../../ImageLoader/ImageLoader'

function SearchItem({ item, handleClick }) {
    const isMobile = useSelector((state) => state.mobile.isMobile)

    return (
        <li>
            <button onClick={() => handleClick(item.id)}>
                <div className="resultTitle">
                    <ImageLoader
                        url={item.image}
                        alt={item.name}
                        backupUrl={'/store/assets/imgs/404/category404.png'}
                        backupAlt="Product"
                        thirdBackupUrl={'/store/assets/imgs/404/product404.png'}
                    ></ImageLoader>
                    <h3>{item.name}</h3>
                </div>
                <p>
                    {!isMobile && <><span>{item.category.name}</span>|</>}
                    <span>{item.subcategory.name}</span>
                </p>
            </button>
        </li>
    )
}

export default SearchItem