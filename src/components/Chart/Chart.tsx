import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface RegistrationChartProps {
  registrations: { registrationDate: string }[] | undefined;
  chartType?: "line" | "bar";
}

export const Chart: React.FC<RegistrationChartProps> = ({
  registrations,
  chartType = "line",
}) => {
  if (!registrations || registrations.length === 0) {
    return <div>No data available</div>;
  }

  const groupedData = registrations.reduce(
    (acc: Record<string, number>, reg) => {
      const date = reg.registrationDate;
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    },
    {}
  );

  const labels = Object.keys(groupedData);
  const data = Object.values(groupedData);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Registrations per day",
        data,
        backgroundColor: "#72a1ed",
        borderColor: "#2563eb",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Participants",
        },
        beginAtZero: true,
        ticks: { precision: 0 },
      },
    },
  };

  return chartType === "bar" ? (
    <Line data={chartData} options={options} />
  ) : (
    <Bar data={chartData} options={options} />
  );
};
