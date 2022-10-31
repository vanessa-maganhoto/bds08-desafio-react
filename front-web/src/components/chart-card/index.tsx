import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { formatPrice } from '../../util/formatters';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  sum: number;
};

function ChartCard({ labels = [], name, series = [], sum }: Props) {
  return (
    <div className="card-container">
      <div>
        <h2 className="card-sum-sales-quantity-title"> {formatPrice(sum)}</h2>
        <span className="sum-sales-quantity-label"> Total de Vendas</span>
      </div>

      <div className="chart-card-container">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="400"
          height="400"
          series={series}
        />
      </div>
    </div>
  );
}

export default ChartCard;
