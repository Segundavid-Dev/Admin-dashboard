import { Stage, Layer, Circle, Text } from "react-konva";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ScatterController,
  LinearScale,
  CategoryScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register Chart.js components and the datalabels plugin
ChartJS.register(
  ScatterController,
  LinearScale,
  CategoryScale,
  ChartDataLabels
);

const data = {
  datasets: [
    {
      label: "Events",
      data: [
        { x: 10, y: 6, event: "GIZ: AI in Blockchain", color: "#1a1a1a" },
        {
          x: 11,
          y: 5,
          event: "UNDP: Cloud Development Arch...",
          color: "#f5f5d5",
        },
        {
          x: 13,
          y: 4,
          event: "STRIVE: Cloud Development Arch...",
          color: "#d3e3f4",
        },
        {
          x: 15,
          y: 2,
          event: "STRIVE: Cloud Development Arch...",
          color: "#f4c7c3",
        },
        { x: 17, y: 0, event: "GIZ: AI in Blockchain", color: "#1a1a1a" },
      ],
      pointRadius: 10,
      pointBackgroundColor: (context) => context.raw.color,
      pointBorderWidth: 0,
      showLine: false,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    x: {
      type: "linear",
      min: 10,
      max: 19,
      ticks: {
        stepSize: 1,
        callback: (value) => value,
        color: "#000",
      },
      grid: {
        display: true,
        drawOnChartArea: true,
        color: "#E2E2E2",
      },
    },
    y: {
      type: "category",
      labels: ["Sun", "Sat", "Fri", "Thu", "Wed", "Tue", "Mon"],
      ticks: {
        color: "#000",
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    tooltip: {
      enabled: false,
    },
    datalabels: {
      display: true,
      align: "right",
      anchor: "center",
      offset: 10,
      formatter: (value) => value.event,
      color: "#000",
      font: {
        size: 12,
        family: "Urbanist, sans-serif",
      },
      clamp: true,
      clip: true,
      textAlign: "left",
    },
    legend: {
      display: false,
    },
  },
};

export default function VennChart() {
  return (
    <div className="grid grid-cols-2 gap-10 justify-center items-center p-10 bg-[#E6E6E6]">
      <Chart1 />
      <TimelineChart />
    </div>
  );
}

function Chart1() {
  return (
    <div className="bg-white rounded-lg h-[328px] flex flex-col">
      <h1 className="font-bold p-4">Top Organizers</h1>
      <div className="flex justify-center items-center flex-1">
        <Stage width={400} height={256}>
          <Layer>
            <Circle x={200} y={128} radius={50} fill="#1a1a1a" />
            <Text
              x={180}
              y={123}
              text="GIZ"
              fontFamily="Urbanist, sans-serif"
              fontSize={14}
              fill="#fff"
            />
            <Circle x={240} y={98} radius={30} fill="#f5f5d5" />
            <Text
              x={225}
              y={93}
              text="Others"
              fontFamily="Urbanist, sans-serif"
              fontSize={12}
              fill="#000"
            />

            <Circle x={250} y={158} radius={25} fill="#d3e3f4" />
            <Text
              x={235}
              y={153}
              text="Strive"
              fontFamily="Urbanist, sans-serif"
              fontSize={12}
              fill="#000"
            />

            <Circle x={270} y={118} radius={20} fill="#f4c7c3" />
            <Text
              x={255}
              y={113}
              text="CC-Hub"
              fontFamily="Urbanist, sans-serif"
              fontSize={10}
              fill="#000"
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

function TimelineChart() {
  return (
    <div className="bg-white rounded-lg p-4 h-[328px] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-lg">22 May 2024</h1>
        <div className="text-gray-500">Weekly ▼</div>
      </div>
      <div className="flex-1">
        <Chart type="scatter" data={data} options={options} />
      </div>
    </div>
  );
}
