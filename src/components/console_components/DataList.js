import React from 'react'
import ProductTable from './product_console/ProductTable'
import CustomerTable from './customer_console/CustomerTable'

const DataList = ({data, tableType, handleRowClick, customerFilter}) => {

    const rowArray = []
    for (let i = 0; i < Object.keys(data).length; i++){

        //maybe develop a better key system
        data[i].id = i
        rowArray.push(data[i])
    }

    if (tableType === 'ProductTable'){
        return (
            <div className='data-list'>
                <ProductTable data={rowArray}/>
            </div>
        )
    } else if (tableType === 'CustomerTable'){
        return (
            <div className='data-list'>
                <CustomerTable customerFilter={customerFilter} handleRowClick={handleRowClick} data={rowArray}/>
            </div>
        )
    } else if (tableType === 'OrderTable'){

        return (
            <div className='data-list'>
                {/* <CustomerTable data={rowArray}/> */}
            </div>
        )
    }
}

export default DataList
