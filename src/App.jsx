import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Import the Read and Create components
import Read from './components/Read';
import Create from './components/Create';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>

        {/* Navigation bar */}
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Routes for the different pages */}
        <Routes>

          {/* Home page */}
          <Route path='/' element={<Content></Content>}></Route>

          {/* Header page */}
          <Route path='/header' element={<Header></Header>}></Route>

          {/* Read movies page */}
          <Route path='/read' element={<Read></Read>}></Route>

          {/* Create page */}
          <Route path='/create' element={<Create></Create>}></Route>

        </Routes>

        {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}

      </BrowserRouter>

    </div>
  )
}

export default App