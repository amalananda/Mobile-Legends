import React from 'react'
import StringUtils from "../string_utilize"

const DiamondProducts = ({ diamondProducts, clickedId, handleProductClick, isDisabled }) => {
  return (
    <>
      <p className="my-3">{'Variasi Instan'}</p>
      <div className="cads-flex">
        {diamondProducts.map((data) => (
          <div
            key={data.id}
            id={`${data.id}-product`}
            className={clickedId === `${data.id}-product` ? "card-1 clicked-diamond" : "card-1"}
            onClick={() => handleProductClick(data)}
            style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
          >
            <img
              className="diamonds"
              src="Diamonds.png"
              width="50px"
            />
            <div>{data.name}</div>
            <div>{StringUtils.format_rupiah(data.selling_price)}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DiamondProducts
