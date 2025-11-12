import React from 'react'

const ProductCard = ({product}) => {
  return (
    <>
       <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
    </>
  )
}

export default ProductCard
