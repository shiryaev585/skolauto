<template>
    <header :class="[
        'header fixed top-0 left-0 w-full flex items-center bg-slate-200 z-10',
        { '_scrolled backdrop-blur-md': isScrolled }
        ]" @keydown.esc="closeMenu">
        <div class="container flex items-center justify-between">
            <nuxt-link to="/" aria-label="Профи Гласс — главная страница" @click="globalStore.toggleMenu(false)">
                <ui-logo class="w-36 sm:w-auto" />
            </nuxt-link>
            <div class="hidden xl:flex">
                <nav class="header__nav flex items-center" aria-label="Основная навигация">
                    <nuxt-link
                        v-for="route in menuRoutes"
                        :key="route.id"
                        :to="route.path"
                        class="header__nav-link font-heading uppercase tracking-widest link-hover"
                    >
                        {{ route.name }}
                    </nuxt-link>
                </nav>

                <a
                    class="flex items-center ml-8 text-sm link-hover"
                    :href="phoneHref"
                >
                    {{ contacts.phone.value }}
                </a>

                <common-socials class="ml-8" />

                <ui-btn type="button" class="ml-16" aria-haspopup="dialog" aria-controls="callback-dialog" @click="globalStore.togglePopup(true)">Заказать звонок</ui-btn>
            </div>

            <div class="flex xl:hidden items-center gap-3 lg:gap-8">
                <a class="flex items-center justify-center w-11 h-11" :href="phoneHref" :aria-label="`Позвонить в Профи Гласс по номеру ${contacts.phone.value}`">
                    <svg aria-hidden="true" focusable="false" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.8651 23.9132L29.7156 23.4632C29.3621 22.4118 28.2031 21.3153 27.1381 21.0264L23.1967 19.9495C22.1278 19.6587 20.6032 20.0498 19.8212 20.8319L18.3947 22.2586C13.2106 20.8575 9.14553 16.7916 7.74662 11.6075L9.17313 10.1808C9.95518 9.39863 10.3461 7.87568 10.0553 6.80667L8.98057 2.86261C8.68977 1.79556 7.59147 0.636154 6.54231 0.286303L6.09236 0.135002C5.04121 -0.214799 3.54205 0.139001 2.76015 0.921053L0.626335 3.05721C0.245133 3.43646 0.00153191 4.52122 0.00153191 4.52517C-0.0731185 11.3009 2.58325 17.8291 7.37532 22.6221C12.1556 27.4031 18.6581 30.0561 25.4131 29.9991C25.4481 29.9991 26.5641 29.7596 26.9456 29.3801L29.0791 27.2461C29.8611 26.4641 30.2146 24.9646 29.8651 23.9132Z" fill="#1e293b" />
                    </svg>
                </a>
                <button
                    ref="menuButton"
                    type="button"
                    class="burger w-11 h-11 relative"
                    :aria-label="globalStore.isMenu ? 'Закрыть меню' : 'Открыть меню'"
                    :aria-expanded="globalStore.isMenu"
                    aria-controls="mobile-menu"
                    @click="globalStore.toggleMenu(!globalStore.isMenu)"
                >
                    <span :class="
                        ['block inset-x-1 h-1 bg-slate-800 absolute rounded-full transition-transform duration-300',
                        globalStore.isMenu ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-2']"></span>
                    <span :class="
                        ['block inset-x-1 h-1 bg-slate-800 absolute bottom-1/2 translate-y-1/2 rounded-full transition-opacity duration-300',
                        {'opacity-0': globalStore.isMenu}]"></span>
                    <span :class="
                        ['block inset-x-1 h-1 bg-slate-800 absolute rounded-full transition-transform duration-300',
                        globalStore.isMenu ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-2']"></span>
                </button>
            </div>
        </div>
        <site-menu v-show="globalStore.isMenu" id="mobile-menu" @navigate="closeMenu" />
    </header>
</template>

<script setup lang="ts">
import { menuRoutes } from '~/utils/menuRoutes';
import { useGlobalStore } from '~/stores/global';

const globalStore = useGlobalStore();
const menuButton = useTemplateRef<HTMLButtonElement>('menuButton');
const isScrolled = ref(false);
const phoneHref = `tel:${contacts.phone.value.replace(/[^+\d]/g, '')}`;

function closeMenu() {
    if (!globalStore.isMenu) return;
    globalStore.toggleMenu(false);
    menuButton.value?.focus({ preventScroll: true });
}

onMounted(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const onResize = () => {
        if (desktop.matches) globalStore.toggleMenu(false);
    };
    const checkScroll = () => { isScrolled.value = window.scrollY > 20; };

    checkScroll();
    desktop.addEventListener('change', onResize);
    window.addEventListener('scroll', checkScroll, { passive: true });
    onScopeDispose(() => {
        desktop.removeEventListener('change', onResize);
        window.removeEventListener('scroll', checkScroll);
    });
});
</script>

<style lang="scss" scoped>
.header {
    transition: background .3s ease-out;
    height: var(--header-height);

    &._scrolled {
        background: rgba(255, 255, 255, .2);
    }

    &__nav {
        gap: 2rem;

        &-link {
            &[aria-current="page"] {
                pointer-events: none;
                opacity: .5;
            }
        }
    }
}
</style>
