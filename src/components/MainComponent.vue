<template>
    <section>
        <div class="main-series">
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
export default {
    name: 'MainComponent',
    props: ['image', 'info']
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