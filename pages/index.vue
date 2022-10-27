<script setup>
const headers = ['section 1', 'sections 2', 'section 3', 'section 4'];
</script>

<template>

    <article class="mb-[500px] w-9/12">
        <h1 class="py-4 text-4xl text-white">My article</h1>
        <section v-for="(header, index) in headers" :key="header" class="pb-8">
            <h2 :id="index" class="py-4 text-2xl text-slate-200">
                {{ header }}
            </h2>
            <p class="mr-8 pr-8 text-white text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Nunc sed blandit libero volutpat. Tempor
                id eu nisl nunc mi. In tellus integer feugiat
                scelerisque varius morbi. At imperdiet dui accumsan sit.
                Id ornare arcu odio ut sem nulla pharetra diam sit. Urna
                nunc id cursus metus aliquam eleifend. Amet luctus
                venenatis lectus magna fringilla urna porttitor.
                Dignissim enim sit amet venenatis urna cursus eget nunc
                scelerisque. Elementum sagittis vitae et leo duis.
                Convallis aenean et tortor at risus viverra adipiscing
                at in. Turpis egestas integer eget aliquet nibh praesent
                tristique magna sit. Gravida neque convallis a cras
                semper auctor neque. amet venenatis urna cursus eget
                nunc scelerisque. Elementum sagittis vitae et leo duis.
                Convallis aenean et tortor at risus viverra adipiscing
                at in. Turpis egestas integer eget aliquet nibh praesent
                tristique magna sit. Gravida neque convallis a cras
                semper auctor neque.
            </p>
        </section>
    </article>

</template>