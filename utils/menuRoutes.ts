interface Route {
    id: string;
    name: string;
    path: string;
}

export const menuRoutes: Route[] = [
    // {
    //     id: crypto.randomUUID(),
    //     name: 'О нас',
    //     path: '/about'
    // },
    {
        id: crypto.randomUUID(),
        name: 'Цены',
        path: '/prices'
    },
    // {
    //     id: crypto.randomUUID(),
    //     name: 'Блог',
    //     path: '/posts'
    // },
    {
        id: crypto.randomUUID(),
        name: 'Контакты',
        path: '/contacts'
    }
];