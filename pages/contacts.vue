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

<script setup>
import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapControls,
    YandexMapZoomControl,
    YandexMapDefaultMarker
} from 'vue-yandex-maps';
</script>

<style lang="scss" scoped>
.map {
    height: fit-content;
}

:deep(.__ymap_container) {
    height: 75vh;
}
</style>