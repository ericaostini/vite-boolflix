<template>
    <h5>{{ title }}</h5>
    <p>
        {{ originalT }} <br>
        <small>{{ language }}</small> <br>
        <small>{{ vote }}</small>
    </p>
    <img :src="image">
</template>

<script>
export default {
    name: 'PosterComponent',
    props: ['title', 'originalT', 'language', 'vote', 'image']
}
</script>

<style lang="scss" scoped></style>