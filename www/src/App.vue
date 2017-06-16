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
        background-image: url(./image/mapbackground.jpg);
        background-attachment: fixed;
        background-size: cover;
    } 
.fullscreen {
        background: rgba(61, 22, 0, .8);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }   
button {
        margin-top: 10px;
        font-weight: bold;
    }  
</style>