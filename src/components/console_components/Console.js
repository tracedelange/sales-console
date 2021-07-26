// import { Switch } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import DataList from '../DataList'
import SalesGraph from './DataGraph'
import OrdersConsole from './OrdersConsole'
import ProductsConsole from './ProductsConsole';
import CustomerConsole from './customer_console/CustomerConsole'


const Console = () => {


    const [orderData, setOrderData] = useState([])
    const [products, setProducts] = useState([])


    useEffect(()=> {

        fetch('http://localhost:3001/orders')
        .then(resp => resp.json())
        .then(data => {
            setOrderData(data)
        })

        // fetch('http://localhost:4000/products')
        // .then(resp => resp.json())
        // .then(data => {
        //     setProducts(data)
        // })

        // console.log('Database Fetched')
    }, [])



    return (
        // Fetch relevant data inside the routes
        <div id='console'>
            <Switch>
                <Route exact path='/orders'>
                    <OrdersConsole />
                </Route>
                <Route exact path='/products'>
                    <ProductsConsole />
                </Route>
                <Route exact path='/customers'>
                    <CustomerConsole />
                </Route>
            </Switch>
        </div>
    )
}

export default Console
