<template>
    <div class="card m-2">
        <h5>{{ title }}</h5>
        <p>
        <h6>{{ original }}</h6> <br>
        <div class="flag">
            <img src="/images/de.png" v-if="language === 'de'">
            <img src="/images/en.png" v-if="language === 'en'">
            <img src="/images/fr.png" v-if="language === 'fr'">
            <img src="/images/it.png" v-if="language === 'it'">
            <img src="/images/jp.png" v-if="language === 'jp'">
            <img src="/images/ko.png" v-if="language === 'ko'">
        </div>
        <br>
        <small>{{ vote }}</small>
        </p>
        <div>
            <img :src="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'PosterComponent',
    props: ['title', 'original', 'language', 'vote', 'image']
}
</script>

<style lang="scss" scoped>
.flag {
    img {
        height: 22px;
        width: 35px;
    }
}
</style>