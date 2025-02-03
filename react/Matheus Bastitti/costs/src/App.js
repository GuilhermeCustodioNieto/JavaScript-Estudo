import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer'
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      
        <Container customClass='minHeight'>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>

          <Route path='/company' element={<Company></Company>}></Route>

          <Route path='/projects' element={<Projects></Projects>}></Route>

          <Route path='/contact' element={<Contact></Contact>}></Route>

          <Route path='/newproject' element={<NewProject></NewProject>}></Route>
          
          <Route path='/projects/:id' element={<Project></Project>}></Route>
          </Routes>
        </Container>
        
      

      <Footer></Footer>
    </Router>
  );
}

export default App;
