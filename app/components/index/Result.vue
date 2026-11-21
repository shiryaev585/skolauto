<script setup lang="ts">
import image1 from '~/assets/images/index/1.webp';
import image2 from '~/assets/images/index/2.webp';
import image3 from '~/assets/images/index/3.webp';
import image4 from '~/assets/images/index/4.webp';
import image5 from '~/assets/images/index/5.webp';
import image6 from '~/assets/images/index/6.webp';
import image7 from '~/assets/images/index/7.webp';
import image8 from '~/assets/images/index/8.webp';
import image9 from '~/assets/images/index/9.webp';
import image10 from '~/assets/images/index/10.webp';
import image11 from '~/assets/images/index/11.webp';
import image12 from '~/assets/images/index/12.webp';

const starChip = 'Слева на стекле белый звездообразный скол, справа после ремонта виден слабый след.';
const radialChip = 'Скол с тёмным центром и расходящимися лучами. На правом снимке после ремонта лучи почти не видны.';
const crack = 'Слева над приборной панелью видна длинная трещина. Справа тот же участок стекла после ремонта.';
const photos = [
    { src: image1, alt: starChip },
    { src: image2, alt: radialChip },
    { src: image3, alt: crack },
    { src: image4, alt: starChip },
    { src: image5, alt: radialChip },
    { src: image6, alt: crack },
    { src: image7, alt: radialChip },
    { src: image8, alt: 'Слева кольцевой скол с двумя лучами, справа инструмент указывает на место ремонта.' },
    { src: image9, alt: 'Скол рядом с линейкой. На двух снимках справа инструмент указывает на след от скола.' },
    { src: image10, alt: 'Тёмный скол на стекле с волнистыми нитями обогрева. На последнем снимке видны только нити.' },
    { src: image11, alt: 'На снимках видны приспособление для ремонта на стекле, обработанный участок и автомобиль.' },
    { src: image12, alt: 'Скол 45 мм на стекле Lanos до и после ремонта. На правом снимке остался бледный след.' },
];
const activePhoto = ref<(typeof photos)[number] | null>(null);
const a11y = {
    itemRoleDescriptionMessage: 'слайд',
    slideLabelMessage: '{{index}} из {{slidesLength}}',
    paginationBulletMessage: 'Показать фото {{index}}',
};
</script>

<template>
    <section class="container" aria-labelledby="results-heading">
        <h2 id="results-heading" class="section-heading">Результат</h2>
        <client-only>
            <swiper-container
                :slides-per-view="1"
                :space-between="15"
                :loop="true"
                :watch-slides-progress="true"
                :a11y="a11y"
                :pagination="{ clickable: true, bulletElement: 'button' }"
                :breakpoints="{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }"
                class="inner-top-offset"
            >
                <swiper-slide v-for="(photo, i) in photos" :key="i">
                    <button
                        type="button"
                        class="photo-button block w-full hover:opacity-90"
                        aria-haspopup="dialog"
                        aria-controls="photo-dialog"
                        @click="activePhoto = photo"
                    >
                        <span class="sr-only">Увеличить фото {{ i + 1 }}. </span>
                        <img :src="photo.src" :alt="photo.alt" loading="lazy" class="h-96 object-cover w-full" />
                    </button>
                </swiper-slide>
            </swiper-container>
            <template #fallback>
                <ul role="list" aria-label="Фотографии ремонта" class="inner-top-offset flex gap-4 overflow-x-auto">
                    <li v-for="(photo, i) in photos" :key="i" class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 shrink-0">
                        <a :href="photo.src"><img :src="photo.src" :alt="photo.alt" loading="lazy" class="h-96 w-full object-cover" /></a>
                    </li>
                </ul>
            </template>
        </client-only>

        <site-popup
            id="photo-dialog"
            :open="activePhoto !== null"
            aria-label="Увеличенная фотография ремонта"
            class="w-full md:w-3/4 lg:w-1/2 bg-white pt-14"
            @close="activePhoto = null"
        >
            <img v-if="activePhoto" :src="activePhoto.src" :alt="activePhoto.alt" class="w-full max-h-[75dvh] object-contain" />
        </site-popup>
    </section>
</template>

<style scoped>
swiper-slide:not(.swiper-slide-visible) {
    visibility: hidden;
}

.photo-button:focus-visible {
    outline: 3px solid white;
    outline-offset: -5px;
    box-shadow: none;
}

.photo-button:focus-visible img {
    outline: 3px solid #1d4ed8;
    outline-offset: -8px;
}

swiper-container::part(pagination) {
    position: static;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-block: .5rem;
}

swiper-container::part(bullet),
swiper-container::part(bullet-active) {
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    margin: 0;
    opacity: 1;
    border: 8px solid transparent;
    border-radius: 50%;
    background: #475569 content-box;
}

swiper-container::part(bullet-active) {
    border-width: 5px;
    background-color: #1e293b;
}

swiper-container::part(bullet):focus-visible,
swiper-container::part(bullet-active):focus-visible {
    outline: 3px solid #1d4ed8;
    outline-offset: -2px;
}

@media (prefers-reduced-motion: reduce) {
    swiper-container::part(wrapper) {
        transition-duration: .01ms !important;
    }
}

@media (forced-colors: active) {
    swiper-container::part(bullet),
    swiper-container::part(bullet-active) {
        forced-color-adjust: none;
        background-color: ButtonText;
    }

    swiper-container::part(bullet-active) {
        background-color: Highlight;
    }
}
</style>
