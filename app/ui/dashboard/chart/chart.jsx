"use client"
import styles from "@/app/ui/dashboard/chart/chart.module.css"
import { LineChart, CartesianGrid, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: "Monday",
        visit: 300,
        click: 123
    },
    {
        name: "Tuesday",
        visit: 250,
        click: 100
    },
    {
        name: "Wednesday",
        visit: 280,
        click: 110
    },
    {
        name: "Thursday",
        visit: 320,
        click: 130
    },
    {
        name: "Friday",
        visit: 350,
        click: 140
    },
    {
        name: "Saturday",
        visit: 400,
        click: 160
    },
    {
        name: "Sunday",
        visit: 380,
        click: 150
    }
];

const Chart = () => {
    return (
        <div className={styles.container}>
            <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visit" stroke="#8884d8" />
                <Line type="monotone" dataKey="click" stroke="#82ca9d" />
            </LineChart></div>
    )
}

export default Chart