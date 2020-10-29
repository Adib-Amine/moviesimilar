<template>
  <div id="app">
    <div id="nav">
      <Header />
      <router-link to="/" />
    </div>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  components : {
    Header
  }
}
</script>
