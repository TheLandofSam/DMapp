<template>
  <div class="campaigns">
    <div class="well">
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
    <div>
      <form @submit.prevent="createCampaign">
        <input type="text" v-model="name" required placeholder="Campaign Name">
        <input type="text" v-model="description" required placeholder="Description of Campaign">
        <button @click="createCampaign">Add Campaign</button>
      </form>
    </div>
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

  .well {
    color: black;
    text-align: left;
    font-family: 'Asap', sans-serif;
    font-weight: bolder;
    /*background-color: rgba(100, 100, 100, .5);*/
    background-color: blue
  }

  /*.well .well {
  }*/
  body {
background-image: url(../image/mapbackground.jpg);
background-attachment: fixed;
background-size: cover;
  }
</style>