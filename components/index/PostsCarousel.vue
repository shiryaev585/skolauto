<template>
    <section class="container">
        <h2 class="section-heading">Блог</h2>
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
                    }
                }"
            >
                <swiper-slide
                    v-for="post in posts"
                    :key="post.id"
                    class="pb-10"
                >
                    <div class="slide">
                        <nuxt-img
                            v-if="post?._embedded['wp:featuredmedia']"
                            :src="post?._embedded['wp:featuredmedia'][0]?.source_url"
                            :alt="post?._embedded['wp:featuredmedia'][0]?.alt_text"
                            loading="lazy"
                            class="h-60 rounded-xl object-cover w-full"
                        />
                        <nuxt-img
                            v-else
                            src="/images/post-card.webp"
                            alt="Изображение превью поста"
                            loading="lazy"
                            class="h-60 rounded-xl object-cover w-full"
                        />
                        <nuxt-link
                            :to="`/posts/${post?.slug}`"
                            class="mt-4 text-center block link-hover"
                        >
                            {{ post.title.rendered }}
                        </nuxt-link>
                    </div>
                </swiper-slide>
            </swiper-container>
        </client-only>
    </section>
</template>

<script setup>
const { data: posts } = await useApi('/posts/', { query: { _embed: 1 } });
</script>