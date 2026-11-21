<script setup lang="ts">
import { useGlobalStore } from '~/stores/global';

const props = withDefaults(defineProps<{
    title?: string;
    headingId?: string;
    btnInner?: string;
    embedded?: boolean;
}>(), {
    title: 'Заказать звонок',
    btnInner: 'Связаться с нами',
});

const id = useId();
const titleId = computed(() => props.headingId ?? `${id}-title`);
const globalStore = useGlobalStore();
const config = useRuntimeConfig();
const form = useTemplateRef<HTMLFormElement>('form');
const retry = useTemplateRef<HTMLButtonElement>('retry');
const pending = ref(false);
const success = ref(false);
const error = ref('');

async function onSubmit() {
    const element = form.value;
    if (!element || pending.value) return;

    pending.value = true;
    error.value = '';
    try {
        const response = await fetch(config.public.requestUrl, {
            method: 'POST',
            body: new FormData(element),
            headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error('Request failed');

        const hadFocus = element.contains(document.activeElement);
        success.value = true;
        await nextTick();
        if (hadFocus) retry.value?.focus();
    } catch {
        error.value = 'Не удалось отправить заявку. Проверьте соединение и попробуйте ещё раз.';
    } finally {
        pending.value = false;
    }
}

async function startAgain() {
    success.value = false;
    await nextTick();
    const name = form.value?.elements.namedItem('name');
    if (name instanceof HTMLInputElement) name.focus();
}
</script>

<template>
    <section class="container">
        <h2 :id="titleId" class="section-heading">{{ title }}</h2>
        <form
            v-if="!success"
            ref="form"
            method="post"
            :action="config.public.requestUrl"
            enctype="multipart/form-data"
            :aria-labelledby="titleId"
            :aria-busy="pending"
            class="inner-top-offset"
            @submit.prevent="onSubmit"
        >
            <p class="mb-3">Оба поля обязательны.</p>
            <div class="grid gap-6 lg:grid-cols-3">
                <ui-input
                    :id="`${id}-name`"
                    name="name"
                    type="text"
                    autocomplete="name"
                    :autofocus="!embedded"
                    label="Имя"
                    pattern=".*\S.*"
                    error-message="Введите имя."
                    required
                />
                <ui-input
                    :id="`${id}-phone`"
                    name="phone"
                    type="tel"
                    autocomplete="tel"
                    label="Телефон"
                    mask-data="+7 (###) ###-##-##"
                    pattern="\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}"
                    error-message="Введите все 10 цифр номера после +7."
                    required
                />
            </div>

            <p class="inner-top-offset">
                Нажимая кнопку «{{ btnInner }}» Вы даёте своё согласие на обработку
                <nuxt-link class="underline link-hover" to="/privacy" @click="!embedded && globalStore.togglePopup(false)">персональных данных</nuxt-link>
            </p>

            <button type="submit" :aria-disabled="pending || undefined" class="form-button">
                {{ btnInner }}
            </button>
        </form>

        <site-preloader :show-preloader="pending" aria-hidden="true" />
        <p role="status" class="mt-4 text-xl empty:m-0">
            <template v-if="success">Заявка принята. Мы свяжемся с вами в ближайшее время.</template>
            <template v-else-if="pending">Отправляем заявку…</template>
        </p>
        <p role="alert" class="mt-4 font-semibold text-red-800 empty:m-0">{{ error }}</p>
        <button v-if="success" ref="retry" type="button" class="form-button" @click="startAgain">
            Отправить ещё раз
        </button>
    </section>
</template>

<style scoped lang="scss">
.form-button {
    @apply mt-4 lg:mt-8 block w-full lg:w-1/3 bg-slate-800 p-4 lg:p-6 shadow-lg text-2xl text-white hover:bg-slate-700;
}

.form-button[aria-disabled="true"] {
    cursor: wait;
}
</style>
