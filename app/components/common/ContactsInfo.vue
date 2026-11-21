<template>
    <address class="container not-italic">
        <div class="flex flex-col lg:flex-row gap-4 items-baseline mb-4">
            <span class="text-xl w-28 text-gray-600">Телефон:</span>
            <a :href="phoneHref" class="text-xl underline underline-offset-4">{{ contacts.phone.value }}</a>
        </div>
        <div class="flex flex-col lg:flex-row gap-4 items-baseline mb-4">
            <span class="text-xl w-28 text-gray-600">Адрес:</span>
            <a :href="addressHref" target="_blank" rel="noopener noreferrer" class="text-xl underline underline-offset-4">
                {{ contacts.address.value }}<span class="sr-only"> (на карте, в новой вкладке)</span>
            </a>
        </div>
        <span class="text-xl">Заезд справа от&nbsp;мойки самообслуживания (территория бывшего АТП). Ежедневно с&nbsp;08-00 до&nbsp;20-00, кроме Воскресения.</span>
    </address>
</template>

<script setup>
const phoneHref = computed(() => contacts.phone.type + contacts.phone.value?.replace(/(\()|(\)|(-))/g, ''));
// const emailHref = computed(() => contacts.email.type + contacts.email.value);
const addressHref = computed(() => contacts.address.href);
</script>
