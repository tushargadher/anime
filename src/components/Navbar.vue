<template>
    <div class="nav-container">
        <div class="search-container">
            <v-text-field density="compact" placeholder="Search" prepend-inner-icon="mdi-magnify" variant="solo"
                width="auto" hide-details single-line v-model="searchValue" @input="handleSearch"></v-text-field>
        </div>

        <!-- <p><router-link to="/profile">See Profile</router-link></p> -->
    </div>
</template>
<script>
import EventBus from '@/plugins/eventBus';
export default {
    data() {
        return {
            searchValue: '',
            debounceTimer: null,
        }
    },
    methods: {
        handleSearch(e) {
            this.searchValue = e.target.value;
            clearTimeout(this.debounceTimer)
            this.debounceTimer = setTimeout(() => {
                EventBus.emit("handle-search", this.searchValue);
            }, 500)
        }
    }
}
</script>
<style scoped>
.nav-container {
    background: rgb(58, 58, 58);
    color: white;
    padding: 10px;
}

.search-container {
    width: 40%;
}
</style>