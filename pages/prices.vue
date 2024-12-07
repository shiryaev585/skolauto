<template>
    <div class="page">
        <common-prices class="section-top-offset" :prices="prices" />
    </div>
</template>

<script setup>
const prices = [
    {
        id: 1,
        label: 'Ремонт трещины',
        value: 'от 2000 ₽'
    },
    {
        id: 2,
        label: 'Ремонт скола',
        value: 'от 5000 ₽'
    },
    {
        id: 3,
        label: 'Ремонт лобового стекла',
        value: 'от 2000 ₽'
    },
    {
        id: 4,
        label: 'Ремонт бокового',
        value: 'от 5000 ₽'
    },
    {
        id: 5,
        label: 'Ремонт ещё чего-то',
        value: 'от 2000 ₽'
    },
    {
        id: 6,
        label: 'Ремонт ещё чего-то',
        value: 'от 5000 ₽'
    }
]
</script>