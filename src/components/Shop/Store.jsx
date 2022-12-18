import React from 'react'
import Aware from '../Common/Aware'

import ProductCard from './ProductCard'
import { productsArray } from './productsStore'
const Store = () => {
  return (
    <>
      <section>
        <Aware />
        <div class="coffee_cards_main_container">
          <div className="storeHead">
            <h1 >Here your purchased Cigarette amount will be donated for help of those Cancer Patients</h1>
            <h6 style={{ "color": "red" }} >Note: You will be not getting the Cigarette</h6>

          </div>
          <div className="productFlex">
            {productsArray.map((product, idx) => (
              <div key={idx} >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Store