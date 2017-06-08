let Campaigns = require('../models/campaign')

export default {
  userCampaigns: {
    path: '/usercampaigns',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Campaigns'
      Campaigns.find({creatorId: req.session.uid})
        .then(campaigns => {
          res.send(handleResponse(action, campaigns))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  sharedCampaigns: {
    path: '/sharedcampaigns',
    reqType: 'get',
    method(req, res, next){
      Campaigns.find({collaborators: { $in: req.session.uid}})
        .then(boards => {
          res.send(handleResponse(action, campaigns))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
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