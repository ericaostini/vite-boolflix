<template>
    <div class="my-card">
        <img :src="image">
        <div class="card m-2 hover-info">
            <h5>{{ title }}</h5>
            <p class="px-2">({{ original }})</p> <br>
            <div class="d-flex justify-content-center">
                <div class="flag pe-4">
                    <img :src="getFlag(language)">
                </div>
                <br>
                <div>
                    <div v-if="Math.round(vote) === 10 || Math.round(vote) === 9">
                        <i class="fa-solid fa-star" v-for=" n  in  5 "></i> <br>
                        <small>{{ vote.toFixed(2) }}</small>
                    </div>
                    <div v-else-if="Math.round(vote) === 8 || Math.round(vote) === 7">
                        <i class="fa-solid fa-star" v-for=" n  in  4 "></i>
                        <i class="fa-regular fa-star"></i> <br>
                        <small>{{ vote.toFixed(2) }}</small>
                    </div>
                    <div v-else-if="Math.round(vote) === 6 || Math.round(vote) === 5">
                        <i class="fa-solid fa-star" v-for=" n  in  3 "></i>
                        <i class="fa-regular fa-star" v-for=" n  in  2 "></i> <br>
                        <small>{{ vote.toFixed(2) }}</small>
                    </div>
                    <div v-else-if="Math.round(vote) === 4 || Math.round(vote) === 3">
                        <i class="fa-solid fa-star" v-for=" n  in  2 "></i>
                        <i class="fa-regular fa-star" v-for=" n  in  3 "></i> <br>
                        <small>{{ vote.toFixed(2) }}</small>
                    </div>
                    <div v-else-if="Math.round(vote) === 2 || Math.round(vote) === 1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star" v-for=" n  in  4 "></i> <br>
                        <small>{{ vote.toFixed(2) }}</small>
                    </div>
                    <div v-else>
                        <i class="fa-regular fa-star" v-for=" n  in  5 "></i> <br>
                        <small>{{ vote.toFixed() }}</small>
                    </div>
                </div>
            </div>
            <div class="info-over">
                {{ info }}
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store'
export default {
    name: 'PosterComponent',
    props: ['title', 'original', 'language', 'vote', 'image', 'info'],
    data() {
        return {
            store,
            front: true,
            params: {
                api_key: '99a0ce38f2911d2a4d167d4ff18195e6'
            },
            urlImg: "/images/notflag.png"
        }
    },
    methods: {
        getFlag(language) {
            return `/images/${language}.png`
        }
        // getCastFilm() {
        //     const myendPoint = this.store.endPoint.movieCast + this.id + '/credits';
        //     let cast = [];
        //     axios.get(this.store.apiUrl + myendPoint, { params: this.params }).then((res) => {
        //         console.log(res.data.cast);
        //         for (let i = 0; i < 5; i++) {
        //             if (res.data.cast[i]) {
        //                 cast.push(res.data.cast[i].name)
        //             }
        //         }
        //     })
        // }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

.my-card {
    position: relative;
    padding: 10px;

    img {
        width: 100%;
        height: 100%;
        transition: 3s ease;
        backface-visibility: hidden;
        opacity: 1;
    }

    .hover-info {
        background-color: $col-dark;
        opacity: 0;
        color: $col-light;
        border: 2px solid $col-light;
        text-align: center;
        padding-top: 10px;
        transition: 2s ease;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    &:hover .hover-info {
        opacity: 1;
    }

    .info-over {
        padding: 10px;
        overflow-y: scroll;
    }
}

.flag {
    img {
        height: 22px;
        width: 35px;
    }
}
</style>