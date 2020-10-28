<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <SearchBar /> 
    </div>
    <router-view/>
  </div>
</template>
<script>
import SearchBar from './views/SearcheBar'

export default {
  components:{
    SearchBar
  }
}
</script>
