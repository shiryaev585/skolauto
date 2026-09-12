export interface ContactInfo {
    value: string;
    type?: string;
    href?: string;
};

export interface Contacts {
    phone: ContactInfo;
    email?: ContactInfo;
    address: ContactInfo;
    coords: [number, number];
};

export const contacts: Contacts = {
    phone: {
        value: '+7(910)303-14-55',
        type: 'tel:',
    },
    // email: {
    //     value: 'test-mail@mail.ru',
    //     type: 'mailto:',
    // },
    address: {
        value: 'г. Орёл, р-н Заводской, ул. Колхозная, 11',
        href: 'https://yandex.ru/maps/10/orel/?ll=36.050033%2C52.951489&mode=whatshere&whatshere%5Bpoint%5D=36.050055%2C52.951475&whatshere%5Bzoom%5D=20.59&z=17',
    },
    coords: [36.050102, 52.951504],
};
