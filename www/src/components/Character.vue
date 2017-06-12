<template>
  <div class="character">
    <div class="whatever">
    <!--repeat this div for each monster & player, displayed on Encounter.vue-->
    <div class="col-md-1">Initiative number</div>
    <div class="col-md-1">player name /monster type</div>
    <div class="col-md-1">char health</div>
    <div class="col-md-2">
      <div class="row">
        <div class="col-md-2">STR</div>
        <div class="col-md-2">DEX</div>
        <div class="col-md-2">CON</div>
        <div class="col-md-2">WIS</div>
        <div class="col-md-2">INT</div>
        <div class="col-md-2">CHA</div>
      </div>
      <div class="row">
        <div class="col-md-2">put value link here</div>
        <div class="col-md-2">put value link here</div>
        <div class="col-md-2">put value link here</div>
        <div class="col-md-2">put value link here</div>
        <div class="col-md-2">put value link here</div>
        <div class="col-md-2">put value link here</div>
      </div>
    </div>
    <div class="col-md-2">
      <div class="col-md-3">armor</div>
      <div class="col-md-3">initive</div>
      <div class="col-md-3">speed</div>
      <div class="col-md-3">info button</div>
    </div>
    <div class="col-md-1">
    <a><img class="tiny" src="http://i44.photobucket.com/albums/f3/suhmantha/skullDelete_zpsmswuacpy.png" @click="removeCharacter"><!--needs to be hooked up--></a>
    </div>
  </div>

  </div>
</template>


<script>
export default {
  name: 'component',
  data(){

  },
  
  computed:{},
  methods:{
    removeCharacter(character){
      //wire this!---> this.$store.dispatch('removeCharacter', character)
    }
  },
  components:{}
}
</script>


<style scoped>
.tiny{
    max-height: 30px;
    max-width: auto
  }
</style>

