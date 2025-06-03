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
import EventBus from '@/plugins/eventBus';
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
            originalAnimeList: [],
        }
    },
    computed: {
        animeType() {
            return this.$store.state.selectedType;
        }
    },
    methods: {
        async getAnime() {
            let typeParam = this.animeType.length > 0 ? this.animeType[0].value : '';
            let url = `https://api.jikan.moe/v4/anime${typeParam ? `?type=${typeParam}` : ''}`;
            try {
                const respone = await axios.get(url);
                this.originalAnimeList = respone?.data?.data;
                this.animeList = [...this.originalAnimeList]
            } catch (error) {
                console.log('error while fetching anime', error)
            }
        },
        handleSearch(searchValue) {
            if (searchValue) {
                let filteredAnime = this.animeList?.filter((anime) => {
                    return anime?.title?.toLowerCase().includes(searchValue.toLowerCase());
                })
                this.animeList = [...filteredAnime];
            } else {
                this.animeList = [...this.originalAnimeList];
            }
        }
    },
    watch: {
        animeType: {
            handler() {
                this.getAnime();
            },
            deep: true,
        }
    },
    mounted() {
        this.getAnime();
        EventBus.on('handle-search', (searchValue) => {
            this.handleSearch(searchValue);
        })
    },
    unmounted() {
        EventBus.off('handle-search', this.handleSearch);
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