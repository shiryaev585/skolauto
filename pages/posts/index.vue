<template>
    <div class="page">
        <div class="container grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            <post-card
                v-for="post in posts"
                :key="post?.id"
                :post="post"
            />
        </div>
    </div>
</template>

<script setup>
const { data: posts } = await useApi('/posts/', { query: { _embed: 1 } });
</script>

<style lang="scss" scoped>
</style>