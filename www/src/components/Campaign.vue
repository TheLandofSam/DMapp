<template>
  <div class="well">
    <button type="button">
        <router-link :to="'/campaigns/'"><h6>go back to campaigns list...</h6></router-link>
        </button>
    <br><br>    
    Active Campaign: {{campaign.name}}
    <br>
    <form @submit.prevent="createLists(list)">
      <input type="text" v-model="name" required placeholder="Create List">
      <button type="submit">+</button>
    </form>
    <div class="well">
      <li v-for="list in lists">
        <list :listData="list"></list>
      </li>
    </div>
  </div>
</template>

<script>
  import List from './list'
  export default {
    name: 'campaigns',
    data() {
      return {
        name: ''
      }
    },
    mounted() {
      console.log('sail away saily away')
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
      createLists() {
        this.$store.dispatch('createLists', {
          name: this.name,
          description: this.description,
          campaignId: this.$route.params.id
        })
        this.name = ''
      }
    },
    components: {
      List
    }
  }

</script>

<style scoped>
  .well {
    color: black;
    background-color: #fbfbfb;
    font-family: 'Asap', sans-serif;
  }

  h6 {
    color: black;
  }
</style>