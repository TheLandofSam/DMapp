import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	created: { type: Number, default: Date.now() },
	health: { type: Number },
	maxHealth: { type: Number },
	strength: { type: Number },
	dexterity: { type: Number },
	constitution: { type: Number },
	intelligence: {	type: Number },
	wisdom: { type: Number },
	charisma: { type: Number },
	armor_class: { type: Number},
	speed: { type: String },
	special_abilities: {type: Array},
	actions: { type: Array },
	// Relations
	// encounterId: { type: ObjectId, ref: models.encounter.name, required: true },
	campaignId: { type: ObjectId, ref: models.campaign.name, required: true}
});

module.exports = mongoose.model(models.player.name, schema);