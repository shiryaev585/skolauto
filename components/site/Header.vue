<template>
    <header :class="[
        'header fixed top-0 left-0 w-screen flex items-center bg-slate-200 z-10',
        { '_scrolled backdrop-blur-md': isScrolled }
        ]">
        <div class="container flex items-center justify-between">
            <nuxt-link to="/">
                <ui-logo />
            </nuxt-link>
            <div class="hidden xl:flex">
                <nav class="header__nav flex items-center">
                    <nuxt-link to="/about" class="header__nav-link font-heading uppercase tracking-widest link-hover">О нас</nuxt-link>
                    <nuxt-link to="/prices" class="header__nav-link font-heading uppercase tracking-widest link-hover">Цены</nuxt-link>
                    <nuxt-link to="/posts" class="header__nav-link font-heading uppercase tracking-widest link-hover">Блог</nuxt-link>
                    <nuxt-link to="/contacts" class="header__nav-link font-heading uppercase tracking-widest link-hover">Контакты</nuxt-link>
                </nav>

                <a class="flex items-center ml-8 text-sm" href="tel:+79998887766">+7(999)888-77-66</a>

                <ui-btn class="ml-16" @click="globalStore.togglePopup(true)">Заказать звонок</ui-btn>
            </div>

            <div class="flex xl:hidden gap-6 lg:gap-12">
                <a class="flex items-center justify-center w-8 lg:w-10 h-8 lg:h-10" href="tel:+79998887766">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.8651 23.9132L29.7156 23.4632C29.3621 22.4118 28.2031 21.3153 27.1381 21.0264L23.1967 19.9495C22.1278 19.6587 20.6032 20.0498 19.8212 20.8319L18.3947 22.2586C13.2106 20.8575 9.14553 16.7916 7.74662 11.6075L9.17313 10.1808C9.95518 9.39863 10.3461 7.87568 10.0553 6.80667L8.98057 2.86261C8.68977 1.79556 7.59147 0.636154 6.54231 0.286303L6.09236 0.135002C5.04121 -0.214799 3.54205 0.139001 2.76015 0.921053L0.626335 3.05721C0.245133 3.43646 0.00153191 4.52122 0.00153191 4.52517C-0.0731185 11.3009 2.58325 17.8291 7.37532 22.6221C12.1556 27.4031 18.6581 30.0561 25.4131 29.9991C25.4481 29.9991 26.5641 29.7596 26.9456 29.3801L29.0791 27.2461C29.8611 26.4641 30.2146 24.9646 29.8651 23.9132Z" fill="#1e293b" />
                    </svg>
                </a>
                <button class="burger w-8 lg:w-10 h-8 lg:h-10 relative" @click="toggleMenu">
                    <span :class="
                        ['block w-full h-1 bg-slate-800 absolute top-0 rounded-full transition-transform duration-300',
                        {'top-1/2 rotate-45': globalStore.isMenu}]"></span>
                    <span :class="
                        ['block w-full h-1 bg-slate-800 absolute bottom-1/2 translate-y-1/2 rounded-full transition-opacity duration-300',
                        {'opacity-0': globalStore.isMenu}]"></span>
                    <span :class="
                        ['block w-full h-1 bg-slate-800 absolute bottom-0 rounded-full transition-transform duration-300',
                        {'top-1/2 rotate-[-45deg]': globalStore.isMenu}]"></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
const isScrolled = ref(false);
import { useGlobalStore } from '~/stores/global';

const globalStore = useGlobalStore();

const checkScroll = () => {
    const currentScroll = window.scrollY > 20;

    if (isScrolled === currentScroll) { return; }
    isScrolled.value = currentScroll;
};

const toggleMenu = () => {
    globalStore.isMenu ? globalStore.toggleMenu(false) : globalStore.toggleMenu(true);
};

onMounted(() => {
    window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
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
            &.router-link-active {
                pointer-events: none;
                opacity: .5;
            }
        }
    }
}
</style>