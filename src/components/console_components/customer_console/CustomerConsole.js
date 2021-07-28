import React, {useState, useEffect} from 'react'
import DataList from '../DataList'
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
    const handleReturnButtonClick = () => {
        setCustomerFilter('')
    }
    const handleCustomerGraphClick = (e) => {
        setCustomerFilter(e.activeLabel)
    }



    return (
        <div>

            {customerFilter.length > 0 ? <CustomerConsoleCardContainer handleReturnButtonClick={handleReturnButtonClick} data={customers} customerFilter={customerFilter} /> : <CustomerGraphContainer handleCustomerGraphClick={handleCustomerGraphClick} data={customers} />}
            {/* <CustomerGraphContainer customerFilter={customerFilter} data={customers} /> */}
            <DataList customerFilter={customerFilter} handleRowClick={handleCustomerRowClick} tableType={'CustomerTable'} data={customers} />
        </div>
    )
}

export default CustomerConsole
