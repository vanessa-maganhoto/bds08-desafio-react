import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { formatPrice } from '../../util/formatters';
import { buildPieChartConfig } from './helpers';

import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  sum: number;
};

function ChartCard({ labels = [], name, series = [], sum }: Props) {
  return (
    <div className="card-container">
      <div className="card-sum-description">
        <h2> {formatPrice(sum)}</h2>
        <span> Total de Vendas</span>
      </div>

      <div className="chart-card-container">
        <ReactApexChart options={buildPieChartConfig(labels, name)} type="donut" series={series} />
      </div>
    </div>
  );
}

export default ChartCard;
