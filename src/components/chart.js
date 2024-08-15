import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {
    return <Line data={chartData} options={options} />;
};

const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

const chartData = {
    labels: labels,
    datasets: [
        {
            label: 'Balance',
            data: labels.map(() => Math.floor(Math.random() * 601) + 200),
            fill: false,
            borderColor: 'blue',
            tension: 0.1,
        },
    ],
};

const options = {
    scales: {
        y: {
            border: { dash: [4, 4] },
            beginAtZero: false,
            type: 'linear',
        },
        x: {
            border: { dash: [4, 4] },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
    maintainAspectRatio: false,
    layout: {
        padding: 30,
    },
};

export { LineChart };
