export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type Store = {
  name: string;
  id: number;
};

export type SumByGender = {
  gender: Gender;
  sum: number;
};

export type ChartConfig = {
  labels: string[];
  series: number[];
};
