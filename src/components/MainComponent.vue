<template>
    <section>
        <div class="w-50">
            <img :src="image">
            <p class="py-5 text-light ">{{ info }}</p>
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
    background-size: cover;
    background-repeat: no-repeat;

    div {
        padding: 150px 50px;

        img {
            width: 450px;
        }
    }
}
</style>