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
    <main class="grid grid-cols-6 gap-2 pt-8 ">
        <Transition mode="out-in" :duration="400" name="fade">
            <aside v-if="isSidebarVisible" class=" invisible md:visible w-full  ">

                <div class="sticky backdrop-blur-sm bg-opacity-70  rounded-l-lg top-5 left-0 pr-2 p-6 pl-8">
                    <NuxtLink v-for="(header, index) in headers" :key="header" :to="'/#' + index"
                        class="block  pl-2 m-1 w-fit text-white no-underline"
                        :class="{ 'border-blue-500 border-b-2 rounded-l-xl  border-solid': route.fullPath === '/#' + index }">
                        {{
        header
                        }}</NuxtLink>


                </div>

            </aside>

            <div v-else class="w-1/12  md:w-1/6"></div>
        </Transition>
        <div class=" col-start-1 col-end-7 md:col-start-2 md:col-end-6 ">
            <slot />
        </div>

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