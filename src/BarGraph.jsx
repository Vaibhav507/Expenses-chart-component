import React, { useEffect, useState } from 'react';
import data from './assets/data.json';

const BarGraph = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setChartData(data);
  }, []);

  return (
    <div className="bar-graph-container">
      <ul className="bar-graph">
        {chartData.map((item, index) => (
          <li key={index} style={{ height: `${item.amount*1.5}%` }}>
            <span className="amount">${item.amount}</span>
            <span className="label">{item.day}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BarGraph;
