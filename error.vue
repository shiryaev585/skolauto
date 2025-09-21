<template>
    <div class="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit flex flex-col items-center gap-16">
        <span class="text-xl">{{ error.statusCode === 404 ? 'Такой страницы не существует' : error.message }}</span>
        <h1 class="text-8xl">{{ error.statusCode }}</h1>
        <ui-btn @click="handleError">На главную</ui-btn>
    </div>
</template>

<script setup>
const error = useError();

const handleError = () => {
    clearError({
        redirect: '/',
    });
};
</script>