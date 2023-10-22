const express = require('express')
const Memester = require('../models/memeModel')
const mongoose = require('mongoose')
const {
    getMemesters,
    getMemester,
    createMemester,
    deleteMemester,
    updateMemester
} = require('../controllers/memesterController')

const router = express.Router()

// GET all memesters
router.get('/', getMemesters)

// GET a single Memester
router.get('/:id', getMemester)

// POST a new Memester
router.post('/', createMemester)

// DELETE a Memester
router.delete('/:id', deleteMemester)

// UPDATE a Memester
router.patch('/:id', updateMemester)

module.exports = router