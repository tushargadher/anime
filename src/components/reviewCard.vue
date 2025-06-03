<template>
    
    <h1>{{ reviewData?.user?.username }}</h1>
    <p>{{ reviewData?.review }}</p>
</template>
<script>
export default {
    props: {
        reviewData: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped></style>