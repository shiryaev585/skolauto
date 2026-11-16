<script setup>
const phoneHref = computed(() => contacts.phone.type + contacts.phone.value?.replace(/[()\-\s]/g, ''));
const addressHref = computed(() => contacts.address.href);
</script>

<template>
    <section class="intro relative text-white" aria-labelledby="intro-heading">
        <nuxt-img
            class="intro__background absolute inset-0 w-full h-full object-cover object-top"
            src="/images/index/intro-bg.webp"
            alt=""
            loading="eager"
            fetchpriority="high"
        />

        <div class="intro__content container relative z-[1] flex flex-col">
            <div class="intro__contacts">
                <p class="intro__brand uppercase">Профи Гласс</p>
                <address class="intro__address not-italic flex flex-col items-start">
                    <a :href="addressHref" target="_blank" rel="noopener noreferrer" class="link-hover">
                        {{ contacts.address.value }}
                    </a>
                    <a :href="phoneHref" class="intro__phone link-hover underline underline-offset-4">
                        {{ contacts.phone.value }}
                    </a>
                </address>
            </div>

            <div class="intro__message self-end text-right">
                <h1 id="intro-heading" class="intro__heading uppercase">
                    <span class="intro__heading-first">Высшая лига</span>
                    <span class="block">ремонта автостёкол</span>
                </h1>
                <p class="intro__tagline italic">
                    … когда Ремонт не&nbsp;ремесло, а&nbsp;точная прикладная Наука.
                </p>
            </div>

            <ul class="intro__benefits flex flex-col">
                <li>
                    <span class="intro__benefit-label block">придаём</span>
                    <span class="block">
                        <span aria-hidden="true">✨&nbsp;</span>ПРОЧНОСТЬ трещинам до&nbsp;30&nbsp;МРа
                    </span>
                </li>
                <li class="intro__benefit-offset self-end">
                    <span class="intro__benefit-label block">возвращаем</span>
                    <span class="block">
                        <span aria-hidden="true">✨&nbsp;</span>ПРОЗРАЧНОСТЬ сколам до&nbsp;98%
                    </span>
                </li>
            </ul>

            <p class="intro__guarantee self-center text-center">
                Официальная ГАРАНТИЯ на&nbsp;ремонт
                <span class="underline underline-offset-4">сколов и&nbsp;трещин&nbsp;— <span class="whitespace-nowrap">1&nbsp;год</span></span>
            </p>
        </div>
    </section>
</template>

<style scoped lang="scss">
.intro {
    --intro-accent: #fd0015;
    min-height: calc(100svh - var(--header-height));
    background: #061c43;
    font-family: $font-main;

    &__content {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    &__brand {
        font-size: clamp(1.5rem, 6.5vw, 2rem);
        line-height: 1.2;
    }

    &__address {
        gap: .25rem;
        margin-top: 1rem;
        font-size: clamp(1rem, 4.6vw, 1.25rem);
        line-height: 1.5;
    }

    &__phone {
        color: #8eafff;
    }

    &__message {
        width: 100%;
        margin-top: 3rem;
    }

    &__heading {
        color: var(--intro-accent);
        font-family: inherit;
        font-size: clamp(1.25rem, 6.2vw, 2rem);
        font-weight: 400;
        line-height: 1.75;
    }

    &__heading-first {
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: .3em;
    }

    &__tagline {
        max-width: 35ch;
        margin-top: 1rem;
        margin-left: auto;
        font-size: clamp(1rem, 4.6vw, 1.25rem);
        line-height: 2;
    }

    &__benefits {
        gap: .75rem;
        margin-top: 2.5rem;
        font-size: clamp(.9375rem, 4.5vw, 1.25rem);
        line-height: 1.6;
    }

    &__benefit-label {
        margin-bottom: .25rem;
    }

    &__benefit-offset {
        max-width: 92%;
    }

    &__guarantee {
        margin-top: 4.5rem;
        color: var(--intro-accent);
        font-size: clamp(1rem, 4.4vw, 1.25rem);
        line-height: 1.8;
    }

    @media (min-width: 768px) {
        min-height: 75vh;

        &__content {
            padding-top: 4rem;
            padding-bottom: 4rem;
        }

        &__brand {
            font-size: 2.5rem;
        }

        &__message {
            max-width: 48rem;
        }

        &__heading {
            font-size: clamp(2rem, 4vw, 3.5rem);
            line-height: 1.5;
        }

        &__tagline {
            font-size: 1.5rem;
        }

        &__benefits {
            width: min(100%, 44rem);
            font-size: 1.5rem;
        }

        &__guarantee {
            font-size: 1.5rem;
        }
    }
}
</style>
