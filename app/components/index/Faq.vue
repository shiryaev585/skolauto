<script setup lang="ts">
defineProps<{ faq: { id: number; question: string; answers: string[] }[] }>();
</script>

<template>
    <section class="container" aria-labelledby="faq-heading">
        <h2 id="faq-heading" class="section-heading">Вопросы и ответы</h2>
        <div class="inner-top-offset">
            <details v-for="item in faq" :key="item.id" class="group mb-4 bg-white shadow-lg">
                <summary class="flex list-none items-center gap-2 p-4 text-2xl cursor-pointer link-hover">
                    <span aria-hidden="true" class="faq-chevron shrink-0 group-open:rotate-90">
                        <img src="~/assets/icons/chevron-right.svg" alt="" width="28" height="28" class="size-7 group-open:hidden" />
                        <img src="~/assets/icons/chevron-down.svg" alt="" width="28" height="28" class="hidden size-7 -rotate-90 group-open:block" />
                    </span>
                    {{ item.question }}
                </summary>
                <div class="min-h-0 overflow-hidden px-4">
                    <p v-for="answer in item.answers" :key="answer" class="text-lg last:pb-4">{{ answer }}</p>
                </div>
            </details>
        </div>
    </section>
</template>

<style scoped>
summary::-webkit-details-marker {
    display: none;
}

@media (prefers-reduced-motion: no-preference) {
    .faq-chevron {
        transition: transform .3s ease;
    }

    details::details-content {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows .3s ease, content-visibility .3s allow-discrete;
    }

    details[open]::details-content {
        grid-template-rows: 1fr;
    }
}
</style>
