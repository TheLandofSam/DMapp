<template>
  <div class="well">
    <button @click="createCampaign">Add Campaign</button>
    <ul>
      <li v-for="campaign in campaigns">
        <router-link :to="'/campaigns/'+campaign._id">
          <div class="well">
            {{campaign.name}}
            <button class="fa fa-trash" aria-hidden="true" @click="removeCampaign()"></button>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'campaigns',
    mounted() {
      this.$store.dispatch('getCampaigns')
    },
    computed: {
      campaigns() {
        return this.$store.state.campaigns
      }
    },
    methods: {
      createCampaign() {
        this.$store.dispatch('createCampaign', {
          name: 'Testing campaign creation',
          description: 'blarg'
        })
      },
      removeCampaign(campaign) {
        this.$store.dispatch('removeCampaign', campaign)
      },
    }
  }

</script>

<style scoped>
  ul li a {
    color: black;
  }

  ul li {
    color: black;
    list-style: none;
  }

  button {
    color: black;
    margin-bottom: 10px; 
  }
.well{
    color: black;
    text-align: left;
    font-family: 'Asap', sans-serif;
    font-weight: bolder;
}
.well .well{
    background-color: #fbfbfb;
}
</style>