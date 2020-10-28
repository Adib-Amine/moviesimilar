<template>
  <div>
      <h1>{{movie}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      movie : "null",
      test : "test"
    }
  },
  created() {
      this.movie = this.$route.params.moviename;
  },
  methods: {
           
  }
}
</script>

<style>
h1{
  text-align: center;
}
</style>