<template>
  <div class="campaigns">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <h2 class="dungeon">DM</h2>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><a class= "dungeon" style="color: #c70505; cursor: pointer" @click="logout(this.user)">Logout</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <form class="col-md-3" @submit.prevent="createCampaign">
          <input type="text" v-model="name" required placeholder="Campaign Name">
          <input type="text" v-model="description" required placeholder="Description of Campaign">
          <button @click="createCampaign">Add Campaign</button>
        </form>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4" v-for="campaign in campaigns">
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
        this.name = '',
          this.description = ''
      },
      removeCampaign(campaign) {
        this.$store.dispatch('removeCampaign', campaign)
      },
    }
  }

</script>

<style scoped>
  
  .navbar{
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
  
  button {
    margin-bottom: 10px;
  }
  
  .well {
    color: whitesmoke;
    text-align: left;
    font-family: 'Asap', sans-serif;
    font-weight: bolder;
    background-color: rgba(61, 22, 0, .3);
    border-color: rgba(100, 100, 100, 0);
  }
  
</style>