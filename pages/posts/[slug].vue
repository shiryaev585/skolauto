<template>
    <div class="page">
        <nuxt-img
            v-if="hasImage"
            :src="image?.src"
            :alt="image?.alt"
            loading="lazy"
            class="h-[66.66vh] w-full object-cover"
        />
        <div class="post container section-top-offset mb-16">
            <nuxt-link to="/posts" class="flex items-center gap-x-4 mb-4 w-fit hover:opacity-50 transition-opacity duration-300">
                <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292891 7.29289C-0.097633 7.68342 -0.097633 8.31658 0.292891 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292891 7.29289ZM31 7L0.999998 7V9L31 9V7Z" fill="black"/>
                </svg>
                <span>вернуться к постам</span>
            </nuxt-link>
            <h1 class="section-heading">{{ post?.title?.rendered }}</h1>
            <div v-html="post?.content?.rendered" class="inner-top-offset"></div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();

const { data: posts } = await useApi('/posts/', { query: { _embed: 1, slug: route.params.slug } });
const post = posts.value?.[0];
const hasImage = post?._embedded['wp:featuredmedia'] ? true : false;
const image = computed(() => {
    return {
        src: post?._embedded['wp:featuredmedia'][0]?.source_url,
        alt: post?._embedded['wp:featuredmedia'][0]?.alt_text
    }
});
</script>

<style lang="scss">
.post {
    & h4 {
        @apply mb-4 text-2xl;
    }

    & p {
        @apply mb-4 text-xl lg:w-3/4;
    }

    & ul,
    & ol {
        @apply list-disc mb-4 pl-7 text-xl;
    }
}
</style>