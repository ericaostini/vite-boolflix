<template>
  <div>
    ciao
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
  created() {
    const url = store.apiUrl + this.store.endPoint.series;
    console.log(url);
    axios.get(url, { params: this.store.params }).then((res) => {
      console.log(res.data.results)
    })
  },
}
</script>

<style lang="scss" scoped></style>
