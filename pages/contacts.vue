<template>
    <div class="page mb-16">
        <h2 class="section-heading container section-top-offset">Контакты</h2>

        <common-contacts-info class="section-top-offset" />

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

        <common-form class="section-top-offset" title="Связаться с нами" embedded />
    </div>
</template>

<script lang="ts" setup>
import type { MetaObject } from 'nuxt/schema';
import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapControls,
    YandexMapZoomControl,
    YandexMapDefaultMarker
} from 'vue-yandex-maps';

const head: MetaObject = {
    title: 'ProfiGlass | Ремонт автостёкл в Орле | Контакты',
    meta: [
        { name: 'description', content: 'Профессиональный ремонт трещин и сколов на вашем автомобиле в Орле по цене от 500 руб. Устранение повреждений на лобовых стеклах автомобиля по низким ценам. Записаться на ремонт или обучение ремонту автостекла можно на нашем сайте или по телефону +7(910)303-14-55' },
        { property: 'og:title', content: 'ProfiGlass | Ремонт автостёкл в Орле | Контакты' },
        { property: 'og:description', content: 'Профессиональный ремонт трещин и сколов на вашем автомобиле в Орле по цене от 500 руб. Устранение повреждений на лобовых стеклах автомобиля по низким ценам. Записаться на ремонт или обучение ремонту автостекла можно на нашем сайте или по телефону +7(910)303-14-55' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://profiglass.com.ru' },
        { property: 'og:locale', content: 'ru_RU' },
    ],
};

useHead(head);
</script>

<style lang="scss" scoped>
.map {
    height: fit-content;
}

:deep(.__ymap_container) {
    height: 75vh;
}
</style>