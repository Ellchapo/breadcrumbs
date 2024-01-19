import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
function Productid() {

    const {id}=useParams()
    const [product,setproduct]=useState('')
    
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`).then((d)=>d.json()).then((d)=>{
        
         setproduct(d)
    })
        
      },[])

  return (
    <div>Productid
      
        <h1>Product details</h1>
        {product?
          <div>
                <img src={product.thumbnail}></img>
         <h3>{product.price}</h3>
         <p>{product.description}</p>

          </div>:<div>loading...</div>
        }
       
      
    </div>
  )
}

export default Productid