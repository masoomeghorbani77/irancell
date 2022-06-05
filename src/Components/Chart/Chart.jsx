import React from 'react';
import './Chart.css'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    YAxis
} from 'recharts'

export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className="chart" style={{height:"230px"}}>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={800}
                    height={360}
                    data={data}
                  
                >
                    
                    <XAxis dataKey="name"  />
                    <YAxis />
                    <Line type="monotone"  stroke="#ffcc00" dataKey={dataKey} />
                    <Tooltip />
               
                </LineChart> 
            </ResponsiveContainer>
        </div>
    )
}
