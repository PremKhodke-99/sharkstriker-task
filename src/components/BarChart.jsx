import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = ({barwidth, barheight}) => {
  const data = {
    labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
    datasets: [
      {
        label: "Severity",
        data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      },
    ],
  };
  const options = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            drawBorder: true,
            borderDash: [4, 4],
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            display: true,
            drawBorder: true,
            borderDash: [2, 2],
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
      <Bar width={barwidth} height={barheight} data={data} options={options} />
  );
}

export default BarChart