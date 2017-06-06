const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  campaign: {
    name: 'Campaign',
    endpoint: 'campaigns',
    useCustomRoutes: true
  },
  
  encounter: {
    name: 'Encounter',
    endpoint: 'encounters'
  },
  player: {
    name: 'Player',
    endpoint: 'players'
  },
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  }
}


export  {
  actions,
  models
}