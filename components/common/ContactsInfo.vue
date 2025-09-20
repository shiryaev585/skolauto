<template>
    <div class="container">
        <div class="flex flex-col lg:flex-row gap-4 items-baseline mb-4">
            <span class="text-xl w-28 text-gray-400">Телефон:</span>
            <a :href="phoneHref" class="text-xl link-hover">{{ contacts.phone.value }}</a>
        </div>
        <div class="flex flex-col lg:flex-row gap-4 items-baseline mb-4">
            <span class="text-xl w-28 text-gray-400">Адрес:</span>
            <a :href="addressHref" target="_blanc" class="text-xl link-hover">{{ contacts.address.value }}</a>
        </div>
        <span class="text-xl">Заезд справа от&nbsp;мойки самообслуживания (территория бывшего АТП).</span>
        <span class="text-xl">Ежедневно с&nbsp;08-00 до&nbsp;20-00, кроме Воскресения.</span>
    </div>
</template>

<script setup>
const phoneHref = computed(() => contacts.phone.type + contacts.phone.value?.replace(/(\()|(\)|(-))/g, ''));
// const emailHref = computed(() => contacts.email.type + contacts.email.value);
const addressHref = computed(() => contacts.address.href);
</script>
