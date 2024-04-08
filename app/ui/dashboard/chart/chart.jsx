"use client"
import React, { useEffect, useRef } from 'react';
import styles from "@/app/ui/dashboard/chart/chart.module.css"
import Chart from 'chart.js/auto';

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

const LineChartComponent = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (data) {
            // Jeśli istnieje poprzedni wykres, zniszcz go
            if (chartInstance.current !== null) {
                chartInstance.current.destroy();
            }

            // Stwórz nowy wykres na canvasie
            chartInstance.current = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels: data.map(entry => entry.name),
                    datasets: [
                        {
                            label: 'Visit',
                            data: data.map(entry => entry.visit),
                            fill: false,
                            borderColor: 'rgba(75,192,192,1)',
                            tension: 0.1
                        },
                        {
                            label: 'Click',
                            data: data.map(entry => entry.click),
                            fill: false,
                            borderColor: 'rgba(255,99,132,1)',
                            tension: 0.1
                        }
                    ]
                }
            });
        }

        // Zwolnij zasoby przy czyszczeniu komponentu
        return () => {
            if (chartInstance.current !== null) {
                chartInstance.current.destroy();
            }
        };
    }, [data]);

    return (
        <div className={styles.container}>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default LineChartComponent;
