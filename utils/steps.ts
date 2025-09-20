export interface IStep {
  id: string;
  number: string;
  step: string;
}

export const steps: IStep[] = [
  {
    id: crypto.randomUUID(),
    number: 'I',
    step: 'Очистка повреждения',
  },
  {
    id: crypto.randomUUID(),
    number: 'II',
    step: 'Откачка воздуха',
  },
  {
    id: crypto.randomUUID(),
    number: 'III',
    step: 'Заливка полимера',
  },
  {
    id: crypto.randomUUID(),
    number: 'IV',
    step: 'Облучение УФ-лампой',
  },
  {
    id: crypto.randomUUID(),
    number: 'V',
    step: 'Очистка и полировка',
  },
];