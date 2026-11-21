<script setup lang="ts">
const emit = defineEmits<{ navigate: [] }>();
</script>

<template>
    <nav aria-label="Основная навигация" class="site-menu absolute top-full left-0 w-full overflow-y-auto bg-slate-400 flex flex-col justify-between xl:hidden">
        <ul class="container flex flex-col gap-10 pt-8">
            <li
                v-for="route in menuRoutes"
                :key="route.id"
            >
                <nuxt-link
                    :to="route.path"
                    class="font-heading uppercase tracking-widest text-2xl sm:text-4xl"
                    @click="emit('navigate')"
                >
                    {{ route.name }}
                </nuxt-link>
            </li>
        </ul>
        <common-socials class="container py-8" />
    </nav>
</template>

<style lang="scss" scoped>
.site-menu {
    height: calc(100dvh - var(--header-height));
    overscroll-behavior: contain;
}
</style>
