import { models } from '../config/constants'
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  created: { type: Number, default: Date.now() },
  creatorId: {type: ObjectId, ref: models.user.name, required: true},
  collaborators: [{type: ObjectId, ref: models.user.name}],
  encounters: [{type: ObjectId, ref: models.encounter.name}],
  players: [{type: ObjectId, ref: models.player.name}]
});

module.exports = mongoose.model(models.campaign.name, schema);