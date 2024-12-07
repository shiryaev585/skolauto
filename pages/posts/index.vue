<template>
    <div class="page">
        <div class="container section-top-offset text-xl">
            <h1 class=" text-5xl">Блог</h1>
            <span class="inner-top-offset mb-2 inline-block">В блоге рассмотрены актуальные вопросы ремонта автостекла:</span>
            <ul class="list-disc pl-7 text-xl">
                <li>принцип ремонта;</li>
                <li>что сделать до ремонта;</li>
                <li>какие гарантии могут быть по видам повреждений;</li>
                <li>распространённые мифы о ремонта автостекла.</li>
            </ul>
        </div>
        <div class="container section-top-offset grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
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