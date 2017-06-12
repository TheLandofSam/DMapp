<template>
  <div class="well">
    <button type="button">
        <router-link :to="'/campaigns/'"><h6>go back to campaigns list...</h6></router-link>
        </button>
    <br><br> Active Campaign: {{campaign.name}}
    <br>
    <form @submit.prevent="createEncounter">
      <input type="text" v-model="encounterName" required placeholder="Create Encounter">
      <input type="text" v-model="encounterDescription" required placeholder="Encounter Description">
      <button type="submit">create encounter</button>
    </form>
    <form @submit.prevent="createPlayer">
      <input type="text" v-model="playerName" required placeholder="Player Name">
      <input type="text" v-model="playerDescription" required placeholder="Player Description">
      <button type="submit">create player</button>
    </form>
    <div class="container-fluid">
      <div class="row">
        <div class="well">
          <div class="list-group">
            <div class="col-xs-6">
              <h1>Encounter</h1>

              <a class="list-group-item" v-for="encounter in encounters">
                <a class="fa fa-trash" @click="removeEncounter(encounter)"></a>
              <router-link :to="'/encounters/' + encounter._id ">
                {{encounter.name}}
              </router-link>
              </a>
            </div>
            <div class="col-xs-6">
              <h1>Player</h1>
              <a class="list-group-item" v-for="player in players">
                <a class="fa fa-trash" @click="removePlayer(player)"></a>
                {{player.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Encounter from './encounter'
  import Player from './player'
  export default {
    name: 'campaigns',
    data() {
      return {
        encounterName: '',
        encounterDescription: '',
        playerName: '',
        playerDescription: ''
      }
    },
    mounted() {
      this.$store.dispatch('getCampaign', this.$route.params.id)
      this.$store.dispatch('getEncounters', this.$route.params.id)
      this.$store.dispatch('getPlayers', this.$route.params.id)
    },
    computed: {
      campaign() {
        return this.$store.state.activeCampaign
      },
      encounters() {
        return this.$store.state.encounters
      },
      players() {
        return this.$store.state.players
      }
    },
    methods: {
      createPlayer() {
        this.$store.dispatch('createPlayer', {
          name: this.playerName,
          description: this.playerDescription,
          campaignId: this.$route.params.id
        })
        this.playerName = ''
        this.playerDescription = ''
      },
      createEncounter() {
        this.$store.dispatch('createEncounter', {
          name: this.encounterName,
          description: this.encounterDescription,
          campaignId: this.$route.params.id
        })
        this.encounterName = ''
        this.encounterDescription = ''
      },
      removeEncounter(encounter) {
        this.$store.dispatch('removeEncounter', encounter)
      },
      removePlayer(player) {
        this.$store.dispatch('removePlayer', player)
      }
    },
    components: {
      Player,
      Encounter
    }
  }

</script>

<style>
  .well {
    color: black;
    background-color: #fbfbfb;
    font-family: 'Asap', sans-serif;
  }

  h6 {
    color: black;
  }
</style>