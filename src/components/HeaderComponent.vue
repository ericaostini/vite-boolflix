<template>
    <header>
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="text-danger p-2 text-uppercase">Boolflix</h1>
            <form class="row align-items-center">
                <div class="col-auto">
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