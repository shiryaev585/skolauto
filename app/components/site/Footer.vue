<template>
    <footer class="w-full bg-slate-300 flex items-center mt-auto py-5">
        <div class="container relative flex flex-wrap justify-between items-center gap-4">
            <nuxt-link to="/" class="block w-20 sm:w-28">
                <ui-logo class="w-full" />
            </nuxt-link>
            <common-socials class="md:absolute md:bottom-1/2 md:right-1/2 md:translate-x-1/2 md:translate-y-1/2 " />
            <nuxt-link class="link-hover font-heading" to="/privacy">Политика обработки персональных данных</nuxt-link>
        </div>
    </footer>
</template>
