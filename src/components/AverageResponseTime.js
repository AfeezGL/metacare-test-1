import { Line } from "react-chartjs-2";
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [12, 18, 37, 40, 35, 18, 30, 35],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const AverageResponseTime = () => {
  return (
    <div className="row border border-2 rounded-3 p-3">
      <div className="col-md-9 pt-3 pb-3">
        <header className="d-inline-flex align-items-center">
          <span className="me-3">Average response Time</span>
          <span className="pt-1 pb-1 ps-3 pe-3 [ percentage-green ]">
            +4.41%
          </span>
        </header>
        <Line data={data} options={options} />
      </div>
      <div className="col-md-3">
        <div className="border rounded border-1 bg-light p-3 mb-3">
          <p>Average Response Time</p>
          <p>30 Mins</p>
        </div>
        <div className="border rounded border-1 bg-light p-3">
          <p>Response Time</p>
          <p>1 Hour 30 Mins</p>
        </div>
      </div>
    </div>
  );
};

export default AverageResponseTime;
