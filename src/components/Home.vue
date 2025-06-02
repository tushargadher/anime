<template>
    <div class="filter-container">
        <GenreFilterChips />
    </div>
    <div class="container">
        <animeBox v-for="(anime, index) in animeList" :key="index" :detail="anime" />
    </div>
</template>
<script>
import axios from 'axios';
import animeBox from './animeBox.vue';
import GenreFilterChips from './GenreFilterChips.vue';

export default {
    name: 'Home',
    components: {
        animeBox,
        GenreFilterChips
    },
    data() {
        return {
            animeList: [],
        }
    },
    mounted() {
        axios.get(`https://api.jikan.moe/v4/anime`)
            .then((respone) => {
                console.log(respone);
                this.animeList = respone?.data?.data;
            })
    },
    computed: {
        animeType() {
            return this.$store.state.selectedType;
        }
    }
}
</script>
<style>
.container {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    padding: 50px;
}
</style>