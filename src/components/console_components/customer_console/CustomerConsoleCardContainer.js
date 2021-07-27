import React from 'react'
import CustomerConsoleDataCard from './CustomerConsoleDataCard'
import CustomerHistoGraph from './CustomerHistoGraph'

const CustomerConsoleCardContainer = ({data, customerFilter, handleReturnButtonClick}) => {


    let keys = Object.keys(data)
    let targetCustomerDataIndex = keys.find((key) => {
        return data[key].customerName === customerFilter
    })

    let targetData = data[targetCustomerDataIndex]

    //iterate over target and count the number of times each product was ordered
    let graphData = {} 
    targetData.orders.map((item) => {
        if (item.productPurchased.productName in graphData){
            let val = graphData[item.productPurchased.productName]
            graphData = {
                ...graphData,
                [item.productPurchased.productName] : 1 + val
            }
        } else {
            graphData = {
                ...graphData,
                [item.productPurchased.productName] : 1
            }
        }
    })
    
    let graphDataArray = []
    let newKeys = Object.keys(graphData)
    newKeys.forEach((item) => {

        let entry = {
            name: item,
            value: graphData[item]
        }

        graphDataArray.push(entry)
    })


    return (
        <div className="card-div">
            {/* <h2 id='customer-specific-graph-title'>Customer Purchases</h2> */}
            <CustomerConsoleDataCard customerData={data[targetCustomerDataIndex]} name={customerFilter} handleReturnButtonClick={handleReturnButtonClick}/>
            <CustomerHistoGraph graphData={graphDataArray} />
        </div>
    )
}

export default CustomerConsoleCardContainer
