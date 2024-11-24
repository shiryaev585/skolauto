<template>
    <header :class="[
        'header fixed top-0 left-0 w-screen flex items-center bg-slate-200 z-10',
        { '_scrolled backdrop-blur-md': isScrolled }
        ]">
        <div class="container flex items-center justify-between">
            <nuxt-link to="/">
                <ui-logo />
            </nuxt-link>
            <div class="flex">
                <nav class="header__nav flex items-center">
                    <nuxt-link to="/about" class="header__nav-link font-heading uppercase tracking-widest hover:opacity-50 transition-opacity duration-300">О нас</nuxt-link>
                    <nuxt-link to="/posts" class="header__nav-link font-heading uppercase tracking-widest hover:opacity-50 transition-opacity duration-300">Блог</nuxt-link>
                    <nuxt-link to="/contacts" class="header__nav-link font-heading uppercase tracking-widest hover:opacity-50 transition-opacity duration-300">Контакты</nuxt-link>
                </nav>

                <a class="flex items-center ml-8 text-sm" href="tel:+79998887766">+7(999)888-77-66</a>

                <ui-btn class="ml-16" @click="globalStore.togglePopup(true)">Заказать звонок</ui-btn>
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

    @include sm-down {
        // background: $red;
    }

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