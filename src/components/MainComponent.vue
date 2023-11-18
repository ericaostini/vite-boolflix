<template>
    <section>
        <div class="main-series">
            <div class="row">
                <div class="col-lg-4 col-md-8 col-sm-10 mt-3">
                    <h5 class="text-light">Serie tv e Film</h5>
                    <select class="form-select" aria-label="Default select example" placeholder="Genere" @change="getGenre"
                        v-model="type">
                        <option value="" selected hidden>Generi</option>
                        <option selected>Generi</option>
                        <option v-for="(g, index) in store.genreSeries" :value="g.id">{{ g.name }}</option>
                    </select>
                </div>
            </div>
            <img :src="image">
            <p class="py-5 text-light">{{ info }}</p>
            <div class="d-flex flex-nowrap">
                <button class="btn btn-light me-3 px-lg-4 px-md-2">Riproduci</button>
                <button class="btn btn-outline-dark px-lg-4 x-md-2" @click="dropDown()"><i
                        class="fa-solid fa-circle-info"></i> Altre
                    info</button>
            </div>
        </div>
        <div id="info" class="info">
            <img :src="image">
            <h5 class="px-4">Guarda subito la stagione 3</h5>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ubo7jccr-DY?si=Ynr4_ouDerwi9QTT"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store'
export default {
    name: 'MainComponent',
    props: ['image', 'info', 'name'],
    data() {
        return {
            store,
            type: '',
            params: {
                api_key: '99a0ce38f2911d2a4d167d4ff18195e6'
            }
        }
    },
    methods: {
        getGenreSeries() {
            const urlGenreS = this.store.apiUrl + this.store.endPoint.genreSerie;
            axios.get(urlGenreS, { params: this.params }).then((res) => {
                console.log(res.data.genres)
                this.store.genreSeries = res.data.genres;
            })
        },
        getGenre() {
            this.$emit("geSeries", this.type)
        },
        dropDown() {
            let subInfo = document.getElementById("info");
            subInfo.classList.toggle("show")
        }
    },
    created() {
        this.getGenreSeries()
    },
}
</script>

<style lang="scss" scoped>
@use '.././assets/style/partials/variables' as *;

section {
    background-image: url("../images/atypical.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .main-series {
        padding: 100px 50px;
        width: 40%;

        img {
            margin-top: 70px;
            width: 600px;
        }

    }
}

.info {
    background-color: $bg-main;
    color: white;
    width: 70%;
    position: absolute;
    top: 200px;
    left: 100px;
    right: 100px;
    display: block;

    img {
        width: 200px;
        padding: 20px;
    }

    iframe {
        padding: 20px;
    }
}

.show {
    display: block;
}
</style>