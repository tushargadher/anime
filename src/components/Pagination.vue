<template>
    <v-pagination v-model="currentPage" @update:modelValue="handlePageChange" :length="paginationSize"
        @next="handleNext" @prev="handlePrev" rounded="circle"></v-pagination>
</template>
<script>
export default {
    computed: {
        paginationSize() {
            return this.$store.state.paginationSize;
        },
        currentPage: {
            get() {
                return this.$store.state.page;
            },
            set(page) {
                this.$store.commit('UPDATE_PAGE', page)
            }
        }
    },
    methods: {
        handleNext() {
            this.$store.commit('UPDATE_PAGE', this.currentPage + 1)
        },
        handlePrev() {
            this.$store.commit('UPDATE_PAGE', this.currentPage - 1)
        },
        handlePageChange(page) {
            this.$store.commit('UPDATE_PAGE', page)
        }
    }

}
</script>
<style scoped></style>