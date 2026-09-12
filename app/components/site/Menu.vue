<template>
    <div :class="
        ['site-menu fixed w-full h-screen bg-slate-400 top-0 left-0 z-[9] transition-transform duration-300 flex flex-col justify-between',
        { 'translate-x-0': globalStore.isMenu, 'translate-x-[-100%]': !globalStore.isMenu }]">
        <ul class="container flex flex-col gap-10 pt-8">
            <li
                v-for="route in menuRoutes"
                :key="route.id"
            >
                <nuxt-link
                    :to="route.path"
                    class="font-heading uppercase tracking-widest text-2xl sm:text-4xl"
                    @click="globalStore.toggleMenu(false)"
                >
                    {{ route.name }}
                </nuxt-link>
            </li>
        </ul>
        <common-socials class="container pb-8" />
    </div>
</template>

<script setup>
import { useGlobalStore } from '~/stores/global';
const globalStore = useGlobalStore();
</script>

<style lang="scss" scoped>
.site-menu {
    padding-top: var(--header-height);
}
</style>
