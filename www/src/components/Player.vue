<template>
  <div class="player">
    {{player.name}}<button @click="removePlayer(player)"> - </button>

  </div>
</template>


<script>
export default {
  name: 'player',
  data(){
    return {
      name: ''
    }
  },
  computed:{},
  prop: ['player'],
  methods:{
    removePlayer(player){
      this.$store.dispatch('removePlayer', player)
    }
  },
  components:{}
}
</script>


<style scoped>

</style>