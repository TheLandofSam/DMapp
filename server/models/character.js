import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	created: { type: Number, default: Date.now() },
	health: { type: Number },
	maxHealth: { type: Number },
	// Relations
	encounterId: { type: ObjectId, ref: models.encounter.name, required: true },
	strength: { type: Number },
	dexterity: { type: Number },
	constitution: { type: Number },
	intelligence: {	type: Number },
	wisdom: { type: Number },
	charisma: { type: Number },
	armor_class: { type: Number},
	speed: { type: String },
	special_abilities: {type: Array},
	actions: { type: Array }
});

module.exports = mongoose.model(models.character.name, schema);