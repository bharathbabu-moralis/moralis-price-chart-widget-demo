import React, { useEffect, useRef } from "react";

const PRICE_CHART_ID = "price-chart-widget-container";

export const PriceChartWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadWidget = () => {
      if (typeof window.createMyWidget === "function") {
        window.createMyWidget(PRICE_CHART_ID, {
          width: "980px",
          height: "620px",
          chainId: "0x1",
          exchangeName: "UniswapV3",
          pairLabel: "WBTC/USDT",
          pairAddress: "0x56534741cd8b152df6d48adf7ac51f75169a83b2",
          defaultInterval: "1D",
          timeZone:
            Intl.DateTimeFormat().resolvedOptions().timeZone ?? "Etc/UTC",
          theme: "moralis",
          locale: "en",
          hideLeftToolbar: false,
          hideTopToolbar: false,
          hideBottomToolbar: false,
        });
      } else {
        console.error("createMyWidget function is not defined.");
      }
    };

    if (!document.getElementById("moralis-chart-widget")) {
      const script = document.createElement("script");
      script.id = "moralis-chart-widget";
      script.src = "https://moralis.com/embed/priceChart.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = loadWidget;
      script.onerror = () => {
        console.error("Failed to load the chart widget script.");
      };
      document.body.appendChild(script);
    } else {
      loadWidget();
    }
  }, []);

  return (
    <div style={{ width: "980px", height: "620px" }}>
      <div
        id={PRICE_CHART_ID}
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};
