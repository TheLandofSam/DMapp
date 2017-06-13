<template>
  <div class="campaigns">
    <div class="container">
      <div class="row">
        <div>
        <p class="logout pull-right"><button class="logout" @click="logout(user)">Logout</button></p>
          <form class="col-md-3" @submit.prevent="createCampaign">
            <input type="text" v-model="name" required placeholder="Campaign Name">
            <input type="text" v-model="description" required placeholder="Description of Campaign">
            <button @click="createCampaign">Add Campaign</button>
          </form>
        </div>
        <div class="col-md-3" v-for="campaign in campaigns">
          <div class="well">
            <router-link :to="'/campaigns/'+campaign._id">
              <h3>{{campaign.name}}</h3>
              <p>{{campaign.description}}</p>
            </router-link>
            <a class="fa fa-trash" @click="removeCampaign(campaign)"></a>
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
      logout() {
      this.$store.dispatch('logout', this.user)
    },
      createCampaign() {
        this.$store.dispatch('createCampaign', {
          name: this.name,
          description: this.description
        })
        this.name= '',
        this.description= ''
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
    background-color: rgba(100, 100, 100, 0);
    border-color:rgba(100, 100, 100, 0);
  }
  
</style>