import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const CustomerGraphContainer = ({ data, handleCustomerGraphClick }) => {

    let title = "Customers by Number of Orders"

    let toBeSorted = []

    let keys = Object.keys(data)
    keys.forEach((item) => {
            let entry = {
                customerName: data[item].customerName,
                'Number of Orders': data[item].orders.length,
                totalSpent: data[item].totalSpent
            }
            toBeSorted.push(entry)
    })


    const sortedData = (toBeSorted.slice().sort((a, b) => ((new Date(a['Number of Orders'])) - (new Date(b['Number of Orders'])))))
    

        return (
            <div className='customer-graph-div'>
                <h2>{title}</h2>
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart onClick={handleCustomerGraphClick} width={100} height={40} data={sortedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip viewBox={{ x: 0, y: 0, width: 100, height: 10 }} dataKey='Number of Orders' />
                        <Bar isAnimationActive={false} dataKey='Number of Orders' fill="#8884d8" />
                        {/* <Legend /> */}
                        <XAxis interval={12} tickMargin={10} tickSize={5} dataKey="customerName" />
                        <YAxis padding={{top: 50}} />
                    </BarChart>
                </ResponsiveContainer>

            </div>
        ) 
}

export default CustomerGraphContainer
