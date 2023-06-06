const express = require('express')

const router = express.Router()

// GET all reservations
router.get('/', (req, res) => {
    res.json({mssg: 'GET all reservations'})
})

// GET a single reservation
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single reservation'})
})

// POST a new reservation
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new reservation'})
})

// DELETE a reservation
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a reservation'})
})

// UPDATE a reservation
router.patch('/', (req, res) => {
    res.json({mssg: 'UPDATE a reservation'})
})

module.exports = router