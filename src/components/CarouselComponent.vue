<template>
    <div class="wrapper">
        <section id="section1">
            <a href="#section4"><i class="fa-solid fa-chevron-left"></i></a>
            <div class="item" v-for="n in 5">
                <img :src="image">
            </div>
            <a href="#section2"><i class="fa-solid fa-chevron-right"></i></a>
        </section>
        <section id="section2">
            <a href="#section1"><i class="fa-solid fa-chevron-left"></i></a>
            <div class="item" v-for="n in 5">
                <img :src="image">
            </div>
            <a href="#section3"><i class="fa-solid fa-chevron-right"></i></a>
        </section>
        <section id="section3">
            <a href="#section2"><i class="fa-solid fa-chevron-left"></i></a>
            <div class="item" v-for="n in 5">
                <img :src="image">
            </div>
            <a href="#section4"><i class="fa-solid fa-chevron-right"></i></a>
        </section>
        <section id="section4">
            <a href="#section3"><i class="fa-solid fa-chevron-left"></i></a>
            <div class="item" v-for="n in 5">
                <img :src="image">
            </div>
            <a href="#section1"><i class="fa-solid fa-chevron-right"></i></a>
        </section>

    </div>
</template>

<script>
export default {
    name: 'CarouselComponent'
}
</script>

<style lang="scss" scoped></style>