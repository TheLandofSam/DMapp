<template>
  <div class="well">
    <button type="button">
        <router-link :to="'/campaigns/'"><h6>go back to campaigns list...</h6></router-link>
        </button>
    <br><br>    
    Active Campaign: {{campaign.name}}
    <br>
    <form @submit.prevent="createEncounter(encounter)">
      <input type="text" v-model="name" required placeholder="Create Encounter">
      <button type="submit">+</button>
    </form>
    <form @submit.prevent="createPlayer(player)">
      <input type="text" v-model="name" required placeholder="Player Name">
      <input type="text" v-model="description" required placeholder="Player Description">
      <button type="submit">+</button>
    </form>
    <div class="well">
      <li v-for="encounter in encounters">
        <encounter :encounterData="encounter"></encounter>
      <li v-for="player in players">
        <player :playerData="player"></player>
      </li>
    </div>
  </div>
</template>

<script>
  import encounters from './encounter'
  import Player from './player'
  export default {
    name: 'campaigns',
    data() {
      return {
        name: '',
        description: ''
      }
    },
    mounted() {
      this.$store.dispatch('getCampaign', this.$route.params.id)
      this.$store.dispatch('getEncounter', this.$route.params.id)
      this.$store.dispatch('getPlayer', this.$route.params.id)
    },
    computed: {
      campaign() {
        return this.$store.state.activeCampaign
      },
      encounter() {
        return this.$store.state.encounters
      },
      player() {
        return this.$store.state.players
      }
    },
    methods: {
      createPlayer() {
        this.$store.dispatch('createPlayer', {
          name: this.name,
          description: this.description,
          campaignId: this.$route.params.id
        })
        this.name = ''
      },
      createEncounter() {
        this.$store.dispatch('createEncounter', {
          name: this.name,
          description: this.description,
          encounterId: this.$route.params.id
        })
        this.name = ''
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