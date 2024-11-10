<template>
    <header :class="[
        'header some fixed top-0 left-0 w-full flex items-center bg-slate-200',
        { '_scrolled backdrop-blur-md': isScrolled }
        ]">
        <div class="container flex items-center">
            <nav>
                <nuxt-link to="/">Главная</nuxt-link>
                <nuxt-link to="/posts">Блог</nuxt-link>
                <nuxt-link to="/contacts">Контакты</nuxt-link>
            </nav>
        </div>
    </header>
</template>

<script setup>
const isScrolled = ref(false);

const checkScroll = () => {
    const currentScroll = window.scrollY > 5;

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
        background: $red;
    }

    &._scrolled {
        background: rgba(255, 255, 255, .2);
    }
}
</style>