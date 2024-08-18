import React from 'react'
import StringUtils from "../string_utilize"

const SpecialProducts = ({ specialProducts, clickedId, handleProductClick, isDisabled }) => {
  return (
    <>
      <p className="my-3">{'Variasi Spesial'}</p>
      <div className="cads-flex">
        {specialProducts.map((data) => (
          <div
            key={data.id}
            id={`${data.id}-product`}
            className={clickedId === `${data.id}-product` ? "card-twilight clicked-diamond" : "card-twilight"}
            onClick={() => handleProductClick(data)}
            style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
          >
            <img
              className="twilightpass"
              src="TwilightPass_MLBB.png"
              width="75px"
            />
            <div>{data.name}</div>
            <div>{StringUtils.format_rupiah(data.selling_price)}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SpecialProducts
