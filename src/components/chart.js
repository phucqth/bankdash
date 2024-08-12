import { Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PieController,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PieController
);

const LineChart = () => {
    return <Line data={chartData} options={options} />;
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Balance',
            data: labels.map(() => Math.floor(Math.random() * 800) + 1),
            fill: false,
            borderColor: 'blue',
            tension: 0.1,
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true,
            max: 800,
            type: 'linear',
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

export { LineChart };
