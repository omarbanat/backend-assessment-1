const mongoose = require('mongoose')

const Schema = mongoose.Schema

const memesterSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    memeposter: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    },

}, { timestamps: true })

//Workout is singular because it is going to pluralize this to create a workout collection for us automatically
//(model,schema)
module.exports = mongoose.model('Memester', memesterSchema)