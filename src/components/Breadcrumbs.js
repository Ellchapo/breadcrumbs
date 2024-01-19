import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Breadcrumbs() {
    const {pathname} =useLocation()
     const location = pathname.split('/').filter((x)=>x)
     let breadcrumbs='';
  return (
    <div>
        <Link to={"/"}>Home</Link>
        {
            location.map((l,i)=>{
                breadcrumbs +=`/${l}`
                if(i < location.length-1){
                    return<span>/<Link to={breadcrumbs}>{l}</Link></span>
                }else{
                    return<span>/{l}</span>
                }
            })
        }
    </div>
  )
}

export default Breadcrumbs
