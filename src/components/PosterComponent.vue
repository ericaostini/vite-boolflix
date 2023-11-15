<template>
    <h5>{{ title }}</h5>
    <p>
    <h6>{{ original }}</h6> <br>
    <small>{{ language }}</small> <br>
    <small>{{ vote }}</small>
    </p>
    <img :src="image">
</template>

<script>
export default {
    name: 'PosterComponent',
    props: ['title', 'original', 'language', 'vote', 'image']
}
</script>

<style lang="scss" scoped></style>