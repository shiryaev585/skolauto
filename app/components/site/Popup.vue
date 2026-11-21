<script setup lang="ts">
const props = defineProps<{ open: boolean }>();
const emit = defineEmits<{ close: [] }>();
const dialog = useTemplateRef<HTMLDialogElement>('dialog');

watchPostEffect(() => {
    const element = dialog.value;
    if (!element || element.open === props.open) return;
    if (props.open) element.showModal();
    else element.close();
});
</script>

<template>
    <dialog ref="dialog" class="site-popup" @cancel.prevent="emit('close')">
        <ui-close-btn @click="emit('close')" />
        <slot />
    </dialog>
</template>

<style scoped>
.site-popup {
    position: fixed;
    inset: 0;
    margin: auto;
    max-width: calc(100% - 1rem);
    max-height: calc(100dvh - 1rem);
    overflow-y: auto;
    overscroll-behavior: contain;
}

.site-popup::backdrop {
    background: rgb(0 0 0 / 80%);
}
</style>
