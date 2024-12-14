<template>
    <footer class="footer w-full bg-slate-300 flex items-center">
        <div class="container relative">
            <nuxt-link to="/" class="block w-20 sm:w-28">
                <ui-logo class="w-full" />
            </nuxt-link>
            <common-socials class="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 " />
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
    height: var(--footer-height);
}
</style>