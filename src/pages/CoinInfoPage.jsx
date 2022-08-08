import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useParams, useSearchParams } from "react-router-dom";
import "./infopage.css";
import FetchData from "../api/FetchData";
//chart
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
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CoinInfoPage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [info, setInfo] = useState();
  const [graphData, setGraphData] = useState();

  useMemo(() => {
    FetchData();
  }, []);
  console.log(searchParams.get("id"));

  const graphApiData = useSelector((state) => state.graphData);
  useEffect(() => {
    graphApiData && setGraphData(graphApiData);
  }, [graphApiData]);
  const targetId = parseInt(searchParams.get("id"));
  const dataArr = useSelector((state) => state.dataArray);

  useEffect(() => {
    const tname =
      dataArr &&
      dataArr.filter((obj) => {
        return obj.id === targetId;
      });
    tname && tname[0] && setInfo(tname[0].name);
  }, [dataArr]);
  let price =
    graphData &&
    graphData.map((obj) => {
      return obj.price;
    });

  const time =
    graphData &&
    graphData.map((obj) => {
      return obj.datetime;
    });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: info,
      },
    },
  };
  const labels = [...time];
  const data = {
    labels,
    datasets: [
      {
        label: info,
        data: labels.map((val,i) => price[i]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="chart-container">
      {console.log(graphData)}
      <Line options={options} data={data} />
    </div>
  );
}

export default CoinInfoPage;
