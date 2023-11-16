<template>
    <div class="wrapper">
        <section id="section1">
            <a href="#section4" class="arrow_btn left-arrow"><i class="fa-solid fa-chevron-left"></i></a>
            <div class="item" v-for="n in 5">
                <img :src="image">
            </div>
            <a href="#section2" class="arrow_btn right-arrow"><i class="fa-solid fa-chevron-right"></i></a>
        </section>
        <section id="section2">
            <a href="#section1" class="arrow_btn left-arrow"><i class="fa-solid fa-chevron-left"></i></a>
            <div class="item" v-for="n in 5">
                <img :src="image">
            </div>
            <a href="#section3" class="arrow_btn right-arrow"><i class="fa-solid fa-chevron-right"></i></a>
        </section>
        <section id="section3">
            <a href="#section2" class="arrow_btn left-arrow"><i class="fa-solid fa-chevron-left"></i></a>
            <div class="item" v-for="n in 5">
                <img :src="image">
            </div>
            <a href="#section4" class="arrow_btn right-arrow"><i class="fa-solid fa-chevron-right"></i></a>
        </section>
        <section id="section4">
            <a href="#section3" class="arrow_btn left-arrow"><i class="fa-solid fa-chevron-left"></i></a>
            <div class="item" v-for="n in 5">
                <img :src="image">
            </div>
            <a href="#section1" class="arrow_btn right-arrow"><i class="fa-solid fa-chevron-right"></i></a>
        </section>

    </div>
</template>

<script>
export default {
    name: 'CarouselComponent',
    props: ['image']
}
</script>

<style lang="scss" scoped>
@use '.././assets/style/partials/variables' as *;

.wrapper {
    display: grid;
    grid-template-columns: repeat(5, 100%);
    overflow: hidden;
    scroll-behavior: smooth;

    section {
        width: 100%;
        position: relative;
        display: grid;
        grid-template-columns: repeat(5, auto);
        margin: 20px 0;

        .item {
            padding: 0 2px;
            transition: $duration all;

            img {
                width: 30px;
            }

            &:hover {
                margin: 0 40px;
                transform: scale($itemHover);
            }
        }
    }

    .arrow_btn {
        position: absolute;
        color: $col-light;
        text-decoration: none;
        font-size: 4em;
        background-color: $col-dark;
        width: 80px;
        padding: 20px;
        text-align: center;
        z-index: 1;
    }

    .left-arrow {
        top: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    }

    .right-arrow {
        top: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    }
}
</style>