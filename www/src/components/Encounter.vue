<template>
  <div class="encounter">
    <div class="row tabrow">

      <div class="col-md-2">
        <div v-for="tab in tabs">
          <button type="button" class="btn btn-default" @click="showModal=true">Monsters</button>

          <transition name="modal" v-if="showModal">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">

                  <div class="modal-header">
                    <slot name="header">
                      Monsters
                    </slot>
                  </div>

                  <div class="modal-body">
                    <slot name="body">
                      Monster info, possibly an api call, or some other such stuffses.
                    </slot>
                  </div>

                  <div class="modal-footer">
                    <slot name="footer">
                      Monster feet stink.
                      <button class="modal-default-button" @click="showModal=false">
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
      <div class="col-md-2">Player tab/button here</div>
      <div class="col-md-2">Weapons tab/button here</div>
      <div class="col-md-2">Spells tab/button here</div>
      <div class="col-md-2">Conditions tab/button here</div>
      <div class="col-md-2">Cover tab/button here</div>
    </div>
    <div class="row initrow">
      <div class="col-md-1">
        <!--this is a purposely blank spot-->
      </div>
      <div class="col-md-2">Initiative button here</div>
      <div class="col-md-2">Sort button here</div>
      <div class="col-md-7">
        <!--this is a purposely blank spot-->
      </div>
    </div>
    <div class="row chars">
      <template>
        <!--repeat this div for each monster & player-->
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
        <div class="col-md-1">delete</div>
      </template>
    </div>

  </div>

  </div>
</template>


<script>
  export default {
    name: 'encounter',
    data() {
      return {
        showModal: false
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
    background-color: rgba(200, 200, 200, .1);
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
</style>