import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Menu from '../../Menu-json-Api/Menu.json';
import './Header.css';
// import company from '../../Company_details/Company.json'
// import { Image } from 'react-bootstrap';

// internal components
// function Internal() {
//   return(
//     <>
//       <h1>Hello Internal components.</h1>
//     </>
//   )
// }

function Header() {
  return (
    <>
    <Navbar expand="md" className="py-1">
      <Container fluid>
        <Navbar.Brand href="#" className='d-flex'>
          <Link to="/"><img src="logo192.png" height="40px" width="40px" alt="logo" /></Link>
          <Link to="/version" className='nav-link version'>v18.3.1</Link>
        </Navbar.Brand>
          {/* <Link to="/" className='navbar-brand text-white'>
            <Image src={company.logo} width="44px"></Image>
            {company.name}
          </Link> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='w-100'>
          <Nav className="my-2 my-lg-0 mx-0 w-100" navbarScroll >
            <Form >
              <input type="search" placeholder="Search" className="form-control w-100 rounded-5" aria-label="Search" />
            </Form>
            {/* <Link to="/link" className='nav-link'>Learn</Link>
            <Link to="/link" className='nav-link'>Reference</Link>
            <Link to="/link" className='nav-link'>Community</Link>
            <Link to="/link" className='nav-link'>Blog</Link>
            <Link to="/link" className='nav-link i'>b</Link>
            <Link to="/link" className='nav-link i'>b</Link>
            <Link to="/link" className='nav-link i'>b</Link> */}
            {
              Menu.map((item, index) =>{
                return <Link to={item.link} key={index} className='nav-link'>{ item.label }</Link>
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <Internal /> */}
    </>
  )
}

export default Header