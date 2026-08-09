import { generateUUID } from './generateUUID';

interface Route {
    id: string;
    name: string;
    path: string;
}

export const menuRoutes: Route[] = [
    {
        id: generateUUID(),
        name: 'Обучение',
        path: '/study'
    },
    {
        id: generateUUID(),
        name: 'Цены',
        path: '/prices'
    },
    // {
    //     id: generateUUID(),
    //     name: 'Блог',
    //     path: '/posts'
    // },
    {
        id: generateUUID(),
        name: 'Контакты',
        path: '/contacts'
    }
];