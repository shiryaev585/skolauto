<template>
    <div class="page mb-16">
        <h2 class="section-heading container section-top-offset">Контакты</h2>

        <div class="container section-top-offset">
            <div class="flex flex-col lg:flex-row gap-4 items-baseline mb-8">
                <span class="text-xl lg:text-2xl w-52 text-gray-400">Телефон:</span>
                <a :href="phoneHref" class="text-2xl lg:text-3xl link-hover">{{ contacts.phone.value }}</a>
            </div>
            <div class="flex flex-col lg:flex-row gap-4 items-baseline mb-8">
                <span class="text-xl lg:text-2xl w-52 text-gray-400">Email:</span>
                <a :href="emailHref" class="text-2xl lg:text-3xl link-hover">{{ contacts.email.value }}</a>
            </div>
            <div class="flex flex-col lg:flex-row gap-4 items-baseline">
                <span class="text-xl lg:text-2xl w-52 text-gray-400">Адрес:</span>
                <a :href="addressHref" target="_blanc" class="text-2xl lg:text-3xl link-hover">{{ contacts.address.value }}</a>
            </div>
        </div>

        <common-form class="section-top-offset" title="Связаться с нами" embedded />

        <div class="map container section-top-offset">
            <client-only>
                <yandex-map
                    :settings="{
                        location: {
                            center: contacts.coords,
                            zoom: 15,
                        },
                    }"
                >
                    <yandex-map-default-scheme-layer />
                    <yandex-map-default-features-layer />
                    <yandex-map-controls :settings="{ position: 'right' }">
                        <yandex-map-zoom-control />
                    </yandex-map-controls>

                    <yandex-map-default-marker
                        position="top left-center"
                        :settings="{ coordinates: contacts.coords, title: 'Autoskol', color: '#1e293b' }"
                    />
                </yandex-map>
            </client-only>
        </div>
    </div>
</template>

<script setup>
import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapControls,
    YandexMapZoomControl,
    YandexMapDefaultMarker
} from 'vue-yandex-maps';

const phoneHref = computed(() => contacts.phone.type + contacts.phone.value?.replace(/(\()|(\)|(-))/g, ''));
const emailHref = computed(() => contacts.email.type + contacts.email.value);
const addressHref = computed(() => contacts.address.href);
</script>

<style lang="scss" scoped>
.map {
    height: fit-content;
}

:deep(.__ymap_container) {
    height: 75vh;
}
</style>