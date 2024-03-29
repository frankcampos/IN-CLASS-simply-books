import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleAuthor } from '../api/authorData';
import { deleteAuthorBooks } from '../api/mergedData';

function AuthorCard({ authorObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE Author AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisAuthor = () => {
    if (window.confirm(`Dou you want to Delete ${authorObj.first_name} ${authorObj.last_name}?`)) {
      deleteSingleAuthor(authorObj.firebaseKey).then(() => deleteAuthorBooks(authorObj.firebaseKey)).then(() => onUpdate());
    }
  };
  return (
    <Card
      style={{
        width: '18rem',
        margin: '10px',
        background: 'grey',
        boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)',
      }}
    >
      <Card.Img
        variant="top"
        src={authorObj.image}
        alt={authorObj.email}
        style={{
          height: '100%', width: '100%', boxShadow: '0px 1rem 1.5rem rgba(0, 0, 0, 0.5)', objectFit: 'contain',
        }}
      />
      <Card.Body>
        <Card.Title>{authorObj.first_name}</Card.Title>
        <p className="card-text bold">
          {authorObj.email && (
            <span>
              {authorObj.last_name}
              <br />
            </span>
          )}{' '}
          {authorObj.email}
        </p>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        <Link href={`/author/${authorObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2" style={{ boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)' }}>
            VIEW
          </Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
          <Button variant="info" style={{ boxShadow: '0px 1rem 1.5rem rgba(0, 0, 0, 0.5)' }}>
            EDIT
          </Button>
        </Link>
        <Button variant="danger" style={{ boxShadow: '0px 1rem 1.5rem rgba(0, 0, 0, 0.5)' }} onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    image: PropTypes.string,
    email: PropTypes.string,
    last_name: PropTypes.string,
    first_name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AuthorCard;
