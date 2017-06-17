<template>
  <div class="character">
    <div class="row">
      <!--repeat this div for each monster & player, displayed on Encounter.vue-->
      <div class="col-md-1">
        <div class="row">
          <div class="col-md-12 int">
            <h5>INT</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h4>{{character.initiative}}</h4>
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="row">
          <div class="col-md-12">
            <h4>{{character.name}}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h4>{{character.description}}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h4>Level <input type="number"></h4>
          </div>
        </div>
      </div>
      <div class="col-md-1">
        <div class="row">
          <!--ROW 1 OF 2 OPEN-->
          <div class="col-md-12">
            <h5 class="hea">HP</h5>
            <div class="hea2">
              <h5>{{character.health}}</h5>
              <h5>{{character.maxHealth}}</h5>
            </div>
          </div>
        </div>
        <!--ROW 1 OF 2 CLOSE-->
        <div class="row">
          <!--ROW 2 OF 2 OPEN-->
          <div class="col-md-12">
            <!--COL OF ROW3 (OF ROW2/2) OPEN-->
            <div class="row">
              <!--ROW1 (OF ROW2/2) OPEN-->
              <div class="col-md-4">
                <i class="fa fa-angle-up" aria-hidden="true" @click="updateHealth(1)"></i>
              </div>
              <div class="col-md-4">
                <i class="fa fa-angle-up" aria-hidden="true" @click="updateHealth(5)"></i>
              </div>
              <div class="col-md-4">
                <i class="fa fa-angle-up" aria-hidden="true" @click="updateHealth(10)"></i>
              </div>
            </div>
            <!--ROW1 (OF ROW2/2) CLOSE-->
            <div class="row">
              <!--ROW2 (OF ROW2/2) OPEN-->
              <div class="col-md-4">1</input>
              </div>
              <div class="col-md-4">5</input>
              </div>
              <div class="col-md-4">10</input>
              </div>
            </div>
            <!--ROW2 (OF ROW2/2) CLOSE-->
            <div class="row">
              <!--ROW3 (OF ROW2/2) OPEN-->
              <div class="col-md-4">
                <i class="fa fa-angle-down" aria-hidden="true" @click="updateHealth(-1)"></i>
              </div>
              <div class="col-md-4">
                <i class="fa fa-angle-down" aria-hidden="true" @click="updateHealth(-5)"></i>
              </div>
              <div class="col-md-4">
                <i class="fa fa-angle-down" aria-hidden="true" @click="updateHealth(-10)"></i>
              </div>
            </div>
            <!--ROW3 (OF ROW2/2) CLOSE-->
          </div>
          <!--COL OF ROW3 (OF ROW2/2) CLOSE-->
        </div>
        <!--ROW 2 OF 2 CLOSE-->
      </div>
      <!--COL 1 FOR HEALTH CLOSES-->
      <div class="col-md-1">
        <div class="row">
          <div class="col-md-12 ac">
            <h5>AC</h5>
          </div>
          <div class="ac2">
            <input type="number">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div @click="openArmor">
              <a class="size"><img src="http://i44.photobucket.com/albums/f3/suhmantha/rosa-shield_zpsfgabmhuq.png" alt="AC"></a>
            </div>
            <div v-show="showArmor">
              <h1>Character armor here...</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-1">
        <div class="row">
          <div class="col-md-12">
            <h5>SPEED</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 spe">
            <input type="string">
          </div>
        </div>
      </div>
      <div class="col-md-1">
        <div class="row">
          <div class="col-md-12">
            <h5>WEAPONS</h5>
          </div>
        </div>
        <div class="row" id="wpn">
          <div @click="openWeapons">
            <img src="http://i44.photobucket.com/albums/f3/suhmantha/sverd-i-fjell_zps1m8jlpma.png" alt="WEAPONS">
          </div>
          <div v-show="showWeapons">
            <h1>Character weapons here...</h1>
          </div>

        </div>
      </div>
      <div class="col-md-4">
        <div class="row">
          <!--STATS TITLE-->
          <div class="col-md-2 titleS">STR</div>
          <div class="col-md-2 titleD">DEX</div>
          <div class="col-md-2 titleCN">CON</div>
          <div class="col-md-2 titleW">WIS</div>
          <div class="col-md-2 titleI">INT</div>
          <div class="col-md-2 titleCH">CHA</div>
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
        <div class="row" id="end">
          <div class="ui checkbox"><input type="checkbox" name="checkbox"></div>
        </div>
        <div class="row" id="end2">
          <i><img class="tiny" src="http://i44.photobucket.com/albums/f3/suhmantha/skullDelete_zpsmswuacpy.png" @click="removeCharacter(character)"></i>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Player from './Player'
  export default {

    name: 'Character',
    data() {
      return {
        showArmor: false,
        showWeapons: false
      }
    },
    props: ["character"],
    methods: {
      removeCharacter(character) {
        this.$store.dispatch('removeCharacter', character)
      },
      updateHealth(value){
        this.$store.dispatch('updateHealth', {character: this.character, value: value})
      },
      openArmor() {
        this.showArmor = !this.showArmor
      },
      openWeapons() {
        this.showWeapons = !this.showWeapons
      }

    },
    components: {
      Player
    }
  }

</script>


<style scoped>
  .tiny {
    max-height: 30px;
    max-width: auto
  }

  input {
    max-width: 40px;
  }

  #wpn {
    padding-left: 20px;
  }

  #end {
    min-height: 50px;
    padding-left: 30px;
  }

  #end2 {
    padding-left: 5px;
  }

  .int {
    padding-left: 20px;
  }

  .lvl {
    padding-left: 10px;
  }

  .hea {
    padding-left: 30px;
  }

  .hea2 {
    padding-left: 30px;
    
  }

  .ac {
    padding-left: 35px;
  }

  .ac2 {
    padding-left: 27px;
  }

  .spe {
    padding-left: 18px;
  }
  .titleS{
    padding-left: 17px;
  }
  .titleD{
    padding-left: 17px;
  }
  .titleCN{
    padding-left: 17px;
  }
  .titleW{
    padding-left: 19px;
  }
  .titleI{
    padding-left: 21px;
  }
  .titleCH{
    padding-left: 19px;
  }
</style>
