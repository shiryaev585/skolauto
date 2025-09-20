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
        href: 'https://yandex.ru/maps/10/orel/house/kolkhoznaya_ulitsa_11/Z08YdgNpT0QAQFtofXV0cHljZA==/?ll=36.049617%2C52.951500&z=17.01',
    },
    coords: [36.049617, 52.951500],
};
