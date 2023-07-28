import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Container, Typography, TextField, Button, Grid, Paper, FormControlLabel, Checkbox } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';


const LoginForm = () => {
  const [notification, setNotification] = useState(null);
  const [firstName, setFirstname] = useState('');
  const [lastName,  setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => { 

    e.preventDefault()

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      role: role
    };

    try {
      const response = await axios.post('http://localhost:4000/api/inscription', newUser);
      console.log(response.data);
      
      setFirstname('');
      setLastname('');
      setPhone('');
      setEmail('');
      setPassword('');
      setRole('');

      setNotification("Produit ajouté au panier");
      navigate('/connexion')
    
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <LockIcon sx={{ fontSize: 48, mb: 2 }} />
        <Typography  variant="h5" align="center" gutterBottom>
          Inscription
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Prénom"
            name="firstName"
            onChange={(e) => setFirstname(e.target.value)}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Nom"
            name="lastName"
            onChange={(e) => setLastname(e.target.value)}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Téléphone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => setRole(e.target.checked)}
                name="isAdmin"
              />
            }
            label="Rôle Admin"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            S'inscrire
          </Button>
        </form>
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            <Link to="/connexion" style={{ textDecoration: 'none' }}>
              <Button href="/connexion" variant="text" color="primary">
                Revenir à la page de connexion
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginForm;
