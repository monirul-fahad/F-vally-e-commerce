import React from 'react';
import logo from 'assets/images/fvaly.png';
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { FaRegEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import { BiSearch, BiUser } from 'react-icons/bi';

const Header = () => {
  return (
    <div className="header__component">
      <div className="top-header py-2 bg-light border-bottom">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <FiPhoneCall /> <a href="tel:01879664431">01879664431</a>
            </li>
            <li>
              <FaRegEnvelope />{' '}
              <a href="mail-to:immonirulfahad@gmail.com">
                immonirulfahad@gmail.com
              </a>
            </li>
          </ul>
          <div>
            <BsPhone />
            <a href="#">Save big on our app!</a>
          </div>
        </Container>
      </div>
      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center gap-5 py-3">
            <img className="branding" src={logo} alt="Fvaly" />
            <InputGroup>
              <FormControl
                className="border border-primary"
                placeholder="Search Here.."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <BiSearch className="text-white" />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-3">
              <li>
                <FiShoppingBag />
                {/* <span className="badge bg-primary">{cart.length}</span> */}
              </li>
              <li>
                <BiUser />
              </li>
              <li>
                <FaSignOutAlt />
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">News Feed</Nav.Link>
            <Nav.Link href="#home">Merchant Zone</Nav.Link>
            <Nav.Link href="#home">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
