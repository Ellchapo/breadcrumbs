import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Product() {
    const [products,setproducts]=useState('')

    useEffect(()=>{
      fetch("https://dummyjson.com/products").then((d)=>d.json()).then((d)=>{
      
       setproducts(d.products)
      })
      
    },[])
  return (
    <div>Products
          <div className='grid'>
            {
                products.map((d)=>(
                    <div className='card' key={d.id}>
                        <Link to={`/products/${d.id}`}>
                          <image src={d.thumbnail}></image>
                          <h3>{d.title}</h3>
                        </Link>
                    </div>
                ))
            }
           
        </div>
    </div>
  )
}

export default Product