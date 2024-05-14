import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": false,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "60",
        "timezone": "Asia/Kolkata",
        "theme": "dark",
        "style": "1",
        "locale": "in",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "hide_side_toolbar": false,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;

    // Check if the script has already been appended
    if (!container.current.querySelector('script')) {
      container.current.appendChild(script);
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%"  }}>
      
    </div>
  );
}

export default memo(TradingViewWidget);