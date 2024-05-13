import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Products() {
    const [dt, setDt] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setDt(data.products))
    }, [])

    console.log(dt);
    return (
        <>
            {
                dt.map((prod, index) => {
                    return (<div className='card' key={index}>
                        <img src={prod.images[0]} alt="" />
                        <h4>Brand:{prod.brans}</h4>
                        <h5>Name:{prod.title}</h5>
                        <h6>Price:{prod.price}</h6>
                    </div>)
                })
            }
        </>
    )
}

export default Products;
