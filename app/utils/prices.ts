import { generateUUID } from './generateUUID';

export interface Price {
  id: string;
  label: string;
  value: string;
}

export const prices: Price[] = [
  {
    id: generateUUID(),
    label: 'Ремонт скола (1₽)',
    value: '1500-2000р.'
  },
  {
    id: generateUUID(),
    label: 'Ремонт скола (2₽)',
    value: '2500-3000р.'
  },
  {
    id: generateUUID(),
    label: 'Ремонт скола (5₽)',
    value: '3500-5000р.'
  },
  {
    id: generateUUID(),
    label: 'Ремонт трещин',
    value: '100р./см.'
  },
  {
    id: generateUUID(),
    label: 'Ремонт трещин до 19см',
    value: '2000р.'
  },
  {
    id: generateUUID(),
    label: 'Остановка трещины',
    value: '500/1000р.'
  },
];