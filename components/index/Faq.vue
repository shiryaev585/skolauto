<template>
    <section class="container">
        <h2 class="section-heading">Вопрос - ответ</h2>

        <div class="inner-top-offset">
            <div
                v-for="item in faq"
                :key="item.id"
                class="mb-4 p-4 bg-white shadow-lg"
            >
                <div class="text-2xl cursor-pointer transition-opacity link-hover" @click="$emit('toggle-answer', item)">
                    <span>{{ item.question }}</span>
                </div>

                <div :class="['overflow-hidden transition-[max-height] duration-300', item.classHeight]">
                    <div class="mt-4">
                        <p
                            v-for="(answer, i) in item.answers"
                            :key="i"
                            v-html="answer"
                            class="text-lg"
                        ></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    faq: {
        type: Array,
        default: () => []
    }
});
</script>