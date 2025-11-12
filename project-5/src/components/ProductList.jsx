import ProductCard from "./ProductCard"

const products=[
    {id:1,name:"Laptop",price:4500},
    {id:2,name:"Tablet",price:1700},
    {id:3,name:"Smartwatch",price:2000},
    {id:4,name:"keyboard",price:450},
    {id:5,name:"Mouse",price:250}
]


const ProductList = () => {
  return (
    <>
      <div className="row">
        {products.map((p)=>(
           <div className="col-md-3 mb-4" key={p.id}>
           <ProductCard product={p} />
            </div>
        ))}
    
        
    
      </div>
    </>
  )
}

export default ProductList
