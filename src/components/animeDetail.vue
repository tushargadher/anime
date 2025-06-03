<template>
    <h1>this is details page of anime with {{ animeId }}</h1>
    <reviewCard v-for="(review, index) in reviewList" :key="index" :reviewData="review" />
</template>
<script>
import reviewCard from "../components/reviewCard.vue"
import axios from 'axios';
export default {
    components: {
        reviewCard
    },
    data() {
        return {
            animeId: '',
            reviewList: []
        }
    },
    methods: {
        async getAnimeReview() {
            let url = `https://api.jikan.moe/v4/anime/${this.animeId}/reviews`;
            try {
                const respone = await axios.get(url);
                this.reviewList = respone?.data?.data;
            } catch (error) {
                console.log('error while fetching review', error)
            }
        },
    },
    mounted() {
        this.animeId = this.$route.params.id;
        this.getAnimeReview();
    }
}
</script>
<style scoped></style>