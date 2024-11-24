<template>
    <button
        class="close-btn bg-slate-50 w-12 h-12 absolute top-8 right-8 hover:scale-110 transition-transform duration-300 "
        @click="$emit('close')"
    >
    </button>
</template>

<script>
</script>

<style lang="scss" scoped>
.close-btn {
    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        background-color: #b4b4b4;
        height: 1px;
        width: 40%;
    }

    &::before {
        transform: translate3d(-50%, -50%, 0) rotate(45deg);
    }

    &::after {
        transform: translate3d(-50%, -50%, 0) rotate(-45deg);
    }
}
</style>