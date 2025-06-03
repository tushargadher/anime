<template>
    <v-chip :closable="isChipClosable" @click="handleClick" @click:close="chipRemoved">
        {{ data.label }}
    </v-chip>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        chipRemoved() {
            this.$store.commit('REMOVE_SELECTED_TYPE', this.data)
        },
        handleClick() {
            this.$store.commit('ADD_TO_SELECTED_TYPE', this.data)
        }
    },
    computed: {
        isChipClosable() {
            let selectedType = this.$store.state.selectedType;
            if (!selectedType || !Array.isArray(selectedType)) return false
            return selectedType.some(type => type.value === this.data.value)
        }
    }
}

</script>
<style scoped></style>
