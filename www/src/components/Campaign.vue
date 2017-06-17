<template>
  <div class="campaign">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <h1 class="dungeon">DM</h1>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><a class="dungeon" style="color: #c70505; cursor: pointer" @click="logout(this.user)">Logout</a></li>
        </ul>
      </div>
    </nav>
    <div class="well">
      <button type="button">
        <router-link :to="'/campaigns/'"><h6>go back to campaigns list...</h6></router-link>
        </button>
      <h3 class="dungeon">{{campaign.name}}</h3>
      <form @submit.prevent="createEncounter">
        <input type="text" v-model="encounterName" required placeholder="Create Encounter">
        <input type="text" v-model="encounterDescription" required placeholder="Encounter Description">
        <button type="submit">Create Encounter</button>
      </form>
      <form @submit.prevent="createPlayer">
        <input type="text" v-model="playerName" required placeholder="Player Name">
        <input type="text" v-model="playerDescription" required placeholder="Player Description">
        <input type="number" v-model="playerHealth" required placeholder="Player Health">
        <button type="submit">Create Player</button>
      </form>
      <div class="container-fluid">
        <div class="row">
          <div class="well">
            <div class="list-group">
              <div class="col-xs-6">
                <h1 class="dungeon">Encounter</h1>
                <a class="list-group-item" v-for="encounter in encounters">
                  <button @click="movePlayers(players, encounter._id)">Add all Players</button>                  <a class="fa fa-trash" @click="removeEncounter(encounter)"></a>
                  <router-link :to="'/campaigns/'+campaign._id+'/encounters/' + encounter._id ">
                    {{encounter.name}}
                  </router-link>
                </a>
              </div>
              <div class="col-xs-6">
                <h1 class="dungeon">Player</h1>
                <a class="list-group-item" v-for="player in players">
                  <a class="fa fa-trash" @click="removePlayer(player)"></a>
                  {{player.name}}</a>
              </div>
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
        playerDescription: '',
        playerHealth: 0
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
      logout() {
        this.$store.dispatch('logout', this.user)
      },
      createPlayer() {
        this.$store.dispatch('createPlayer', {
          health: this.playerHealth,
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
      },
      movePlayers(players, encounterId) {
        for (var i = 0; i < players.length; i++) {
          var player = players[i]
          console.log(encounterId)
          player.encounterId = encounterId
          this.$store.dispatch("movePlayers", player)
        }
      },
      components: {
        Player,
        Encounter
      }
    }
  }

</script>

<style scoped>
  h1 {
    text-align: center;
    font-size: 50px;
  }
  
  .navbar {
    background-color: rgba(100, 100, 100, 0);
    border-color: rgba(100, 100, 100, 0);
  }
  
  .list-group-item {
    background-color: rgba(100, 100, 100, 0);
    border-color: rgba(100, 100, 100, 0);
  }
  
  .list-group-item:hover {
    background-color: rgba(100, 100, 100, 0);
    border-color: rgba(100, 100, 100, 0);
  }
  
  .dungeon {
    color: #c70505;
    font-family: 'Metal Mania';
    text-shadow: 1px 1px 1px gold;
  }
  
  a {
    color: whitesmoke;
    text-shadow: 1px 1px 1px rgba(100, 100, 100, 0);
  }
  
  .well {
    background-color: rgba(100, 100, 100, 0);
    border-color: rgba(100, 100, 100, 0);
    font-family: 'Asap', sans-serif;
  }
  
  h6 {
    color: #333
  }
</style>