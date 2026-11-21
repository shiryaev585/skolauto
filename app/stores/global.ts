import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        isPopup: false,
        showPreloader: false,
        isMenu: false,
    }),

    actions: {
        togglePopup(payload: boolean) {
            this.isPopup = payload;
        },

        togglePreloader(payload: boolean) {
            this.showPreloader = payload;
        },

        toggleMenu(payload: boolean) {
            this.isMenu = payload;
        },
    },
});
