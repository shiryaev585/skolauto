<template>
    <div class="page">
        <common-prices class="section-top-offset" :prices="prices" />
    </div>
</template>

<script lang="ts" setup>
import type { MetaObject } from 'nuxt/schema';

const head: MetaObject = {
    title: 'ProfiGlass | Ремонт автостёкл в Орле | Цены',
    meta: [
        { name: 'description', content: 'Профессиональный ремонт трещин и сколов на вашем автомобиле в Орле по цене от 500 руб. Устранение повреждений на лобовых стеклах автомобиля по низким ценам. Записаться на ремонт или обучение ремонту автостекла можно на нашем сайте или по телефону +7(910)303-14-55' },
        { property: 'og:title', content: 'ProfiGlass | Ремонт автостёкл в Орле | Цены' },
        { property: 'og:description', content: 'Профессиональный ремонт трещин и сколов на вашем автомобиле в Орле по цене от 500 руб. Устранение повреждений на лобовых стеклах автомобиля по низким ценам. Записаться на ремонт или обучение ремонту автостекла можно на нашем сайте или по телефону +7(910)303-14-55' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://profiglass.com.ru' },
        { property: 'og:locale', content: 'ru_RU' },
    ],
};

useHead(head);
</script>
