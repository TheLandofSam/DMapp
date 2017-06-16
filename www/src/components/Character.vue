<template>
  <div class="character">
    <div class="row">
    <!--repeat this div for each monster & player, displayed on Encounter.vue-->
      <div class="col-md-1">
        <div class="row">
          <div class="col-md-12">
            <h4>INT</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <input type="number">
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="row">
          <div class="col-md-12">
            <h4>Character Name</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h4>Character Class</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h4>Level<input type="number"></h4>
          </div>
        </div>
      </div>
      <div class="col-md-1">
        <div class="row"><!--ROW 1 OF 2 OPEN-->
          <div class="col-md-12">
            <h4>HEALTH</h4>
            <input type="number">
          </div>
        </div><!--ROW 1 OF 2 CLOSE-->
        <div class="row"><!--ROW 2 OF 2 OPEN-->
          <div class="col-md-12"><!--COL OF ROW3 (OF ROW2/2) OPEN-->
            <div class="row"><!--ROW1 (OF ROW2/2) OPEN-->
              <div class="col-md-4">
                <i class="fa fa-angle-up" aria-hidden="true" @click=""></i>
              </div>
              <div class="col-md-4">
                <i class="fa fa-angle-up" aria-hidden="true" @click=""></i>
              </div>
              <div class="col-md-4">
                <i class="fa fa-angle-up" aria-hidden="true" @click=""></i>
              </div>
            </div><!--ROW1 (OF ROW2/2) CLOSE-->
            <div class="row"><!--ROW2 (OF ROW2/2) OPEN-->
              <div class="col-md-4">1</input>
              </div>
              <div class="col-md-4">5</input>
              </div>
              <div class="col-md-4">10</input>
              </div>
            </div><!--ROW2 (OF ROW2/2) CLOSE-->
            <div class="row"><!--ROW3 (OF ROW2/2) OPEN-->
              <div class="col-md-4">
                <i class="fa fa-angle-down" aria-hidden="true" @click=""></i>
              </div>
              <div class="col-md-4">
                <i class="fa fa-angle-down" aria-hidden="true" @click=""></i>
              </div>
              <div class="col-md-4">
                <i class="fa fa-angle-down" aria-hidden="true" @click=""></i>
              </div>
            </div><!--ROW3 (OF ROW2/2) CLOSE-->
         </div><!--COL OF ROW3 (OF ROW2/2) CLOSE-->
        </div><!--ROW 2 OF 2 CLOSE-->
      </div><!--COL 1 FOR HEALTH CLOSES-->
      <div class="col-md-1">
        <div class="row">
          <div class="col-md-12">
          <h4>AC</h4><input type="number">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
          <!--SOME SORT OF HOVERABLE ICON THINGY GOES HERE whooohooo!-->
          </div>
        </div>
      </div>
      <div class="col-md-1">
        <div class="row">
          <div class="col-md-12">
            <h4>SPEED</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
          <input type="string">
          </div>
        </div>
      </div>
      <div class="col-md-1">
        <div class="row">
          <div class="col-md-12">
            <h4>WEAPONS</h4>
          </div>
        </div>
        <div class="row" id="smallIcon">
          <!--SOME SORT OF HOVERABLE ICON THINGY GOES HERE whooohooo!
          <i http://i44.photobucket.com/albums/f3/suhmantha/sverd-i-fjell_zpsfquiiy7t.png?t=1497395312>-->
        </div>
      </div>
      <div class="col-md-4">
        <div class="row">
          <!--STATS TITLE-->
          <div class="col-md-2">STR</div>
          <div class="col-md-2">DEX</div>
          <div class="col-md-2">CON</div>
          <div class="col-md-2">WIS</div>
          <div class="col-md-2">INT</div>
          <div class="col-md-2">CHA</div>
        </div>
        <div class="row">
          <!--CHARACTER STATS-->
          <div class="col-md-2"><input type="number"></div>
          <div class="col-md-2"><input type="number"></div>
          <div class="col-md-2"><input type="number"></div>
          <div class="col-md-2"><input type="number"></div>
          <div class="col-md-2"><input type="number"></div>
          <div class="col-md-2"><input type="number"></div>
        </div>
        <div class="row">
          <!--THE STAT MODIFIER-->
          <div class="col-md-2"><input type="text"></div>
          <div class="col-md-2"><input type="text"></div>
          <div class="col-md-2"><input type="text"></div>
          <div class="col-md-2"><input type="text"></div>
          <div class="col-md-2"><input type="text"></div>
          <div class="col-md-2"><input type="text"></div>
        </div>
      </div>
      <div class="col-md-1">
        <div class="row">
          <div class="ui checkbox"><input type="checkbox" name="checkbox"></div>
        </div>
        <div class="row">
          <i><img class="tiny" src="http://i44.photobucket.com/albums/f3/suhmantha/skullDelete_zpsmswuacpy.png" @click="removeCharacter"></i><!--THIS FUNCTION NEEDS TO BE WIRED!!!-->
        </div>
      </div>
    </div>
    
  </div>
</template>


<script>
export default {
  name: 'component',
  data(){
    return{
      
    }
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
input{
  max-width: 35px;
}
#smallIcon{
  max-height: 30px


}
</style>
