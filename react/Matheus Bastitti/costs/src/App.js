import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layouts/Container';

function App() {
  return (
    <Router>
      <div>
        <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </ul>
      </div>

      
        <Container customClass='minHeight'>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>

          <Route exact path='/company' element={<Company></Company>}></Route>

          <Route exact path='/contact' element={<Contact></Contact>}></Route>

          <Route exact path='/newproject' element={<NewProject></NewProject>}></Route>
          </Routes>
        </Container>
        
      

      <p>Footer</p>
    </Router>
  );
}

export default App;
