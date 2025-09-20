export interface IPrice {
  id: string;
  label: string;
  value: string;
}

export const prices: IPrice[] = [
  {
    id: crypto.randomUUID(),
    label: 'Ремонт скола (1₽)',
    value: '1500-2000р.'
  },
  {
    id: crypto.randomUUID(),
    label: 'Ремонт скола (2₽)',
    value: '2500-3000р.'
  },
  {
    id: crypto.randomUUID(),
    label: 'Ремонт скола (5₽)',
    value: '3500-5000р.'
  },
  {
    id: crypto.randomUUID(),
    label: 'Ремонт трещин',
    value: '100р./см.'
  },
  {
    id: crypto.randomUUID(),
    label: 'Ремонт трещин до 19см',
    value: '2000р.'
  },
  {
    id: crypto.randomUUID(),
    label: 'Остановка трещины',
    value: '500/1000р.'
  },
];