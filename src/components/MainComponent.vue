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
                <button class="btn btn-outline-dark px-lg-4 x-md-2"><i class="fa-solid fa-circle-info"></i> Altre
                    info</button>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store'
export default {
    name: 'MainComponent',
    props: ['image', 'info'],
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
        }
    },
    created() {
        this.getGenreSeries()
    },
}
</script>

<style lang="scss" scoped>
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
</style>