import React from 'react'
import { Route, Switch } from "react-router-dom";
import OrdersConsole from './order_console/OrdersConsole'
import ProductsConsole from './product_console/ProductsConsole';
import CustomerConsole from './customer_console/CustomerConsole'
import ProfileConsole from './profile_console/ProfileConsole'


const Console = ({resourceChange}) => {

    return (
        // Fetch relevant data inside the routes
        <div id='console'>
            <Switch>
                <Route exact path='/profile'>
                    <ProfileConsole resourceChange={resourceChange}/>
                </Route>
                <Route exact path='/orders'>
                    <OrdersConsole />
                </Route>
                <Route exact path='/products'>
                    <ProductsConsole />
                </Route>
                <Route path='/customers'>
                    <CustomerConsole />
                </Route>
                <Route path='/'>
                    <CustomerConsole />
                </Route>
            </Switch>
        </div>
    )
}

export default Console
