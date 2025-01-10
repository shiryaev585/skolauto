<template>
    <div :class="[
        'site-popup fixed top-0 left-0 right-0 w-full h-full bg-black/80 transition-opacity duration-300',
        { 'opacity-100 z-20': isPopup, 'opacity-0 z-[-1]': ! isPopup }
        ]">
        <ui-close-btn class="z-[2]" @click="globalStore.togglePopup(false)" />
        <div class="bg-white fixed bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-full md:w-3/4">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { useGlobalStore } from '~/stores/global';

const globalStore = useGlobalStore();
const isPopup = computed(() => globalStore.isPopup);
</script>