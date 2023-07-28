require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors')
const Users = require('./models/user');

const router = express.Router();
const app = express();

mongoose.connect(process.env.MONGO_URI)
   .then(() => {
     // Ecoute port 4000
     app.listen(4000, () => {
        console.log('Connect to db & listening on port 4000');
     });
   })
   .catch((error) => {
    console.log(error);
   });

// Middleware pour permettre le parsing des données JSON dans les requêtes
app.use(express.json());
app.use(cors())

// routes
router.get('/', (req,res) => {
    res.json({mssg: 'Bienvenue'})
});

// Récupérer tous les utilisateurs
router.get('/users', async (req, res) => {
    try {
      const users = await Users.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    }
});

// S'inscrire
router.post('/inscription', async (req, res) => {
    const { firstName, lastName, email, password, phone, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Users({
      firstName,
      lastName,
      email,
      phone,
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

// Monter le routeur sur l'application
app.use('/api', router);
