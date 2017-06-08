<template>
  <div class="campaigns">
    <div class="container">
      <div class="row">
        <div>
          <form class="col-md-3" @submit.prevent="createCampaign">
            <input type="text" v-model="name" required placeholder="Campaign Name">
            <input type="text" v-model="description" required placeholder="Description of Campaign">
            <button @click="createCampaign">Add Campaign</button>
          </form>
        </div>
        <div class="col-md-3" v-for="campaign in campaigns">
          <div class="well">
            <router-link :to="'/campaigns/'+campaign._id">
              {{campaign.name}}
            </router-link>
            <a class="fa fa-trash" @click="removeCampaign()"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'campaigns',
    data() {
      return {
        name: "",
        description: ""
      }
    },
    created() {
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
          name: 'Kyle Is Totes Awesome',
          description: 'J is da Bomb'
        })
      },
      removeCampaign(campaign) {
        this.$store.dispatch('removeCampaign', campaign)
      },
    }
  }

</script>

<style>
  a {
    color: black;
  }
   
  button {
    color: black;
    margin-bottom: 10px;
  }
  
  .well {
    color: black;
    text-align: left;
    font-family: 'Asap', sans-serif;
    font-weight: bolder;
    /*background-color: rgba(100, 100, 100, .5);*/
    background-color: blue;
  }
  body {
    background-image: url(../image/mapbackground.jpg);
    background-attachment: fixed;
    background-size: cover;
  }
</style>