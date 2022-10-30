export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type Store = {
  name: string;
  id: number;
};

export type FilterData = {
  store?: Store;
  gender?: Gender;
};
