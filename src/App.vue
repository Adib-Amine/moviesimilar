<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <router-link to="/" />
    </div>
    <router-view/>
  </div>
</template>
<script>
// import SearchBar from './views/SearcheBar.vue'
export default {
  components : {
    // SearchBar
  }
}
</script>
