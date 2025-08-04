import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { fetchDataPoints } from "../utils/graphHelper"; // adjust if needed

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

export default function GoalGraph({ goalId }: { goalId: string }) {
    const [data, setData] = useState<number[]>([]);
  
    useEffect(() => {
      fetchDataPoints(goalId).then((data) => {
        console.log("📊 Fetched data for goal", goalId, data);
        setData(data);
      });
    }, [goalId]);
  
    if (!data || data.length === 0) {
      return <div className="p-4 text-gray-500">No data to display.</div>;
    }
  
    const chartData = {
      labels: data.map((_, i) => `Session ${i + 1}`),
      datasets: [
        {
          label: "Correct Responses",
          data,
          fill: false,
          borderColor: "#4F46E5",
        },
      ],
    };
  
    return (
      <div className="p-4">
        <Line data={chartData} />
      </div>
    );
  }
  
