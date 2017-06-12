let Campaigns = require('../models/campaign')
let Encounters= require('../models/encounter')
let Players = require('../models/player')

export default {
  getEncountersByCampaignId: {
    path: '/campaigns/:campaignId/encounters',
    reqType: 'get',
    method(req, res, next) {
      let action = 'return campaign and associated encounters'
      Campaigns.findById(req.params.campaignId)
        .then(campaign => {
          Encounters.find({ campaignId: req.params.campaignId })
            .then(encounters => {
              campaign.encounters = encounters
              res.send(handleResponse(action, campaign.encounters))
            })
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
    getPlayersByCampaignId: {
    path: '/campaigns/:campaignId/players',
    reqType: 'get',
    method(req, res, next) {
      let action = 'return campaign and associated players'
      Campaigns.findById(req.params.campaignId)
        .then(campaign => {
          Players.find({ campaignId: req.params.campaignId })
            .then(players => {
              campaign.players = players
              res.send(handleResponse(action, campaign.players))
            })
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },

}

function handleResponse(action, data, error) {
  var response = {
    action: action,
    data: data
  }
  if (error) {
    response.error = error
  }
  return response
}