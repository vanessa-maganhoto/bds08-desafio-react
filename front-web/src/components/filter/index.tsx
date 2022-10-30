import './styles.css';
import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Store } from '../../types';
import { makeRequest } from '../../util/requests';

export type StoreFilterData = {
  name: Store | null;
};

type Props = {
  onFilterChange: (filter: StoreFilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [stores, setStores] = useState<Store[]>([]);

  const { handleSubmit, setValue, control, getValues } = useForm<StoreFilterData>();

  const onSubmit = (formData: StoreFilterData) => {
    onFilterChange(formData);
  };

  const handleChangeStore = (value: Store) => {
    setValue('name', value);

    const obj: StoreFilterData = {
      name: getValues('name')
    };

    onFilterChange(obj);
  };

  useEffect(() => {
    makeRequest.get('/stores').then((response) => {
      setStores(response.data);
    });
  }, []);

  return (
    <section className="filter-container base-card">
      <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={stores}
              isClearable
              classNamePrefix="filter-select"
              onChange={(value) => handleChangeStore(value as Store)}
              getOptionLabel={(store: Store) => store.name}
              getOptionValue={(store: Store) => String(store.id)}
            />
          )}
        />
      </form>
    </section>
  );
}

export default Filter;
