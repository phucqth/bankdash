import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement } from 'chart.js';
const data = {
    labels: ['Entertainment', 'Bill expenses', 'Food', 'Others'],
    datasets: [
        {
            data: [30, 15, 35, 25],
            backgroundColor: ['#343C6A', '#FC7900', '#1814F3', '#FA00FF'],
            borderWidth: 1,
        },
    ],
};
const options = {
    plugins: {
        legend: {
            display: false,
            position: 'bottom',
        },
    },
    scales: {
        r: {
            display: false,
        },
    },
    layout: {
        padding: 30,
    },
};
ChartJS.register(RadialLinearScale, ArcElement);
const PieChart = () => {
    return <PolarArea data={data} options={options} />;
};

export default PieChart;
