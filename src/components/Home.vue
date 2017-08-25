<template>
  <div class="home">
    <albums-list></albums-list>
  </div>
</template>

<script>
import AlbumsList from "@/components/AlbumsList";
export default {
  name: 'home',
  components: {
    "albums-list": AlbumsList,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
