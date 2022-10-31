import './styles.css';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { ChartConfig, Store, SumByGender } from '../../types';
import { makeRequest } from '../../util/requests';
import { buildSummary } from './helpers';
import ChartCard from '../chart-card';

function Filter() {
  const [stores, setStores] = useState<Store[]>([]);
  const [summary, setSummary] = useState(0);
  const [sumByGender, setSumByGender] = useState<ChartConfig>();

  const handleChangeStore = (id: number) => {
    makeRequest.get('/sales/summary?storeId=' + id).then((response) => {
      setSummary(response.data.sum);
    });

    makeRequest.get<SumByGender[]>('/sales/by-gender?storeId=' + id).then((response) => {
      setSumByGender(buildSummary(response.data));
    });
  };

  useEffect(() => {
    makeRequest.get('/stores').then((response) => {
      setStores(response.data);
    });
    handleChangeStore(0);
  }, []);

  return (
    <section className="filter-container base-card">
      <div className="filter-select base-card">
        <Select
          options={stores}
          isClearable
          classNamePrefix="filter-select"
          onChange={(value) => handleChangeStore(value ? value.id : 0)}
          getOptionLabel={(store: Store) => store.name}
          getOptionValue={(store: Store) => String(store.id)}
        />
      </div>
      <div>
        <ChartCard
          name=" "
          labels={sumByGender?.labels}
          series={sumByGender?.series}
          sum={summary}
        />
      </div>
    </section>
  );
}

export default Filter;
