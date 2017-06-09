<template>
  <div class="encounter">
    <div class="row">
       <div class="col-md-2">Monster tab/button here</div>
       <div class="col-md-2">Player tab/button here</div>
       <div class="col-md-2">Weapons tab/button here</div>
       <div class="col-md-2">Spells tab/button here</div>
       <div class="col-md-2">Conditions tab/button here</div>
       <div class="col-md-2">Cover tab/button here</div>
    </div>
    <div class="row">
       <div class="col-md-2"><!--this is a purposely blank spot--></div>
       <div class="col-md-2">Inititive button here</div>
       <div class="col-md-2">Sort button here</div>
       <div class="col-md-6"><!--this is a purposely blank spot--></div>
       
       <template>
        <div class="row">
        <!--repeat this div for each monster & player-->
          <div class="col-md-1">Inititive number</div>
          <div class="col-md-1">player name/monster type</div>
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
          <div class="col-md-2">armor/inititive/speed + info button</div>
          <div class="col-md-1">delete</div>
        </div>
      </template>

    </div>
     

  </div>

  </div>
</template>


<script>
export default {
  name: 'encounter',
  data(){

  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style>

</style>