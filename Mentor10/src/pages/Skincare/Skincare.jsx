import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Skincare() {
   const {skincare}= useParams({})
   const [smt,setSmt]=useState([])
   useEffect(()=>{
    fetch(`https://dummyjson.com/products/category/${skincare}`)
    .then(res=>res.json())
    .then(smtobj=>setSmt(smtobj.products))
    .catch(error=>{
        console.error("Error",error)
    })
   
},[skincare])
  return (
    <div className='home'>
    {
        smt.map((item,index)=>{
            return (<div className='card' key={index}>
                        <img src={item.images[0]} alt="" />
                        <h4>Brand:{item.brans}</h4>
                        <h5>Name:{item.title}</h5>
                        <h6>Price:{item.price}</h6>
                    </div>
            )
        })
    }
    </div>
  )
}

export default Skincare;
