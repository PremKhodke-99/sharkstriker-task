import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    RadarController,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    RadarController,
    Title,
    Tooltip,
    Legend,
);

const RadarChart = () => {

    const RadarData = {
        labels: ["", "", "", ""],
    };
    const RadarOptions = {
        scale: {
            ticks: {
                min: -100,
                max: 0,
                stepSize: 20,
                showLabelBackdrop: false,
                backdropColor: "rgba(0,0,0,1)",
            },
            angleLines: {
                color: "rgba(255, 255, 255, 1)",
                lineWidth: 1,
            },
            gridLines: {
                color: "rgba(255, 255, 255, 1)",
                circular: true,
            },
        },
    };

    return (
        <Radar data={RadarData} options={RadarOptions} />
    )
}

export default RadarChart