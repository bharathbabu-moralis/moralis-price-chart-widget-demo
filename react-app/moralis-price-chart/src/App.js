import React from "react";
import { PriceChartWidget } from "./PriceChartWidget";

function App() {
  return (
    <>
      <h1 style={{ color: "#333", marginBottom: "20px", textAlign: "center" }}>
        <a href="https://moralis.com/widgets/price-chart">
          {" "}
          Moralis Price Chart Widget Demo React
        </a>
      </h1>
      <div style={{ marginLeft: "25%" }}>
        <PriceChartWidget />
      </div>
    </>
  );
}

export default App;
