/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar({ user }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>📚 Simply Books 📚</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Books</Nav.Link>
            </Link>
            <Link passHref href="/authors">
              <Nav.Link>Authors</Nav.Link>
            </Link>
            <Link passHref href="/author/new">
              <Nav.Link>{user.displayName}</Nav.Link>
            </Link>
            <img
              src={user.photoURL}
              alt="mypic"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
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
