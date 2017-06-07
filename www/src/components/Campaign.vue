<template>
  <div class="well">
    <button type="button">
        <router-link :to="'/campaigns/'"><h6>go back to campaigns list...</h6></router-link>
        </button>
    <br><br>    
    Active Campaign: {{campaign.name}}
    <br>
    <form @submit.prevent="createPlayer(player)">
      <input type="text" v-model="name" required placeholder="Create Player">
      <button type="submit">+</button>
    </form>
    <div class="well">
      <li v-for="player in players">
        <player :playerData="player"></player>
      </li>
    </div>
  </div>
</template>

<script>
  import Player from './player'
  export default {
    name: 'campaigns',
    data() {
      return {
        name: ''
      }
    },
    mounted() {
      this.$store.dispatch('getCampaign', this.$route.params.id)
      this.$store.dispatch('getLists', this.$route.params.id)
    },
    computed: {
      campaign() {
        return this.$store.state.activeCampaign
      },
      lists() {
        return this.$store.state.activeLists
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
      }
    },
    components: {
      Player
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