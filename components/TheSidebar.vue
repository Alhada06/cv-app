<script setup>
const headers = ['section 1', 'sections 2', 'section 3', 'section 4'];

const props = defineProps({
    isSidebarVisible: Boolean,
})

const route = useRoute();
const router = useRouter();
const name = () => {
    console.log(route.hash, route.path, route.fullPath)
}
const test = () => {
    router.replace({ hash: "#2" });
}
</script>

<template>
    <main class="flex  pt-8">
        <Transition mode="out-in" :duration="400" name="fade">
            <aside v-if="isSidebarVisible" class="w-1/12  lg:w-1/6 ">

                <div class="sticky backdrop-blur-sm bg-opacity-70 top-5 left-0 pr-2">
                    <NuxtLink v-for="(header, index) in headers" :key="header" :to="'/#' + index"
                        class="block  pl-2 m-1 text-white no-underline"
                        :class="{ 'border-blue-500 border-l-2 rounded-l-xl  border-solid': route.fullPath === '/#' + index }">
                        {{
                                header
                        }}</NuxtLink>
                    <div @click="test">test</div>

                </div>

            </aside>

            <div v-else class="w-1/12  lg:w-1/6"></div>
        </Transition>
        <slot />
    </main>

</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>