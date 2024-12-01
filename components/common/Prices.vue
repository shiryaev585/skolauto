<template>
    <section class="container">
        <div class="lg:w-2/3 bg-white p-8 m-auto">
            <h2 class="heading text-3xl">Цены</h2>
            <div
                v-for="price in prices"
                :key="price.id"
                class="flex items-center justify-between pt-4 pb-4 border-slate-500 border-b-[1px] border-dotted"
            >
                <span class="text-gray-500 text-lg">{{ price.label }}</span>
                <span class="text-xl">{{ price.value }}</span>
            </div>
            <span class="text-sm text-gray-400 mt-8 inline-block">Ремонт скола зависит от вида, размера и состояния скола. Ремонт трещины 100-120&nbsp;руб./см, зависит от длины и состояния трещины, мин. ремонт 2000&nbsp;₽</span>
            <span class="text-sm text-gray-400 mt-1 block"><b>Скидка -25%</b> на второй скол.</span>
            <span class="text-sm text-gray-400 mt-1 block"><b>Скидка -10%</b> автоледи и пенсионерам.</span>
        </div>
    </section>
</template>

<script setup>
defineProps({
    prices: {
        type: Array,
        required: true
    }
})
</script>