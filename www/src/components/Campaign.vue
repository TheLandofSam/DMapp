<template>
  <div class="well">
    <button type="button">
        <router-link :to="'/campaigns/'"><h6>go back to campaigns list...</h6></router-link>
        </button>
    <br><br>    
    Active Campaign: {{campaign.name}}
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
    <div class="table-responsive">
    <div class="col-xs-6" id="table-style">
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="col-md-12">Encounter Name</th>
          <th class="col-md-12">Encounter Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td  v-for="encounter in encounters">{{encounter.name}} {{encounter.description}}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="col-xs-6" id="table-style">
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="col-md-1">Player Name</th>
          <th class="col-md-1">Player Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="player in players">{{player.name}} {{player.description}}</td>
        </tr>
      </tbody>
    </table>
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

  th, td {
    padding: 15px;
    text-align: left;
    height: 50px;
}

table {
    vertical-align: bottom;
    border: 1px solid black;
}



  h6 {
    color: black;
  }
</style>