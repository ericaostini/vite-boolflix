<template>
    <div class="text-light">
        <iframe width="420" height="345" src="https://www.youtube.com/watch/v=ieHh4U-QYwU">
        </iframe>
    </div>
</template>

<script>
import { store } from '../data/store'
export default {
    nome: 'VideoComponent',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped></style>