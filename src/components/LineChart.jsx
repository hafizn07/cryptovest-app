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
  import { Col, Row, Typography } from "antd";
  
  const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i].price);
    }
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinTimestamp.push(
        new Date(
          coinHistory?.data?.history[i].timestamp * 1000
        ).toLocaleDateString()
      );
    }
  
    const data = {
      labels: coinTimestamp.reverse(),
      datasets: [
        {
          label: "Price In USD",
          data: coinPrice.reverse(),
          fill: false,
          backgroundColor: "#0071bd",
          borderColor: "#0071bd",
        },
      ],
    };
  
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  
    return (
      <>
        <Typography.Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Typography.Title>
  
        <Typography.Title level={5} className="price-change">
          Change: {coinHistory?.data?.change}%
        </Typography.Title>
        <Typography.Title level={5} className="current-price">
          Current {coinName} Price: $ {currentPrice}
        </Typography.Title>
        <Line data={data} options={options}/>
      </>
    );
  };
  
  export default LineChart;