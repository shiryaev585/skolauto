<template>
    <section class="container">
        <site-preloader :show-preloader="showPreloader" />
        <h2 class="section-heading">{{ title }}</h2>
        <transition name="fade" mode="out-in">
            <form
                v-if="!success"
                class="inner-top-offset"
                @submit.prevent="onSubmit"
            >
                <div class="flex flex-col lg:flex-row gap-8">
                    <ui-input
                        id="name"
                        v-model="form.name"
                        class="w-full lg:w-1/3"
                        name="name"
                        type="text"
                        label="Имя*"
                        required
                    />
                    <ui-input
                        id="phone"
                        v-model="form.phone"
                        class="w-full lg:w-1/3"
                        mask-data="+7 (###) ###-##-##"
                        name="phone"
                        type="tel"
                        label="Телефон*"
                        required
                    />
                </div>

                <span class="inner-top-offset block ">Нажимая кнопку «{{ btnInner }}» Вы даёте своё согласие на обработку <nuxt-link class="underline link-hover" to="/privacy" @click="globalStore.togglePopup(false)">персональных данных</nuxt-link></span>

                <button
                    class="inner-top-offset bg-slate-800 p-4 lg:p-6 shadow-lg text-2xl text-white block w-full lg:w-1/3 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                    @click="onSubmit"
                >
                    {{ btnInner }}
                </button>
            </form>

            <div v-else class="inner-top-offset flex flex-col items-center">
                <h3 class="section-heading">заявка принята</h3>

                <span class="inner-top-offset block text-2xl">Мы свяжемся с Вами в ближайшее время</span>
                
                <button
                    class="inner-top-offset bg-slate-800 p-4 lg:p-6 shadow-lg text-2xl text-white block w-full lg:w-1/3 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                    @click="success = false"
                >
                    Отправить ещё раз
                </button>
            </div>
        </transition>
    </section>
</template>

<script setup>
import { useGlobalStore } from '~/stores/global';

defineProps({
    title: {
        type: String,
        default: 'Заказать звонок'
    },

    btnInner: {
        type: String,
        default: 'Связаться с нами'
    }
});

const globalStore = useGlobalStore();
const config = useRuntimeConfig();
const form = reactive({});
const showPreloader = ref(false);
const success = ref(false);

const onSubmit = async () => {
    const formData = new FormData();
    formData.append('name', form?.name);
    formData.append('phone', form?.phone);
    showPreloader.value = true;

    if (form?.name && form?.phone) {
        try {
            const res = await fetch(config.public.requestUrl, {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' },
            });
            if (res.ok) {
                success.value = true;
            }
            form.name = '';
            form.phone = '';
        } catch (e) {
            console.error(e);
        } finally {
            showPreloader.value = false;
        }
    }
};
</script>