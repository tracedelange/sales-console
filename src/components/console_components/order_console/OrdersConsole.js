import React, { useEffect, useState } from 'react'
import RechartsOrders from './RechartsOrders'
import OrderGraphingOptions from './OrderGraphingOptions'

const OrdersConsole = ({data}) => {

    // I think this is the compnenet to call the order data in from 

    const [dates, setDates] = useState([])
    const [products, setProducts] = useState([])

    const [filterProduct, setFilterProduct] = useState('')

    useEffect(() => {

        fetch('http://localhost:3001/dates')
        .then(resp => resp.json())
        .then(data => setDates(data))

        fetch('http://localhost:3001/products')
        .then(resp => resp.json())
        .then(data => setProducts(data))

    }, [])

    const handleItemClick = (e) => {



        setFilterProduct(e.target.getAttribute('name'))
    }

    return (
        <>

            <RechartsOrders filterProduct={filterProduct} data={dates} />
            <OrderGraphingOptions filterProduct={filterProduct} handleItemClick={handleItemClick} products={products}/>
            {/* <DataList tableType={'OrderTable'} data={dates} /> */}
        </>
    )
}

export default OrdersConsole
