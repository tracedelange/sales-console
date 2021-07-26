import React from 'react'
import DataCard from './DataCard'
import StatsCard from './StatsCard'

const DataGraph = ({data}) => {

    //Iterate over products and assign variables
    let bestSeller = {
        numberSold : 0
    }
    let worstSeller = {
        numberSold : Infinity
    }
    // let mostProfitable = {
    //     numberSold : 1,
    //     productCost: 1
    // }

    for (let i = 0; i < Object.keys(data).length; i++ ){
        // console.log(data[i])
        if (data[i].numberSold > bestSeller.numberSold){
            bestSeller = data[i]
        }
        if (data[i].numberSold < worstSeller.numberSold) {

            worstSeller = data[i]
        }
        // if ((data[i].numberSold * data[i].productCost) > (mostProfitable.numberSold * mostProfitable.productCost)) {
        //     mostProfitable = data[i]
        // }
    }

    console.log(worstSeller)

    return (
        <div className='card-div'>

            <StatsCard data={data}/>
            <DataCard title={'Best Selling Product:'} product={bestSeller} />
            {/* <DataCard title={'Most Profitable'} product={bestSeller} /> */}
            <DataCard title={'Worst Selling Product'} product={worstSeller} />

            
        </div>
    )
}

export default DataGraph
