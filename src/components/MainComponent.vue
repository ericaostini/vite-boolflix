<template>
    <section>
        <div>
            <img src="/images/AtypicalTitle.png" alt="">
        </div>
    </section>
</template>

<script>
export default {
    name: 'MainComponent'
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
            width: 500px;
        }
    }
}
</style>