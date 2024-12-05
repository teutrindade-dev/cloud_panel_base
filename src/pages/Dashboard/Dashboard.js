import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Line } from "react-chartjs-2";

// Configuração inicial para gráficos (Chart.js)
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const [cpuUsage, setCpuUsage] = useState(0);
    const [memoryUsage, setMemoryUsage] = useState(0);
    const [diskUsage, setDiskUsage] = useState(0);

    // Simula a atualização de dados
    useEffect(() => {
        const interval = setInterval(() => {
            // Simulação de dados (0 a 10)
            setCpuUsage(Math.random() * 10);
            setMemoryUsage(Math.random() * 10);
            setDiskUsage(Math.random() * 10);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Espaço para API futura
    // useEffect(() => {
    //     fetch("ENDPOINT_API_AQUI")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setCpuUsage(data.cpuUsage);
    //             setMemoryUsage(data.memoryUsage);
    //             setDiskUsage(data.diskUsage);
    //         });
    // }, []);

    const chartData = {
        labels: ["0s", "2s", "4s", "6s", "8s", "10s"],
        datasets: [
            {
                label: "CPU Usage (%)",
                data: [0, cpuUsage],
                borderColor: "#a7c4bc",
                backgroundColor: "rgba(167, 196, 188, 0.5)",
            },
            {
                label: "Memory Usage (%)",
                data: [0, memoryUsage],
                borderColor: "#c0a88e",
                backgroundColor: "rgba(192, 168, 142, 0.5)",
            },
            {
                label: "Disk Usage (%)",
                data: [0, diskUsage],
                borderColor: "#d9d9d3",
                backgroundColor: "rgba(217, 217, 211, 0.5)",
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        animation: {
            duration: 1500,
            easing: "easeInOutBounce",
        },
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "System Performance Overview",
            },
        },
    };

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="charts-container">
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default Dashboard;
