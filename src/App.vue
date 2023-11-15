<template>
  <div>
  </div>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  methods: {
    getApi() {
      axios.get(store.apiUrl).then((response) => {
        console.log(response.data);
      })
    }
  },
  created() {
    this.getApi()
  }
}
</script>

<style lang="scss" scoped></style>
