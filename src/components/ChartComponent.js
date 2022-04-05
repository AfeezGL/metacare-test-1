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

const options = {
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

const ChartComponent = ({ chartData }) => {
  const labels = chartData.data.numbers.map((data) => data.month);

  const data = {
    labels,
    datasets: [
      {
        label: chartData.data.name,
        data: chartData.data.numbers.map((data) => data.number),
        borderColor: chartData.data.color,
        backgroundColor: "#fff",
        pointStyle: "circle",
        pointRadius: 7,
        pointHoverRadius: 8,
      },
    ],
  };

  return (
    <section
      className="border border-2 [ chart-section ]"
      aria-labelledby="average-response-time"
    >
      <div className=" [ chart-container ]">
        <header className="mb-3">
          <div>
            <h2
              className="me-3 [ bold ] fs-5 d-inline"
              id="average-response-time"
            >
              {chartData.data.name}
            </h2>
            <span className="pt-1 pb-1 ps-3 pe-3 [ percentage-green ]">
              +4.41%
            </span>
          </div>
          <div className="[ chart-header-right ]">
            <div className="[ priority ]">
              <div
                className="[ color ]"
                style={{ backgroundColor: chartData.data.color }}
              ></div>
              <div className="[ bold ]">High Priority</div>
            </div>
            <select>
              <option value="This month" selected>
                This month
              </option>
              <option value="Last month">Last Month</option>
            </select>
          </div>
        </header>
        <Line data={data} options={options} />
      </div>
      <div className=" [ chart-aside ]">
        {chartData.data.averages.map((average) => (
          <div
            className="border rounded border-1 bg-light p-3"
            key={average.title}
          >
            <p className="fs-6">{average.title}</p>
            <p className="fs-4 [ bold ]">{average.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChartComponent;
