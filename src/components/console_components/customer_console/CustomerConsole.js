import React, {useState, useEffect} from 'react'
import DataList from '../../DataList'
import CustomerGraphContainer from './CustomerGraphContainer'
import CustomerConsoleCardContainer from './CustomerConsoleCardContainer'


const CustomerConsole = () => {

    const [customers, setCustomers] = useState([])
    const [customerFilter, setCustomerFilter] = useState('')

    useEffect(() => {

        fetch('http://localhost:3001/orders')
        .then(resp => resp.json())
        .then(data => setCustomers(data))

    }, [])

    const handleCustomerRowClick = (cusName) => {

        setCustomerFilter(cusName)

    }




    return (
        <div>

            {customerFilter.length > 0 ? <CustomerConsoleCardContainer data={customers} customerFilter={customerFilter} /> : <CustomerGraphContainer data={customers} />}
            {/* <CustomerGraphContainer customerFilter={customerFilter} data={customers} /> */}
            <DataList customerFilter={customerFilter} handleRowClick={handleCustomerRowClick} tableType={'CustomerTable'} data={customers} />
        </div>
    )
}

export default CustomerConsole
