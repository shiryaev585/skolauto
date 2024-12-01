<template>
    <component
        :is="url ? 'router-link' : 'button'"
        :to="url ? url : null"
        class="bg-slate-800 py-2 px-6 text-white block w-fit rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
    >
        <slot></slot>
    </component>
</template>

<script setup>
defineProps({
    url:{
        type: String,
        default: ''
    }
})
</script>