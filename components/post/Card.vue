<template>
    <div class="post-card bg-white rounded-2xl overflow-hidden group shadow-xl">
        <div class="h-60 w-full relative overflow-hidden">
            <nuxt-img
                class="absolute object-cover w-full h-full group-hover:scale-110 duration-500"
                :src="post?._embedded['wp:featuredmedia'][0]?.source_url"
                :alt="post?._embedded['wp:featuredmedia'][0]?.alt_text"
                loading="lazy"
            />
        </div>

        <div class="p-6">
            <h3 class="mb-4 font-medium text-2xl tracking-wider text-center">
                {{ post.title.rendered }}
            </h3>
            <div class="mb-4 text-sm overflow-hidden ..." v-html="post.excerpt.rendered"></div>
            <ui-btn :url="`/posts/${post?.slug}`">
                Подробнее...
            </ui-btn>
        </div>
    </div>
</template>

<script setup>
defineProps({
    post: {
        type: Object,
        required: true
    }
});
</script>

<style lang="scss" scoped>

</style>