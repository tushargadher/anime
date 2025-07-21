<template>
    <v-chip
        :color="isSelected ? 'primary' : undefined"
        @click="handleClick"
    >
        {{ animeType.label }}
    </v-chip>
</template>
<script>
export default {
    props: {
        animeType: {
            type: Object,
            required: true
        }
    },
    methods: {
        // chipRemoved() {
        //     this.$store.commit('REMOVE_SELECTED_TYPE', this.animeType)
        // },
        handleClick() {
            this.$store.commit('TOGGLE_SELECTED_TYPE', this.animeType.value)
        },
    },
    computed: {
        isSelected() {
            return this.$store.state.animeTypes.some(
                item => item.value === this.animeType.value && item.isSelected
            )
        }
    }
}

</script>
<style scoped></style>
