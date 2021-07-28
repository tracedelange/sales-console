import React from 'react'
import { LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts';

const CustomerHistoGraph = ({graphData}) => {



    return (


            <ResponsiveContainer width="60%" height="100%">
                <BarChart width={150} height={40} data={graphData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip viewBox={{ x: 0, y: 0, width: 400, height: 10 }} dataKey='name' />
                    <Bar dataKey='value' fill="#8884d8" />
                    {/* <Legend /> */}
                    <XAxis  tickMargin={10} tickSize={5} dataKey="name">
                    </XAxis>
                    <YAxis allowDecimals={false} padding={{top: 50}} >
                        <Label value="Number of purchases" angle={-90} offset={-20} position="center" />    
                    </YAxis>
                </BarChart>
            </ResponsiveContainer>


    )
}

export default CustomerHistoGraph
