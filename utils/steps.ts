import { generateUUID } from './generateUUID';

export interface IStep {
  id: string;
  number: string;
  step: string;
}

export const steps: IStep[] = [
  {
    id: generateUUID(),
    number: 'I',
    step: 'Очистка повреждения',
  },
  {
    id: generateUUID(),
    number: 'II',
    step: 'Откачка воздуха',
  },
  {
    id: generateUUID(),
    number: 'III',
    step: 'Заливка полимера',
  },
  {
    id: generateUUID(),
    number: 'IV',
    step: 'Облучение УФ-лампой',
  },
  {
    id: generateUUID(),
    number: 'V',
    step: 'Очистка и полировка',
  },
];