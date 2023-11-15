<template>
    <div class="card m-2">
        <h5>{{ title }}</h5>
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
        <div>
            <div v-if="Math.round(vote) === 10 || Math.round(vote) === 9">
                <i class="fa-solid fa-star" v-for="n in 5"></i> <br>
                <small>{{ vote.toFixed(2) }}</small>
            </div>
            <div v-else-if="Math.round(vote) === 8 || Math.round(vote) === 7">
                <i class="fa-solid fa-star" v-for="n in 4"></i>
                <i class="fa-regular fa-star"></i> <br>
                <small>{{ vote.toFixed(2) }}</small>
            </div>
            <div v-else-if="Math.round(vote) === 6 || Math.round(vote) === 5">
                <i class="fa-solid fa-star" v-for="n in 3"></i>
                <i class="fa-regular fa-star" v-for="n in 2"></i> <br>
                <small>{{ vote.toFixed(2) }}</small>
            </div>
            <div v-else-if="Math.round(vote) === 4 && Math.round(vote) === 3">
                <i class="fa-solid fa-star" v-for="n in 2"></i>
                <i class="fa-regular fa-star" v-for="n in 3"></i> <br>
                <small>{{ vote.toFixed(2) }}</small>
            </div>
            <div v-else-if="Math.round(vote) === 2 && Math.round(vote) === 1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star" v-for="n in 4"></i> <br>
                <small>{{ vote.toFixed(2) }}</small>
            </div>
            <div v-else>
                <i class="fa-regular fa-star" v-for="n in 5"></i> <br>
                <small>{{ vote.toFixed() }}</small>
            </div>
            <div>
                <img :src="image">
            </div>
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