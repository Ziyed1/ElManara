import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Inscription from './pages/inscription'
import Connexion from './pages/connexion'

function App() {
  return (
    <Router>
        <div className="App">
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
              path='/connexion'
              element={<Connexion/>}
            />
            <Route 
              path='/inscription'
              element={<Inscription/>}
            />
          </Routes>

        </div>
    </div>
    </Router>
    
  );
}

export default App;
