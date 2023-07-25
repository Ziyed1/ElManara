require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const Users = require('./models/user');
const Reservations = require('./models/reservation')
const Factures = require('./models/facture')

// express app
const app = express()

mongoose.connect(process.env.MONGO_URI)
   .then(() => {
     // Ecoute port 4000
     app.listen(4000, () => {
        console.log('Connect to db & listening on port 4000')
     })
   })
   .catch((error) => {
    console.log(error)
   })

// routes
app.get('/', (req,res) => {
    res.json({mssg: 'Bienvenue'})
})

// Récupérer tous les utilisateurs
app.get('/api/users', async (req, res) => {
    try {
      const users = await Users.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    }
  });
  
  // S'inscrire
  app.post('/api/register', async (req, res) => {
    const { firstName, lastName, email, password, phone, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Users({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });
  
    try {
      const newUsers = await user.save();
      res.status(201).json(newUsers);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  

