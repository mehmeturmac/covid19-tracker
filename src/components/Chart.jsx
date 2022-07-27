import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function Chart() {
  return (
    <Line
      data={{
        labels: [2017, 2018, 2019, 2020, 2021],
        datasets: [
          {
            label: 'aasda',
            data: [10, 20, 30, 35, 20],
          },
        ],
      }}
    />
  );
}

export default Chart;
