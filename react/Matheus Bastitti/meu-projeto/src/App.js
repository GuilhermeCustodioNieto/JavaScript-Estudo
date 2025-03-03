import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {

  return (
    <div>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/empresa' element={<Empresa />}></Route>
            <Route path='/contato' element={<Contato />}></Route>
          </Routes>

        
      </Router>

      <Footer></Footer>
    </div>

    
  );
}

export default App;
