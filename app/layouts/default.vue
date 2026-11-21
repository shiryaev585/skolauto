<script setup lang="ts">
import { useGlobalStore } from '~/stores/global';

const globalStore = useGlobalStore();
const route = useRoute();
const main = useTemplateRef<HTMLElement>('main');

watch(() => route.path, async () => {
    globalStore.toggleMenu(false);
    globalStore.togglePopup(false);
    await nextTick();
    main.value?.focus({ preventScroll: true });
});
</script>

<template>
    <div class="bg-slate-50 min-h-screen flex flex-col">
        <a v-show="!globalStore.isMenu" class="skip-link" href="#main-content">Перейти к основному содержанию</a>
        <site-header />
        <site-popup
            id="callback-dialog"
            :open="globalStore.isPopup"
            aria-labelledby="callback-title"
            class="w-full md:w-3/4 bg-white"
            @close="globalStore.togglePopup(false)"
        >
            <common-form class="py-16" heading-id="callback-title" title="Заказать звонок" />
        </site-popup>
        <main id="main-content" ref="main" tabindex="-1" :inert="globalStore.isMenu">
            <slot></slot>
        </main>
        <site-footer :inert="globalStore.isMenu" />
    </div>
</template>
