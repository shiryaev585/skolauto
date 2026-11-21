<template>
    <section class="container" aria-labelledby="prices-heading">
        <div class="lg:w-2/3 bg-white p-4 sm:p-8 m-auto">
            <component :is="pageHeading ? 'h1' : 'h2'" id="prices-heading" class="heading text-3xl">Цены</component>
            <dl aria-describedby="prices-note">
                <div
                    v-for="price in prices"
                    :key="price.id"
                    class="flex flex-wrap items-baseline justify-between gap-x-4 py-4 border-slate-500 border-b border-dotted"
                >
                    <dt class="text-gray-600 text-lg">{{ price.label }}</dt>
                    <dd class="text-xl">{{ price.value }}</dd>
                </div>
            </dl>
            <p id="prices-note" class="text-md text-gray-600 mt-8">На&nbsp;грузовые машины и&nbsp;автобусы коэф. х1, 5&nbsp;на повреждения выше&nbsp;2м.</p>
            <!-- <span class="text-sm text-gray-400 mt-1 block"><b>Скидка -25%</b> на второй скол.</span>
            <span class="text-sm text-gray-400 mt-1 block"><b>Скидка -10%</b> автоледи и пенсионерам.</span> -->
        </div>
    </section>
</template>

<script setup>
defineProps({
    pageHeading: Boolean,
    prices: {
        type: Array,
        required: true
    }
})
</script>
