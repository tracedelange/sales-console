import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const RechartsOrders = ({ data, filterProduct }) => {


    const title = (filterProduct.length > 0) ? filterProduct + ' Year to Date Sales' : 'Total Year to Date Sales'

    const graphableDataArray = []

    //each entry is an object, the name of the object is the date of sale and the value of the object is the number of items sold that day
    let keys = Object.keys(data)
    keys.forEach((key) => {
        let subKeys = Object.keys(data[key])
        subKeys.forEach((item) => {
            if (filterProduct === '') {
                let entry = {
                    name: item,
                    'Number of Sales': data[key][item].length
                }

                graphableDataArray.push(entry)

            } else {

                let occurances = data[key][item].filter(x => x === filterProduct).length
                let entry = {
                    name: item,
                    'Number of Sales': occurances
                }

                graphableDataArray.push(entry)
            }
        })

    })

    const sortedData = graphableDataArray.slice().sort((a, b) => ((new Date(a.name)) - (new Date(b.name))))





    return (
        <div className='order-graph-div'>
            <h2>{title}</h2>
            <ResponsiveContainer width="100%" height="82%">

                <LineChart
                    width={500}
                    height={300}
                    data={sortedData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis angle={-10} interval={12} tickMargin={10} tickSize={5} dataKey="name" />
                    <YAxis padding={{ top: 100 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="Number of Sales" stroke="#6e79b5" />

                </LineChart>

            </ResponsiveContainer>
        </div>
    )
}

export default RechartsOrders
