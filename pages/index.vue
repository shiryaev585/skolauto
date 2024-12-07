<template>
    <div class="page mb-16">
        <index-intro />
        <index-posts-carousel class="section-top-offset" />
        <common-prices class="section-top-offset" :prices="prices" />
    </div>
</template>

<script setup>
const prices = [
    {
        id: 1,
        label: 'Ремонт трещины',
        value: 'от 5000 ₽'
    },
    {
        id: 2,
        label: 'Ремонт скола',
        value: 'от 5000 ₽'
    }
]
</script>