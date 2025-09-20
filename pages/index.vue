<template>
    <div class="page mb-16">
        <index-intro />

        <div class="container section-top-offset flex flex-col gap-6">
            <p class="text-lg">
                Из&nbsp;скола на&nbsp;лобовом стекле, рано или поздно, вырастает трещина. Это опасно, снижается обзор, что может привести к&nbsp;штрафу или невозможности пройти ТО. А&nbsp;замена стекла влечёт существенные расходы. Поэтому, остановить повреждение нужно не&nbsp;дожидаясь его разрастания! И&nbsp;лучший помощник в&nbsp;этом&nbsp;&mdash; &laquo;ПРОФИ РЕМОНТ АВТОСТЁКОЛ&raquo;, а&nbsp;осень, самое благоприятное время. Автосервис &laquo;ПРОФИ РЕМОНТ АВТОСТЁКОЛ&raquo; оказывает услуги по&nbsp;профессиональному ремонту сколов и&nbsp;трещин автостекол, обучению ремонтному мастерству и&nbsp;повышению квалификации мастеров.
            </p>

            <div class="flex flex-col md:flex-row justify-between gap-6">
                <div class="flex flex-col gap-6">
                    <div class="flex flex-col">
                        <span class="text-lg">Автосервис обслуживает все категории автотранспорта:</span>
                        <ul class="list-disc pl-7 text-lg">
                            <li>легковые автомобили;</li>
                            <li>грузовые автомобили;</li>
                            <li>автобусы, высотой до 4м;</li>
                            <li>спецтранспорт.</li>
                        </ul>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-lg">Технологически охватываются все виды повреждений автостекол&nbsp;&mdash;&nbsp;СКОЛЫ и&nbsp;ТРЕЩИНЫ различной формы, размеров, состояний и&nbsp;мест расположения:</span>
                        <ul class="list-disc pl-7 text-lg">
                            <li>простые и сложные сколы, короткие и длинные трещины;</li>
                            <li>новые и старые, чистые и грязные;</li>
                            <li>в наружном и внутреннем слое автостекла;</li>
                            <li>на лобовых, боковых, задних стеклах, стеклянных люках и панорамный крышах авто.</li>
                        </ul>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-lg">Не&nbsp;оттягивайте визит, запишитесь на&nbsp;ремонт и&nbsp;получите образцовые ремонтные показатели:</span>
                        <ul class="list-disc pl-7 text-lg">
                            <li>прозрачность стекла в&nbsp;месте ремонта сколов&nbsp;&mdash; от&nbsp;97%;</li>
                            <li>прочность трещин после ремонта 100-120%, по&nbsp;отношению к&nbsp;целому стеклу;</li>
                            <li>долговечность ремонтов сколов и&nbsp;трещин автостекол&nbsp;&mdash; от&nbsp;15&nbsp;лет;</li>
                            <li>процент рекламации по&nbsp;ремонту длинных трещин (до&nbsp;60-80см.), за&nbsp;год, с&nbsp;учётом их&nbsp;гарантийного обслуживания&nbsp;&mdash; не&nbsp;более 0,2%.</li>
                        </ul>
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <nuxt-img
                        class="w-[36rem]"
                        src="/images/master.webp"
                        alt="Ведущий специались по ремонту"
                        loading="lazy"
                    />

                    <blockquote>
                        <p>За прозрачность до последнего пикселя</p>
                        <footer>
                            <cite>Александр, New Tech</cite>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>

        <index-result class="section-top-offset" />

        <div class="container section-top-offset flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <h3 class="text-2xl font-light">
                    Соответствие требованиям.
                </h3>
                <p class="text-lg">
                    В&nbsp;результате ремонта ваше автостекло будет соответствовать требованиям безопасности движения, требованиям&nbsp;ТО и&nbsp;страховых компаний, калибровки системы ADAS и&nbsp;стёкол изготовленных по&nbsp;smart glass технологии.
                </p>
            </div>

            <div class="flex flex-col">
                <span class="text-lg">Основания успешных ремонтов:</span>
                <ul class="list-disc pl-7 text-lg">
                    <li>клеящие материалы adhesives 4-го поколения, рекомендованные дивизионом NWRD;</li>
                    <li>собственный практический опыт ремонтов с&nbsp;2008г;</li>
                    <li>технология ремонта &#8470;&nbsp;1, с&nbsp;превышением норм стандартов BS&nbsp;AU242b:2022 и&nbsp;ANSI/ROLAGS 002-2022.</li>
                </ul>
            </div>
        </div>

        <index-steps class="section-top-offset" :steps="steps" />

        <div class="container section-top-offset flex flex-col gap-6">
            <p class="text-lg">
                &laquo;ПРОФИ РЕМОНТ АВТОСТЕКОЛ&raquo;&nbsp;&mdash; один из&nbsp;тех, где ГАРАНТИЯ на&nbsp;все виды ремонтов, в&nbsp;том числе на&nbsp;ремонт длинных трещин (до&nbsp;60-80см.)&nbsp;&mdash; 1год. А&nbsp;качество ремонта&nbsp;&mdash; на&nbsp;20% прочнее и&nbsp;прозрачнее любых других профессиональных ремонтов.
            </p>

            <p class="text-lg">
                УЧТИТЕ&nbsp;&mdash; 85% современного стекольного автобизнеса ориентированно именно на&nbsp;замену вашего автостекла! Не&nbsp;дотягивайте до&nbsp;замены&nbsp;&mdash; ремонт существенно дешевле и&nbsp;сохраняет ОРИГИНАЛЬНОЕ стекло, что важно для безопасности и&nbsp;структурой целостности автомобиля.
            </p>
        </div>

        <common-prices class="section-top-offset" :prices="prices" />

        <index-faq class="section-top-offset" :faq="faq" @toggle-answer="toggleAnswer" />

        <common-form class="section-top-offset" title="Связаться с нами" embedded />

        <common-contacts-info class="section-top-offset" />

        <!-- <index-posts-carousel class="section-top-offset" /> -->
    </div>
</template>

<script setup>
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
        item.classHeight = 'max-h-64 lg:max-h-40';
    } else {
        item.classHeight = 'max-h-0';
    }
};
</script>