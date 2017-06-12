<template>
  <div class="encounter">
      <div class="row tabrow">
        <!--MONSTERS TAB -->
        <div class="col-md-2">
          <button type="button" class="btn btn-default" @click="showMonsters=true">Monsters</button>
          <transition name="modal" v-if="showMonsters">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <div class="modal-header">
                    <slot name="monsters">
                      Monsters
                    </slot>
                  </div>
                  <div class="modal-body">
                    <slot name="body">
                      Monster info, monster api call, or some other such stuffses would be here...<!--dont forget to wire the add monster button-->
                       <button class="btn but-default">Add Monster</button>
                    </slot>
                  </div>
                  <div class="modal-footer">
                    <slot name="footer">
                      Monster feet stink.
                      <button class="modal-default-button" @click="showMonsters=false">
                  Close
                </button>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <!--PLAYERS TAB -->
        <div class="col-md-2">
          <button type="button" class="btn btn-default" @click="showPlayer=true">Players</button>
          <transition name="modal" v-if="showPlayer">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <div class="modal-header">
                    <slot name="players">
                      Players
                    </slot>
                  </div>
                  <div class="modal-body">
                    <slot name="body">
                      Player info or some other such stuffses.
                    </slot>
                  </div>
                  <div class="modal-footer">
                    <slot name="footer">
                      Monster feet stink.
                      <button class="modal-default-button" @click="showPlayer=false">
                  Close
                </button>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <!--WEAPONS TAB -->
        <div class="col-md-2">
          <button type="button" class="btn btn-default" @click="showWeapons=true">Weapons</button>
          <transition name="modal" v-if="showWeapons">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <div class="modal-header">
                    <slot name="weapons">
                      Weapons
                    </slot>
                  </div>
                  <div class="modal-body">
                    <slot name="body">
                     Weapon info, weapon api call, or some other such stuffses would be here...<!--dont forget to wire the add weapon button-->
                       <button class="btn but-default">Add Weapon</button>
                    </slot>
                  </div>
                  <div class="modal-footer">
                    <slot name="footer">
                      Weapons are dangerous, unless it is a boiled carrot.
                      <button class="modal-default-button" @click="showWeapons=false">
                  Close
                </button>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <!--SPELLS TAB -->
        <div class="col-md-2">
          <button type="button" class="btn btn-default" @click="showSpells=true">Spells</button>
          <transition name="modal" v-if="showSpells">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <div class="modal-header">
                    <slot name="spells">
                      Spells
                    </slot>
                  </div>
                  <div class="modal-body">
                    <slot name="body">
                      Spells: its magic!!
                      Spell info, spell api call, or some other such stuffses would be here...<!--dont forget to wire the add spell button-->
                       <button class="btn but-default">Add Spell</button>
                    </slot>
                  </div>
                  <div class="modal-footer">
                    <slot name="footer">
                      Don't anger the mage.
                      <button class="modal-default-button" @click="showSpells=false">
                  Close
                </button>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <!--CONDITIONS TAB -->
        <div class="col-md-2">
          <button type="button" class="btn btn-default" @click="showConditions=true">Conditions</button>
          <transition name="modal" v-if="showConditions">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <div class="modal-header">
                    <slot name="conditions">
                      Conditions
                    </slot>
                  </div>
                  <div class="modal-body">
                    <slot name="body">
                      Conditions will be hard coded!!
                    </slot>
                  </div>
                  <div class="modal-footer">
                    <slot name="footer">
                      What is your condition??
                      <button class="modal-default-button" @click="showConditions=false">
                  Close
                </button>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <!--COVER TAB -->
        <div class="col-md-2">
          <button type="button" class="btn btn-default" @click="showCover=true">Cover</button>
          <transition name="modal" v-if="showCover">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <div class="modal-header">
                    <slot name="cover">
                      Cover
                    </slot>
                  </div>
                  <div class="modal-body">
                    <slot name="body">
                      Cover will be hard coded!!
                    </slot>
                  </div>
                  <div class="modal-footer">
                    <slot name="footer">
                      Big rock == cover.
                      <button class="modal-default-button" @click="showCover=false">
                  Close
                </button>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="row initrow">
        <div class="col-md-1">
          <!--this is a purposely blank spot-->
        </div>
        <div class="col-md-2">
        <!--this button needs to be wired to complete initative sort-->
        <button class="btn btn-default">Initiative Sort button</button>
        </div>
        <div class="col-md-5"></div>
        <div class="col-md-2">
        <button class="btn btn-default">Return to Campaign</button>
        </div>
        <div class="col-md-2">
          <!--this is a purposely blank spot-->
        </div>
      </div>
      <div class="row chars">
        <div class="well well-lg">
        <!--IMPORT CHARACTER HERE!!-->
        </div>
      </div>
  </div>
</template>


<script>
  export default {
    name: 'encounter',
    data() {
      return {
        showMonsters: false,
        showPlayer: false,
        showWeapons: false,
        showSpells: false,
        showConditions: false,
        showCover: false
      }

    },
    computed: {},
    methods: {},
    components: {}
  }

</script>


<style scoped>
  .encounter {
    color: #eaedf2;
  }

  .tabrow {
    min-height: 100px;
  }

  .initrow {
    min-height: 100px;
  }

  .chars {
    min-height: 100px;
  }


  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(200, 200, 200, .33);
    display: table;
    transition: opacity .3s ease;
    color: black;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 900px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }
  /*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .well{
    min-height: 500px;
  }
</style>