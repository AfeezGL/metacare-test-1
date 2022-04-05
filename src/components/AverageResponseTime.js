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
  scales: {
    x: {
      grid: {
        display: false,
      },
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
      label: "Response time",
      data: [12, 18, 37, 40, 35, 18, 30, 35],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      pointStyle: "circle",
      pointRadius: 7,
      pointHoverRadius: 8,
    },
  ],
};

const AverageResponseTime = () => {
  return (
    <section
      className="border border-2 [ chart-section ]"
      aria-labelledby="average-response-time"
    >
      <div className=" [ chart-container ]">
        <header className="mb-3">
          <h2
            className="me-3 [ bold ] fs-5 d-inline"
            id="average-response-time"
          >
            Average response Time
          </h2>
          <span className="pt-1 pb-1 ps-3 pe-3 [ percentage-green ]">
            +4.41%
          </span>
        </header>
        <Line data={data} options={options} />
      </div>
      <div className=" [ chart-aside ]">
        <div className="border rounded border-1 bg-light p-3">
          <p className="fs-6">Average Response Time</p>
          <p className="fs-4 [ bold ]">30 Mins</p>
        </div>
        <div className="border rounded border-1 bg-light p-3">
          <p className="fs-6">Response Time</p>
          <p className="fs-4 [ bold ]">1 Hour 30 Mins</p>
        </div>
      </div>
    </section>
  );
};

export default AverageResponseTime;
