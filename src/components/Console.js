import React, { useState, useEffect } from 'react'
import DataList from './DataList'
import SalesGraph from './SalesGraph'


const Console = () => {


    const [orderData, setOrderData] = useState([])
    const [products, setProducts] = useState([])


    useEffect(()=> {

        fetch('http://localhost:4000/orders')
        .then(resp => resp.json())
        .then(data => {
            setOrderData(data)
        })

        fetch('http://localhost:4000/products')
        .then(resp => resp.json())
        .then(data => {
            setProducts(data)
        })

        console.log('Database Fetched')
    }, [])



    return (
        <div id='console'>
            <SalesGraph />
            <DataList data={orderData} />
        </div>
    )
}

export default Console
