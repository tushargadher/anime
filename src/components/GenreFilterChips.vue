<template>
    <chip v-for="(type, index) in animeTypes" :key="index" :animeType="type" />
</template>
<script>
import chip from './chip.vue';
export default {
    components: {
        chip,
    },
    computed: {
        animeTypes() {
            return this.$store.state.animeTypes;
        }
    }
}

</script>
<style scoped></style>
