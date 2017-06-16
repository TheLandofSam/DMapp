<template>
  <div id="app">
    <error></error>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Error from './components/Error'
export default {
  name: 'app',
  mounted(){
    this.$store.dispatch('getAuth')
  },
  components:{
    Error
  }
}
</script>

<style>
body {
        background-image: linear-gradient(rgba(0, 0, 0, .6), #3D1600 ), url(./image/mapbackground.jpg);
        background-attachment: fixed;
        background-size: cover;
    } 

button {
        margin-top: 10px;
        font-weight: bold;
    }  
</style>