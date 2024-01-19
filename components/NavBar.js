/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar({ user }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{
        width: '100%',
        padding: '10px',
      }}
    >
      <Container fluid>
        <Link passHref href="/">
          <Navbar.Brand>
            <img src="/no_book.png" alt="No Simple Books" style={{ height: '40px', backgroundColor: 'transparent' }} />
            <img
              src="/fire_icon.png" // Adjust the filename as needed
              alt="Simply Books on Fire"
              style={{
                height: '100px', width: '180px', backgroundColor: 'transparent', marginBottom: '0',
              }}
            />
            <img
              src="/no_book.png"
              alt="No Simple Books"
              style={{
                height: '40px', backgroundColor: 'transparent',
              }}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            {/* Links and other elements */}
            <Link passHref href="/">
              <Nav.Link>Books</Nav.Link>
            </Link>
            <Link passHref href="/authors">
              <Nav.Link>Authors</Nav.Link>
            </Link>
            <Link passHref href="/profile">
              <Nav.Link>{user.displayName}</Nav.Link>
            </Link>
            <img
              src={user.photoURL}
              alt="User profile"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)',
              }}
            />
            {/* Consider using CSS for spacing */}
            <Button type="button" size="lg" className="copy-btn" style={{ alignContent: 'end', margin: '0 10px 0 20px' }} onClick={signOut}>
              SignOut
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
  }).isRequired,
};

// *cleanNavbar
// 1.check almost amazon navbar,
// 1 logo
// 2 All Books
// 3 Books on Sale
// 4 Authors
// 5 Search Book Title
// 6 SIGNOUT (at the end of the navbar)
