<script setup lang="ts">
defineOptions({ inheritAttrs: false });

const props = defineProps<{
    id: string;
    label: string;
    hint?: string;
    errorMessage: string;
    maskData?: string;
}>();
const model = defineModel<string | number>();
const invalid = ref(false);
const description = computed(() => [
    props.hint && `${props.id}-hint`,
    invalid.value && `${props.id}-error`,
].filter(Boolean).join(' ') || undefined);

function updateValidity(event: Event) {
    if (invalid.value) invalid.value = !(event.target as HTMLInputElement).validity.valid;
}
</script>

<template>
    <div class="flex min-w-0 flex-col gap-2">
        <label :for="id" class="text-xl text-slate-700">{{ label }}</label>
        <input
            v-bind="$attrs"
            :id="id"
            v-model="model"
            v-maska
            :data-maska="maskData"
            :aria-invalid="invalid || undefined"
            :aria-describedby="description"
            class="w-full rounded border border-slate-500 bg-white p-4 text-xl shadow-sm"
            @invalid="invalid = true"
            @input="updateValidity"
        />
        <p v-if="hint" :id="`${id}-hint`" class="text-slate-700">{{ hint }}</p>
        <p v-if="invalid" :id="`${id}-error`" class="font-semibold text-red-800">{{ errorMessage }}</p>
    </div>
</template>
