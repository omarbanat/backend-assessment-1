const Memester = require('../models/memeModel')
const mongoose = require('mongoose')

// get all memesters
//we said the model name is memester we search it to get all and reverse count todate
const getMemesters = async (req, res) => {
    const memesters = await Memester.find({}).sort({ createdAt: -1 })
    //respond that status 200 and json 
    res.status(200).json(memesters)
}

// get a single memester
const getMemester = async (req, res) => {
    const { id } = req.params
    //to check if the syntax of the id woks on mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such memester' })
    }

    const memester = await Memester.findById(id)

    if (!memester) {
        return res.status(404).json({ error: 'No such memester' })
    }

    res.status(200).json(memester)
}

// create a new memester
const createMemester = async (req, res) => {
    const { title, memeposter, caption, imageurl } = req.body

    // add to the database
    try {
        const memester = await Memester.create({ title, memeposter, caption, imageurl })
        res.status(200).json(memester)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a memester
const deleteMemester = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such memester' })
    }
    //find the document and delete it where the _id is equal to the id we have
    const memester = await Memester.findOneAndDelete({ _id: id })

    if (!memester) {
        return res.status(400).json({ error: 'No such memester' })
    }

    res.status(200).json(memester)
}

// update a memester
const updateMemester = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such memester' })
    }

    const memester = await Memester.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!memester) {
        return res.status(400).json({ error: 'No such memester' })
    }

    res.status(200).json(memester)
}

module.exports = {
    getMemesters,
    getMemester,
    createMemester,
    deleteMemester,
    updateMemester
}