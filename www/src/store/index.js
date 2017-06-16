import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let dnd = axios.create({
  baseURL: 'http://www.dnd5eapi.co/api',
  timeout: 2000
})

let dndblank = axios.create({
  baseURL: '',
  timeout: 2000
})

let api = axios.create({
  baseURL: '//localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: '//localhost:3000/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
 characters: [],
  campaigns: [],
  activeCampaign: {},
  encounters: [],
  activeEncounter: {},
  players: [],
  monsters: [],
  activeMonster: {},
  spells: [],
  activeSpell: {},
  weapons: [],
  equipment: [],
  activeEquipment: {},
  conditions: [],
  error: {},
  user: {}
}

let handleError = (state, err) => {
  state.error = err
}

export default new Vuex.Store({
  // ALL DATA LIVES IN THE STATE
  state,

  mutations: {
    setCharacters(state, characters) {
      state.characters = characters
    },
    setCampaigns(state, campaigns) {
      state.campaigns = campaigns
    },
    setActiveCampaign(state, activeCampaign) {
      Vue.set(state, 'activeCampaign', activeCampaign)
    },
    setEncounters(state, encounters) {
      state.encounters = encounters
    },
    setActiveEncounter(state, activeEncounter) {
      state.activeEncounter = activeEncounter
    },
    setPlayers(state, players) {
      state.players = players
    },

    setConditions(state, conditions) {
      state.conditions = conditions
    },

    setUser(state, user) {
      state.user = user
    },

    //DND5E setters

    setMonsters(state, monsters) {
      state.monsters = monsters.results
      console.log('monsters:' + monsters.count)
    },

    setSpells(state, spells) {
      state.spells = spells.results
      console.log('spells:' + spells.count)
    },

    setEquipment(state, equipment) {
      state.equipment = equipment.results
      console.log('equipment:' + equipment.count)
    },

    setActiveEquipment(state, activeEquipment) {
      state.activeEquipment = activeEquipment.results
      console.log('equipment: ' + activeEquipment.name)
    },

    setActiveMonster(state, activeMonster) {
      state.activeMonster = activeMonster.results
    },
    setActiveSpell(state, activeSpell) {
      state.activeSpell = activeSpell.results
    }

  },

  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {
    getCampaigns({ commit, dispatch }) {
      api('/usercampaigns')
        .then(res => {
          commit('setCampaigns', res.data.data)
        })
        .catch(handleError)
    },
    getCampaign({ commit, dispatch }, id) {
      api('/campaigns/' + id)
        .then(res => {
          commit('setActiveCampaign', res.data.data)
        })
        .catch(handleError)
    },
    createCampaign({ commit, dispatch }, campaign) {
      api.post('/campaigns/', campaign)
        .then(res => {
          dispatch('getCampaigns')
        })
        .catch(handleError)
    },
    removeCampaign({ commit, dispatch }, campaign) {
      api.delete('/campaigns/' + campaign._id)
        .then(res => {
          dispatch('getCampaigns')
        })
        .catch(handleError)
    },
    getEncounters({ commit, dispatch }, id) {
      api('/campaigns/' + id + '/encounters/')
        .then(res => {
          commit('setEncounters', res.data.data)
        })
        .catch(handleError)
    },
    getEncounter({ commit, dispatch }, id) {
      api('/encounters/' + id)
        .then(res => {
          commit('setActiveEncounter', res.data.data)
        })
        .catch(handleError)
    },
    createEncounter({ commit, dispatch }, encounter) {
      api.post('/encounters', encounter)
        .then(res => {
          dispatch('getEncounters', encounter.campaignId)
        })
        .catch(handleError)
    },
    removeEncounter({ commit, dispatch }, encounter) {
      api.delete('/encounters/' + encounter._id)
        .then(res => {
          dispatch('getEncounters', encounter.campaignId)
        })
        .catch(handleError)
    },
    getPlayers({ commit, dispatch }, id) {
      api('/campaigns/' + id + '/players')
        .then(res => {
          commit('setPlayers', res.data.data)
        })
        .catch(handleError)
    },
    createPlayer({ commit, dispatch }, player) {
      api.post('/players', player)
        .then(res => {
          dispatch('getPlayers', player.campaignId)
        })
        .catch(handleError)
    },
    removePlayer({ commit, dispatch }, player) {
      api.delete('/players/' + player._id)
        .then(res => {
          dispatch('getPlayers', player.campaignId)
        })
        .catch(handleError)
    },
    getCharacters({ commit, dispatch }, id) {
      api('/encounters/' + id + '/characters')
        .then(res => {
          commit('setCharacters', res.data.data)
        })
        .catch(handleError)
    },
    createCharacter({ commit, dispatch }, id) {
      api.post('/characters', character)
        .then(res => {
          dispatch('getCharacters', character.encounterId)
        })
        .catch(handleError)
    },    
    removeCharacter({ commit, dispatch }, id) {
      api.delete('/characters' + character._id)
        .then(res => {
          dispatch('getCharacters', character.encounterId)
        })
        .catch(handleError)
    },
    movePlayers({commit, dispatch}, player){
      api.put('./characters/' + player._id)
        .then(res => {
          console.log(player)
          dispatch('getCharacters', player.campaignId)
        })
    },
    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit('setUser', res.data.data)
          router.push('/campaigns')
        })
        .catch(handleError)
    },
    register({ commit, dispatch }, user) {
      auth.post('register', user)
        .then(res => {
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit("setUser", res.data.data)
          router.push('/campaigns')
        })
        .catch(handleError)
    },
    getAuth() {
      auth('authenticate')
        .then(res => {
          if (!res.data.data) {
            return router.push('/login')
          }
          state.user = res.data.data
          router.push('/campaigns')
        }).catch(err => {
          router.push('/login')
        })
    },
    logout({ commit, dispatch }, user) {
      auth.delete('logout', user)
        .then(res => {
          router.push('/')
        }).catch(handleError)
    },
    clearError() {
      state.error = {}
    },
    //API Calls for DND5E
    getMonsters({ commit, dispatch }) {
      dnd('/monsters')
        .then(res => {
          commit('setMonsters', res.data)
        })
        .catch(handleError)
    },
    getSpells({ commit, dispatch }) {
      dnd('/spells')
        .then(res => {
          commit('setSpells', res.data)
        })
        .catch(handleError)
    },
    getEquipment({ commit, dispatch }) {
      dnd('/equipment')
        .then(res => {
          commit('setEquipment', res.data)
        })
        .catch(handleError)
    },
    getItem({ commit, dispatch }, url) {
      dndblank(url)
        .then(res => {
          commit('setActiveEquipment', res.data)
        })
        .catch(handleError)
    },
    getMonster({ commit, dispatch }, url) {
      dndblank(url)
        .then(res => {
          commit('setActiveMonster', res.data)
        })
        .catch(handleError)
    },
    getSpell({ commit, dispatch }, url) {
      dndblank(url)
        .then(res => {
          commit('setActiveSpell', res.data)
        })
        .catch(handleError)
    }
  }
})