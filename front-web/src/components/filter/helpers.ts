import { Gender, SumByGender } from '../../types';

export const buildFormatGender = (gender: Gender) => {
  const textByGender = {
    MALE: 'Masculino',
    FEMALE: 'Feminino',
    OTHER: 'Outros'
  };
  return textByGender[gender];
};

export const buildSummary = (sumByGender: SumByGender[]) => {
  const labels = sumByGender.map((s) => buildFormatGender(s.gender));
  const series = sumByGender.map((s) => s.sum);
  return { labels, series };
};
