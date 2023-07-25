import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log(formData);
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <LockIcon sx={{ fontSize: 48, mb: 2 }} />
        <Typography variant="h5" align="center" gutterBottom>
          Inscription
        </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
            fullWidth
            margin="normal"
            label="Prénom"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Nom"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Téléphone"
            name="phone"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
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
