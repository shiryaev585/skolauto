<template>
    <div :class="['ui-input flex flex-col relative gap-4', { _focused: focused, _filled: modelValue }]">
        <label :for="name" class="label transition-all duration-500 pointer-events-none text-xl text-gray-400 absolute z-[2] p-4 lg:p-6 top-0 left-0">{{ label }}</label>
        <input
            :id="name"
            v-maska
            :value="modelValue"
            :name="name"
            :disabled="disabled"
            :required="required"
            :data-maska="maskData"
            class="outline-none bg-white p-4 lg:p-6 shadow-lg text-2xl"
            :type="type"
            @focus="focused = true"
            @blur="focused = false"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script setup>
defineEmits(['update:modelValue']);
defineProps({
    label: {
        type: String,
        default: ''
    },

    name: {
        type: String,
        default: ''
    },

    type: {
        type: String,
        default: 'text'
    },

    modelValue: {
        type: [String, Number],
        default: null
    },

    disabled: {
        type: Boolean,
        default: false
    },

    required: {
        type: Boolean,
        default: false
    },
        
    maskData: {
        type: String,
        default: ''
    }
});
const focused = ref(false);
</script>

<style lang="scss" scoped>
.ui-input {
    &._filled,
    &._focused {
        & .label {
            transform: translate3d(0, -3.5rem, 0);
            font-size: 1rem;
        }
    }
}
</style>