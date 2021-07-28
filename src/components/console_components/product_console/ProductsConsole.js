import React, { useState, useEffect } from 'react'
import DataList from '../DataList'
import DataGraph from './DataGraph'

const ProductsConsole = () => {


    const [ products, setProducts ] = useState([])

    useEffect(() => {

        fetch("https://sales-console-demo-json-server.herokuapp.com/products")
        .then(resp => resp.json())
        .then(data => {
            setProducts(data)
            // console.log('Product Data Received')
        })
        .catch((error) => console.log(error.message))

    }, [])

    // console.log(products)

    return (
        <>
            <DataGraph data={products} />
            <DataList tableType={'ProductTable'} data={products} />
        </>
    )
}

export default ProductsConsole
