<template>
    <div class="page mb-16">
        <index-intro />

        <section class="container section-top-offset flex flex-col gap-6">
            <h2 class="section-heading">Ремонт сколов и трещин</h2>
            <p class="text-md">
                Из&nbsp;скола на&nbsp;лобовом стекле, рано или поздно, вырастает трещина. Это опасно, снижается обзор, что может привести к&nbsp;штрафу или невозможности пройти ТО. А&nbsp;замена стекла влечёт существенные расходы. Поэтому, остановить повреждение нужно не&nbsp;дожидаясь его разрастания! И&nbsp;лучший помощник в&nbsp;этом&nbsp;&mdash; &laquo;ПРОФИ ГЛАСС&raquo;, а&nbsp;осень, самое благоприятное время. Автосервис &laquo;ПРОФИ ГЛАСС&raquo; оказывает услуги по&nbsp;профессиональному ремонту сколов и&nbsp;трещин автостекол, обучению ремонтному мастерству и&nbsp;повышению квалификации мастеров.
            </p>

            <div class="flex flex-col md:flex-row justify-between gap-6">
                <div class="flex flex-col gap-6">
                    <div class="flex flex-col">
                        <span class="text-md">Автосервис обслуживает все категории автотранспорта:</span>
                        <ul class="list-disc pl-7 text-md">
                            <li>легковые автомобили;</li>
                            <li>грузовые автомобили;</li>
                            <li>автобусы, высотой до 4м;</li>
                            <li>спецтранспорт.</li>
                        </ul>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-md">Технологически охватываются все виды повреждений автостекол&nbsp;&mdash;&nbsp;СКОЛЫ и&nbsp;ТРЕЩИНЫ различной формы, размеров, состояний и&nbsp;мест расположения:</span>
                        <ul class="list-disc pl-7 text-md">
                            <li>простые и сложные сколы, короткие и длинные трещины;</li>
                            <li>новые и старые, чистые и грязные;</li>
                            <li>в наружном и внутреннем слое автостекла;</li>
                            <li>на лобовых, боковых, задних стеклах, стеклянных люках и панорамный крышах авто.</li>
                        </ul>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-md">Не&nbsp;оттягивайте визит, запишитесь на&nbsp;ремонт и&nbsp;получите образцовые ремонтные показатели:</span>
                        <ul class="list-disc pl-7 text-md">
                            <li>прозрачность стекла в&nbsp;месте ремонта сколов&nbsp;&mdash; от&nbsp;97%;</li>
                            <li>прочность трещин после ремонта 100-120%, по&nbsp;отношению к&nbsp;целому стеклу;</li>
                            <li>долговечность ремонтов сколов и&nbsp;трещин автостекол&nbsp;&mdash; от&nbsp;15&nbsp;лет;</li>
                            <li>процент рекламации по&nbsp;ремонту длинных трещин (до&nbsp;60-80см.), за&nbsp;год, с&nbsp;учётом их&nbsp;гарантийного обслуживания&nbsp;&mdash; не&nbsp;более 0,2%.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <index-result class="section-top-offset" />

        <div class="container section-top-offset flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <h2 class="text-2xl font-light">
                    Соответствие требованиям.
                </h2>
                <p class="text-md">
                    В&nbsp;результате ремонта ваше автостекло будет соответствовать требованиям безопасности движения, требованиям&nbsp;ТО и&nbsp;страховых компаний, калибровки системы ADAS и&nbsp;стёкол изготовленных по&nbsp;smart glass технологии.
                </p>
            </div>

            <div class="flex flex-col">
                <span class="text-md">Основания успешных ремонтов:</span>
                <ul class="list-disc pl-7 text-md">
                    <li>клеящие материалы adhesives 4-го поколения, рекомендованные дивизионом NWRD;</li>
                    <li>собственный практический опыт ремонтов с&nbsp;2008г;</li>
                    <li>технология ремонта &#8470;&nbsp;1, с&nbsp;превышением норм стандартов BS&nbsp;AU242b:2022 и&nbsp;ANSI/ROLAGS 002-2022.</li>
                </ul>
            </div>
        </div>

        <index-steps class="section-top-offset" :steps="steps" />

        <section class="container section-top-offset flex flex-col gap-6">
            <h2 class="section-heading">Гарантия на ремонт</h2>
            <p class="text-md">
                &laquo;ПРОФИ ГЛАСС&raquo;&nbsp;&mdash; один из&nbsp;тех, где ГАРАНТИЯ на&nbsp;все виды ремонтов, в&nbsp;том числе на&nbsp;ремонт длинных трещин (до&nbsp;60-80см.)&nbsp;&mdash; 1год. А&nbsp;качество ремонта&nbsp;&mdash; на&nbsp;20% прочнее и&nbsp;прозрачнее любых других профессиональных ремонтов.
            </p>

            <p class="text-md">
                УЧТИТЕ&nbsp;&mdash; 85% современного стекольного автобизнеса ориентированно именно на&nbsp;замену вашего автостекла! Не&nbsp;дотягивайте до&nbsp;замены&nbsp;&mdash; ремонт существенно дешевле и&nbsp;сохраняет ОРИГИНАЛЬНОЕ стекло, что важно для безопасности и&nbsp;структурой целостности автомобиля.
            </p>
        </section>

        <common-prices class="section-top-offset" :prices="prices" />

        <index-faq class="section-top-offset" :faq="faq" />

        <common-form class="section-top-offset" title="Связаться с нами" embedded />

        <section class="section-top-offset" aria-labelledby="contacts-heading">
            <h2 id="contacts-heading" class="container section-heading">Контакты</h2>
            <common-contacts-info class="inner-top-offset" />
        </section>

        <!-- <index-posts-carousel class="section-top-offset" /> -->
    </div>
</template>

<script lang="ts" setup>
import type { MetaObject } from 'nuxt/schema';
import { steps, prices } from '~/utils';

const faq = [
    {
        id: 1,
        question: 'Что сделать до ремонта?',
        answers: ['Машину не мойте, стекло не мочите, и не протирайте, по возможности сохраните повреждение сухим.']
    },
    {
        id: 2,
        question: 'В чем наше основное преимущество или выгода?',
        answers: ['В том, что повреждения, отремонтированные в нашей мастерской, будут иметь необходимую прочность и прозрачность, стекло приобретет длительную сохранность, ремонт будет сделан по доступной цене.', 'Вы получите реальную гарантию и послеремонтное сопровождение.']
    },
    {
        id: 3,
        question: 'Как долго длится ремонт?',
        answers: ['Ремонт свежих и сухих сколов и трещин занимает 1,5-2,0 часа.', 'Ремонт мокрых или сложных сколов и трещин 2-3 часа.', 'Ремонт грязных или длинных трещин от 3 часов.', 'Оптимальное время ремонта можно согласовать в момент осмотра повреждения.']
    }
];

const head: MetaObject = {
    title: 'ProfiGlass | Ремонт автостёкл в Орле',
    meta: [
        { name: 'description', content: 'Профессиональный ремонт трещин и сколов на вашем автомобиле в Орле по цене от 500 руб. Устранение повреждений на лобовых стеклах автомобиля по низким ценам. Записаться на ремонт или обучение ремонту автостекла можно на нашем сайте или по телефону +7(910)303-14-55' },
        { property: 'og:title', content: 'ProfiGlass | Ремонт автостёкл в Орле' },
        { property: 'og:description', content: 'Профессиональный ремонт трещин и сколов на вашем автомобиле в Орле по цене от 500 руб. Устранение повреждений на лобовых стеклах автомобиля по низким ценам. Записаться на ремонт или обучение ремонту автостекла можно на нашем сайте или по телефону +7(910)303-14-55' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.profiglass.com.ru' },
        { property: 'og:locale', content: 'ru_RU' },
    ],
};

useHead(head);
</script>
