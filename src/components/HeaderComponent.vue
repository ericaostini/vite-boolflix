<template>
    <header>
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <h1 class="text-danger p-2 text-uppercase">Netflix</h1>
                <div class="nav pb-2 px-3">
                    <a href="MainComponent" class="text-decoration-none text-light px-3">Home</a>
                    <a href="#" class="text-decoration-none text-light px-3">Serie TV</a>
                    <a href="#" class="text-decoration-none text-light px-3">Film</a>
                    <a href="#" class="text-decoration-none text-light px-3">La mia lista</a>
                </div>
            </div>
            <form class="row align-items-center">
                <div class="col-md-8 col-sm-6">
                    <input type="text" class="form-control bg-grey border-light" v-model="tvShow" placeholder="Titolo">
                </div>
                <div class="col-auto">
                    <button type="button" class="btn btn-danger" @click="filterApi"><i
                            class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>
        </div>
    </header>
</template>

<script>
import { store } from "../data/store"
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
            tvShow: ""
        }
    },
    methods: {
        filterApi() {
            this.$emit("filterSeriesFilm", this.tvShow)
        }
    },
}
</script>

<style lang="scss" scoped>
@use '.././assets/style/partials/variables' as *;

header {
    height: 100px;
    width: 100%;
    background-color: $col-dark;
    padding: 20px;
    position: fixed;
    z-index: 1000;

}
</style>