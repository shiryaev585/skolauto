<template>
    <section class="relative h-[66.66vh]">
        <nuxt-img
            class="w-full h-full absolute top-0 left-0 object-cover"
            src="/images/index/intro-bg.webp"
            srcset="/images/index/intro-bg-400w.webp 400w, /images/index/intro-bg-600w.webp 600w, /images/index/intro-bg-800w.webp 800w, /images/index/intro-bg-1000w.webp 1000w, /images/index/intro-bg-1200w.webp 1200w, /images/index/intro-bg-1600w.webp 1600w"
            sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (min-width: 1201px) 1600px"
            alt="Ремонт авто стекла"
            loading="lazy"
        />
        <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div class="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 z-1 container">
            <h1 class="heading text-white text-5xl">Сохранить автостекло и избежать замены</h1>
            <h2 class="font-main heading text-white text-3xl mt-32">Ремонт скола от 5000&nbsp;₽</h2>
            <h2 class="font-main heading text-white text-3xl mt-4">Ремонт трещины от 2000&nbsp;₽</h2>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>