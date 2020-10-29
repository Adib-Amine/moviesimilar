<template>
  <div>
      <h1>{{movie}}</h1>
      <br>
      <br>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-auto">
            <div class="card" style="width: 18rem;">
              <ul class="list-group list-group-flush"  v-for="movie in this.info.data" :key="movie">
                <li class="list-group-item">{{movie}}</li>
              </ul>
            </div>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      movie : "null",
       baseurl : "https://moviesimilarapi.herokuapp.com/",
      //baseurl : "http://localhost:8000/",
      totalVuePackages : null,
      info : null,
      data : null
    }
  },
  created() {
      this.movie = this.$route.params.moviename;
  },
  mounted () {
    axios
      .get(this.baseurl + this.movie)
      //.get('http://localhost:8000/john%20wick')
      .then(response => (this.info = response))
  },
  methods: {
           
  }
}
</script>

<style>
h1{
  text-align: center;
}
/* .table {
  width: 300px;
} */
</style>