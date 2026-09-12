import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        isBodyLocked: false,
        isPopup: false,
        showPreloader: false,
        isMenu: false,
    }),

    actions: {
        toggleBodyLocked() {
            this.isBodyLocked = !this.isBodyLocked;

            this.isBodyLocked
                ? document.body.classList.add('_locked')
                : document.body.classList.remove('_locked');
        },

        togglePopup(payload: boolean) {
            this.isPopup = payload;
            this.toggleBodyLocked();
        },

        togglePreloader(payload: boolean) {
            this.showPreloader = payload;
        },

        toggleMenu(payload: boolean) {
            this.isMenu = payload;
            this.toggleBodyLocked();
        },
    },
});
