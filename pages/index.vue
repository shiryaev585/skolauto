<template>
    <div class="page mb-16">
        <index-intro />
        <index-result class="section-top-offset" />
        <index-steps class="section-top-offset" :steps="steps" />
        <common-prices class="section-top-offset" :prices="prices" />
        <index-faq class="section-top-offset" :faq="faq" @toggle-answer="toggleAnswer" />
        <common-form class="section-top-offset" title="Связаться с нами" />
        <index-posts-carousel class="section-top-offset" />
    </div>
</template>

<script setup>
const steps = [
    {
        id: 1,
        number: 'I',
        step: 'Очистка повреждения'
    },
    {
        id: 2,
        number: 'II',
        step: 'Откачка воздуха'
    },
    {
        id: 3,
        number: 'III',
        step: 'Заливка полимера'
    },
    {
        id: 4,
        number: 'IV',
        step: 'Облучение УФ-лампой'
    },
    {
        id: 5,
        number: 'V',
        step: 'Очистка и полировка'
    }
];

const prices = [
    {
        id: 1,
        label: 'Ремонт трещины',
        value: 'от 5000 ₽'
    },
    {
        id: 2,
        label: 'Ремонт скола',
        value: 'от 5000 ₽'
    }
];

const faq = reactive([
    {
        id: 1,
        question: 'Что сделать до ремонта?',
        answers: ['Машину не&nbsp;мойте, стекло не&nbsp;мочите, и&nbsp;не&nbsp;протирайте, по&nbsp;возможности сохраните повреждение сухим.'],
        classHeight: 'max-h-0'
    },
    {
        id: 2,
        question: 'В чем наше основное преимущество или выгода?',
        answers: ['В&nbsp;том, что повреждения, отремонтированные в&nbsp;нашей мастерской, будут иметь необходимую прочность и прозрачность, стекло приобретет длительную сохранность, ремонт будет сделан по&nbsp;доступной цене.', 'Вы&nbsp;получите реальную гарантию и&nbsp;послеремонтное сопровождение.'],
        classHeight: 'max-h-0'
    },
    {
        id: 3,
        question: 'Как долго длится ремонт?',
        answers: ['Ремонт свежих и&nbsp;сухих сколов и&nbsp;трещин занимает 1,5-2,0&nbsp;часа.', 'Ремонт мокрых или сложных сколов и&nbsp;трещин 2-3&nbsp;часа.', 'Ремонт грязных или длинных трещин от&nbsp;3&nbsp;часов.', 'Оптимальное время ремонта можно согласовать в&nbsp;момент осмотра повреждения.'],
        classHeight: 'max-h-0'
    }
]);

const toggleAnswer = (item) => {
    if (item.classHeight === 'max-h-0') {
        item.classHeight = 'max-h-64 lg:max-h-40'
    } else {
        item.classHeight = 'max-h-0'
    }
}
</script>