<template>
    <div :class="
        ['site-menu fixed w-full h-screen bg-slate-400 top-0 left-0 z-[9] translate-x-[-100%] transition-transform duration-300',
        {'translate-x-0': globalStore.isMenu}
        ]">

    </div>
</template>

<script setup>
import { useGlobalStore } from '~/stores/global';
const globalStore = useGlobalStore();
</script>
