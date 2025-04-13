import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

// Set global font family
ChartJS.defaults.font.family = "Urbanist, sans-serif";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      type: "bar",
      label: "Revenue",
      data: [
        500000, 1000000, 2000000, 750000, 500000, 1500000, 1000000, 500000,
        750000, 1250000, 1000000, 2000000,
      ],
      backgroundColor: "#099137",
      barPercentage: 0.5,
      categoryPercentage: 0.9,
    },
    {
      type: "line",
      label: "Trend",
      data: [
        500000, 750000, 1500000, 1000000, 750000, 1250000, 1500000, 1000000,
        750000, 1000000, 1500000, 2000000,
      ],
      borderColor: "#EE7450",
      fill: false,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
        drawOnChartArea: true,
      },
      ticks: {
        min: 0,
        max: 2000000,
        stepSize: 500000,
        callback: (value) => {
          if (value === 2000000) return "2M";
          if (value === 1500000) return "1.5M";
          if (value === 1000000) return "1M";
          if (value === 500000) return "500k";
          return "";
        },
      },
    },
  },
  plugins: {
    datalabels: {
      display: false, // Disable ChartDataLabels for this chart
    },
  },
};

function RevenueChart() {
  return (
    <div className="h-72 border p-[2rem] rounded-md border-[#E2E2E2]">
      <p className="font-bold">Revenue Metrics</p>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
}

export default RevenueChart;
