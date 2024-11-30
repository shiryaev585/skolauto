<template>
    <div class="page">
        <div class="container mt-16" v-html="post?.content?.rendered"></div>
    </div>
</template>

<script setup>
const route = useRoute();

const { data: posts } = await useApi('/posts/', { query: { _embed: 1, slug: route.params.slug } });
const post = posts.value?.[0];

</script>

<style lang="scss" scoped>

</style>