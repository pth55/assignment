import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ serverData }) => {
    let uniquePestle = [];

    // Extract unique pestle values
    serverData.forEach((i) => {
        if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
            uniquePestle.push(i.pestle);
        }
    });

    // Count occurrences of each pestle
    const pestleCount = uniquePestle.map((item) => {
        return {
            pestle: item,
            count: serverData.filter((i) => i.pestle === item).length,
        };
    });

    const backgroundColors = [
        '#FF6384', // Red
        '#36A2EB', // Blue
        '#FFCE56', // Yellow
        '#4BC0C0', // Green
        '#9966FF', // Purple
        '#FF9F40', // Orange
    ];

    return (
        <div style={{ height: '50vh', width: '45vw' }}>
            <Pie
                data={{
                    labels: uniquePestle,
                    datasets: [
                        {
                            label: 'Projects',
                            data: pestleCount.map((i) => i.count),
                            backgroundColor: backgroundColors,
                            borderWidth: 1,
                            hoverOffset: 5,
                        },
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true,
                        },
                    },
                }}
                height={300}
            />
        </div>
    );
};

export default PieChart;
