<template>
    <div class="card m-2">
        <h5>{{ title }}</h5>
        <p>
        <h6>{{ original }}</h6> <br>
        <div class="flag">
            <img src="/images/de.png" v-if="language === 'de'">
            <img src="/images/en.png" v-else-if="language === 'en'">
            <img src="/images/fr.png" v-else-if="language === 'fr'">
            <img src="/images/it.png" v-else-if="language === 'it'">
            <img src="/images/jp.png" v-else-if="language === 'ja'">
            <img src="/images/ko.png" v-else-if="language === 'ko'">
            <div v-else>
                <img src="/images/notflag.png">
                <p>{{ language }}</p>
            </div>
        </div>
        <br>
        <small>{{ Math.round(vote) }}</small>
        </p>
        <div>
            <img :src="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'PosterComponent',
    props: ['title', 'original', 'language', 'vote', 'image', 'lang'],
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