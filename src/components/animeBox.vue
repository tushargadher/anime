<template>
    <v-card class="mx-auto margin" width="250" @click="handleClick">
        <v-img height="350" :src="detail.images.jpg.image_url" rounded="20" cover>

        </v-img>

        <v-card-text>
            {{ detail.title }}
        </v-card-text>
        <v-card-subtitle class="pt-4">
            <div>{{ detail.type }}</div>
            <div>{{ detail.source }}</div>
            <div>{{ detail.episodes }}</div>

        </v-card-subtitle>
        <v-card-actions>
            <v-btn color="orange" text="Share"></v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: {
        detail: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleClick() {
            this.$router.push(`/anime/${this.detail.mal_id}`)
        }
    }
}
</script>
<style scoped>
.margin {
    margin: 10px;
}
</style>