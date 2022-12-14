import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoint }) => {
  return (
    <div className='chart'>
      {dataPoint.map(data => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={null}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
