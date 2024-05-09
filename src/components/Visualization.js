// components/Visualization.js
import React from 'eact';
import { Chart } from 'chart.js';

const Visualization = ({ data }) => {
  const chartRef = React.createRef();

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: 'line',
      data: data,
      options: {
        title: {
          display: true,
          text: 'SDG Progress',
        },
      },
    });
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default Visualization;