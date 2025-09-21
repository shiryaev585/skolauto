<template>
    <section class="container">
        <h2 class="section-heading">Результат</h2>
        <client-only>
            <swiper-container
                :slides-per-view="1"
                :space-between="15"
                :loop="true"
                :pagination="{
                    clickable: true
                }"
                class="inner-top-offset"
                :breakpoints="{
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1280: {
                        slidesPerView: 4
                    },
                }"
            >
                <swiper-slide
                    v-for="(image, i) in images"
                    :key="i"
                    class="pb-10"
                    @click="setActiveImage(image)"
                >
                    <div class="slide cursor-pointer hover:opacity-90 transition-opacity">
                        <img
                            :src="image"
                            alt="результат"
                            loading="lazy"
                            class="h-96 object-cover w-full"
                        />
                    </div>
                </swiper-slide>
            </swiper-container>
        </client-only>

        <transition name="fade">
            <div v-if="activeImage" class="fixed top-0 left-0 right-0 w-full h-full bg-black/80 z-20">
                <ui-close-btn @click="disactiveImage" />
                <img
                    :src="activeImage"
                    alt="результат"
                    class="fixed bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-3/4 lg:w-1/2 object-cover"
                    loading="lazy"
                />
            </div>
        </transition>
    </section>
</template>

<script setup>
import { useGlobalStore } from '~/stores/global';
import image_1 from '~/assets/images/index/1.webp';
import image_2 from '~/assets/images/index/2.webp';
import image_3 from '~/assets/images/index/3.webp';
import image_4 from '~/assets/images/index/4.webp';
import image_5 from '~/assets/images/index/5.webp';
import image_6 from '~/assets/images/index/6.webp';
import image_7 from '~/assets/images/index/7.webp';
import image_8 from '~/assets/images/index/8.webp';
import image_9 from '~/assets/images/index/9.webp';
import image_10 from '~/assets/images/index/10.webp';
import image_11 from '~/assets/images/index/11.webp';
import image_12 from '~/assets/images/index/12.webp';

const globalStore = useGlobalStore();

const images = [image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11, image_12];

const activeImage = ref('');

const setActiveImage = (image) => {
    activeImage.value = image;
    globalStore.togglePopup(false);
}

const disactiveImage = () => {
    activeImage.value = '';
    globalStore.togglePopup(false);
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>