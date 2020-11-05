<template>
    <div class="small-banner text-center mt-8 rounded">
        <img :src="bannerImg" alt="banner" class="w-100">
    </div>
</template>

<script>
export default {
    props: {
        bannerImg: String,
    }
}
</script>

<style scoped>
.small-banner {
	margin-bottom: 30px;
	overflow: hidden;
}
</style>