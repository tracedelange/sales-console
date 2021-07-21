import React from 'react'
import ListItem from './ListItem'
import CustomerTable from './CustomerTable'

const DataList = ({data}) => {


    // const rowArray = []
    // const keys = Object.keys(data)
    // for (let key of keys){
    //     rowArray.push(data[key])
    // }

    console.log(data)

    return (
        <div id='data-list'>

            {/* <CustomerTable data={rowArray}/> */}
            {/* <table>
                <tr>
                    <th>Customer ID</th>
                    <th>Customer Name</th>
                    <th>Date of Sale</th>
                    <th>Product Sold</th>
                </tr>
                {rowArray}
            </table> */}
        </div>
    )
}

export default DataList
