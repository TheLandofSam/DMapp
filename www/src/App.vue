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

</style>