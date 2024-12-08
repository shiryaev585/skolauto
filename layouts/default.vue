<template>
    <div class="bg-slate-50 min-h-screen">
        <site-header />
        <site-popup>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, accusamus?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ipsum eos reprehenderit perspiciatis eveniet voluptatibus sunt? Excepturi atque optio eveniet.</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque provident, hic exercitationem quod dolorum harum!</span>
        </site-popup>
        <site-menu />
        <main>
            <slot></slot>
        </main>
        <site-footer />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>