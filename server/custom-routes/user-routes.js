let Campaigns = require('../models/campaign')

export default {
  userBoards: {
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
    path: '/sharedCampaigns',
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