<template>
    <div class="filter-container">
        <GenreFilterChips />
    </div>
    <div class="container">
        <animeBox v-for="(anime, index) in animeList" :key="index" :detail="anime" />
    </div>
    <Pagination />
</template>
<script>
import axios from 'axios';
import EventBus from '@/plugins/eventBus';
import animeBox from './animeBox.vue';
import GenreFilterChips from './GenreFilterChips.vue';
import Pagination from './Pagination.vue';
export default {
    name: 'Home',
    components: {
        animeBox,
        GenreFilterChips,
        Pagination
    },
    data() {
        return {
            animeList: [],
            originalAnimeList: [],
        }
    },
    computed: {
        selectedAnimeType(){
            return this.$store.state.animeTypes.filter(item => item.isSelected);
        },
        currentPage() {
            return this.$store.state.page;
        }
    },
    methods: {
        async getAnime() {
            // https://api.jikan.moe/v4/anime?page=1&limit=10
            let typeParam = this.selectedAnimeType.length > 0 ? this.selectedAnimeType[0].value : '';
            let url = `https://api.jikan.moe/v4/anime?page=${this.currentPage}${typeParam ? `&type=${typeParam}` : ''}`;
            try {
                const respone = await axios.get(url);
                this.originalAnimeList = respone?.data?.data;
                this.animeList = [...this.originalAnimeList];
                this.calculateTotalPage(respone);
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
        },
        calculateTotalPage(respone) {
            let totalRecord = respone?.data?.pagination?.items?.total;
            let itemCount = respone?.data?.pagination?.items?.count;
            this.$store.commit('SET_PAGINATION_SIZE', Math.ceil(totalRecord / itemCount));
        }
    },
    watch: {
        selectedAnimeType: {
            handler() {
                this.getAnime();
            },
            deep: true,
        },
        currentPage: {
            handler() {
                this.getAnime();
            },
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