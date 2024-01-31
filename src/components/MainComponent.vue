<template>
    <section>
        <div class="main-series">
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
            <div class="offcanvas text-bg-dark offcanvas-start" :class="showMenu ? 'show' : ''" tabindex="-1"
                :style="{ visibility: showMenu ? 'visible' : 'hidden' }">
                <div class="offcanvas-header offcanvas-img">
                    <img :src="image">
                    <button type="button" class="btn" @click.prevent="showOffcanvasMenu()"><i
                            class="fa-regular fa-circle-xmark text-light"></i></button>
                </div>
                <div class="offcanvas-body">
                    <p>2021 - <span> {{ store.bestSeries.number_of_seasons }} stagioni </span><span
                            class="badge bg-body-secondary text-secondary">HD</span>
                    </p>
                    <p class="text-light">"{{ store.bestSeries.tagline }}"</p>
                    <h5 class="text-light pt-2">Guarda subito il trailer della stagione {{
                        store.bestSeries.number_of_seasons }}
                    </h5>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QqpYBRVcePc?si=Z7AU5rEnVWGB_Hyw"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    <h4 class="pb-3 pt-5 text-light">S1:E1</h4>
                    <div class="card-episode">
                        <div class="d-flex align-items-center">
                            <div class="cover-img">
                                <img :src="'https://image.tmdb.org/t/p/original' + store.episodeSes.still_path">
                                <div class="hover-play">
                                    <i class="fa-regular fa-circle-play text-light"></i>
                                </div>
                            </div>
                            <div class="px-3 text-light">
                                <h6>{{ store.episodeSes.name }}</h6>
                                <p>{{ store.episodeSes.overview }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="offcanvas-footer">
                        <div class="pt-5">
                            <span>Generi:</span>
                            <span v-for="(gen, index) in store.bestSeries.genres" class="text-light"> - {{ gen.name }}
                            </span>
                        </div>
                        <div v-for="(author, index) in store.bestSeries.created_by"
                            class="author d-flex align-items-center justify-content-end">
                            <p>Creato da: <span class="text-light">{{ author.name }}</span></p>
                            <img :src="'https://image.tmdb.org/t/p/w185' + author.profile_path">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="row justify-content-end">
            <div class="col-lg-2 col-md-8 col-sm-10 mt-5">
                <h5 class="text-light">Filtra Serie tv e Film</h5>
                <select class="form-select" aria-label="Default select example" placeholder="Genere" @change="getGenre"
                    v-model="type">
                    <option value="" selected hidden>Generi</option>
                    <option selected>Generi</option>
                    <option v-for="(g, index) in store.genreSeries" :value="g.id">{{ g.name }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';
export default {
    name: 'MainComponent',
    props: ['image', 'info', 'name'],
    data() {
        return {
            store,
            type: '',
            open: false,
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
        },
        getFirstEp() {
            const urlEp = this.store.apiUrl + this.store.endPoint.serieId + this.store.endPoint.episode;
            axios.get(urlEp, { params: this.params }).then((res) => {
                console.log(res.data.episodes[0])
                this.store.episodeSes = res.data.episodes[0];
            })
        }
    },
    created() {
        this.getGenreSeries()
        this.getFirstEp()
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
        padding: 150px 80px;
        width: 50%;

        img {
            margin-top: 70px;
            width: 600px;
        }
    }
}

.offcanvas {
    width: 750px;

    .offcanvas-body {
        color: $hColor;
    }

    .offcanvas-footer {
        padding-top: 40px;
        float: right;
    }
}


.offcanvas-img {
    img {
        width: 300px;
    }
}

.author {
    color: $hColor;

    img {
        margin-left: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50px;
        object-fit: cover;
    }
}

.card-episode {

    &:hover {
        background-color: rgba(0, 0, 0, 0.208);
    }

    img {
        width: 250px;
    }
}

.cover-img {
    position: relative;

    .hover-play i {
        display: none;
        transition: display 4s;
    }
}


.cover-img:hover .hover-play i {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
}

.hover-play-circle {
    border-radius: 50%;
}
</style>