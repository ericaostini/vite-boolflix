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
                <button class="btn btn-outline-dark px-lg-4 x-md-2" @click.prevent="showOffcanvasMenu()"><i
                        class="fa-solid fa-circle-info"></i> Altre
                    info</button>
            </div>
        </div>
        <div id="app" class="container py-2">
            <div class="offcanvas bg-dark offcanvas-start" :class="showMenu ? 'show' : ''" tabindex="-1"
                :style="{ visibility: showMenu ? 'visible' : 'hidden' }">
                <div class="offcanvas-header offcanvas-img">
                    <img :src="image">
                    <button type="button" class="btn" @click.prevent="showOffcanvasMenu()"><i
                            class="fa-regular fa-circle-xmark text-light"></i></button>
                </div>
                <div class="offcanvas-body">
                    <p class="text-light">2021 -<span> 4 stagioni</span><span class="badge">HD</span></p>
                    <h5 class="text-light">Guarda subito la stagione 3</h5>
                    <iframe width="320" height="200" src="https://www.youtube.com/embed/Ubo7jccr-DY?si=Ynr4_ouDerwi9QTT"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
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
            },
            showMenu: false,
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
        showOffcanvasMenu() {
            this.showMenu ? this.showMenu = false : this.showMenu = true;
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

.offcanvas-img {
    img {
        width: 300px;
    }
}
</style>