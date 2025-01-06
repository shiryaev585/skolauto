<template>
    <div class="page mb-16">
        <index-intro />
        <index-result class="section-top-offset" />
        <index-steps class="section-top-offset" :steps="steps" />
        <common-prices class="section-top-offset" :prices="prices" />
        <index-posts-carousel class="section-top-offset" />
    </div>
</template>

<script setup>
const steps = [
    {
        id: 1,
        number: 'I',
        step: 'Очистка повреждения'
    },
    {
        id: 2,
        number: 'II',
        step: 'Откачка воздуха'
    },
    {
        id: 3,
        number: 'III',
        step: 'Заливка полимера'
    },
    {
        id: 4,
        number: 'IV',
        step: 'Облучение УФ-лампой'
    },
    {
        id: 5,
        number: 'V',
        step: 'Очистка и полировка'
    }
]

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