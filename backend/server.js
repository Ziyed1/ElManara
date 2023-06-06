require('dotenv').config()

const express = require('express') // initialisation express
const mongoose = require('mongoose') // DB
const reservationRoutes = require('./routes/reservations') // Importe les routes de reservations

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

// connection DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Ecoute du port
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    });

