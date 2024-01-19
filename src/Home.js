import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css';
function Home() {

    const [trendingProducts,setTrendingProduct]=useState([])

    useEffect(()=>{
      fetch("https://dummyjson.com/products").then((d)=>d.json()).then((d)=>{
      const res=d.products.slice(0,6)
       setTrendingProduct(res)
      })
      
    },[])

  return (
    <div>
        <span>TrendingProducts</span>
        <div className='grid'>
            {
                trendingProducts.map((d)=>(
                    <div className='card' key={d.id}>
                        <Link to={`/products/${d.id}`}>
                          <img src={d.thumbnail}></img>
                          <h3>{d.title}</h3>
                        </Link>
                    </div>
                ))
            }
           
        </div>
        <Link to={'/products'}>
                <button>View All Products</button>
            </Link>
    </div>
  )
}

export default Home