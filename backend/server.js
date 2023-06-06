require('dotenv').config()

// initialisation express
const express = require('express')

// Importe les routes de reservations
const reservationRoutes = require('./routes/reservations')

// express app
const app = express()

// middleware
// Le middleware va intéragir entre le serveur et les routes
// Il va prendre les requêtes HTTP et il va faire des opérations dessus avant de les envoyer aux routes
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/reservations', reservationRoutes)

// Ecoute du port
app.listen(process.env.PORT, () => {
    console.log('listening on port ', process.env.PORT)
})