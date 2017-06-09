<template>
  <div class="encounter">
    <div class="row tabrow">
       <div class="col-md-2">Monster tab/button here</div>
       <div class="col-md-2">Player tab/button here</div>
       <div class="col-md-2">Weapons tab/button here</div>
       <div class="col-md-2">Spells tab/button here</div>
       <div class="col-md-2">Conditions tab/button here</div>
       <div class="col-md-2">Cover tab/button here</div>
    </div>
    <div class="row initrow">
       <div class="col-md-1"><!--this is a purposely blank spot--></div>
       <div class="col-md-2">Inititive button here</div>
       <div class="col-md-2">Sort button here</div>
       <div class="col-md-7"><!--this is a purposely blank spot--></div>
    </div>
    <div class="row chars">
       <template>
        <!--repeat this div for each monster & player-->
          <div class="col-md-1">Inititive number</div>
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
          <div class="col-md-1">delete</div>
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


<style scoped>
.encounter{
  color: #eaedf2;
}
.tabrow{
  min-height: 100px;
}
.initrow{
  min-height: 100px;
}
.chars{
  min-height: 100px;
}

</style>