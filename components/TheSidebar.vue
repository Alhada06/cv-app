<script setup>
const headers = ['section 1', 'sections 2', 'section 3', 'section 4'];

const props = defineProps({
    isSidebarVisible: Boolean,
})
</script>

<template>
    <main class="flex  pt-8">

        <aside v-if="isSidebarVisible" class="w-1/12 mr-10 lg:w-1/6">
            <div class="sticky top-5 left-0 pr-8">
                <a v-for="(header, index) in headers" :key="header" href="#"
                    class="block pr-8 text-white no-underline">{{
        header
                    }}</a>

            </div>

        </aside>

        <slot />
    </main>

</template>