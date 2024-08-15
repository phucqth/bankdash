import { Bar } from 'react-chartjs-2';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Tooltip,
} from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Diposit',
            data: labels.map(() => Math.floor(Math.random() * 500) + 100),
            backgroundColor: ['#1814F3'],
            borderRadius: 15,
        },
        {
            label: 'Withdraw',
            data: labels.map(() => Math.floor(Math.random() * 500) + 100),
            backgroundColor: ['#FF82AC'],
            borderRadius: 15,
        },
    ],
};
const options = {
    plugins: {
        legend: {
            position: 'top',
            align: 'end',
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
    },
    layout: {
        padding: 10,
    },
    maintainAspectRatio: false,
};
const BarChart = () => {
    return <Bar data={data} options={options} />;
};
export default BarChart;
