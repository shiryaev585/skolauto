<template>
    <button
        type="button"
        aria-label="Закрыть окно"
        class="close-btn bg-slate-50 w-11 h-11 absolute z-[2] top-2 right-2 hover:bg-slate-200"
    >
    </button>
</template>

<style lang="scss" scoped>
.close-btn {
    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        background-color: currentColor;
        height: 2px;
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
