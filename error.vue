<template>
    <div class="container">
        <span class="text">Такой страницы не существует</span>
        <h1>{{ error.statusCode }}</h1>
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