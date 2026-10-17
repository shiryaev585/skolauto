<template>
    <div class="bg-slate-50 min-h-screen flex flex-col">
        <site-header />
        <site-popup>
            <common-form class="py-24" title="Заказать звонок" />
        </site-popup>
        <site-menu />
        <main>
            <slot></slot>
        </main>
        <site-footer />
    </div>
</template>
