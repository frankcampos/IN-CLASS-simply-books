import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteBook } from '../api/bookData';

function BookCard({ bookObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisBook = () => {
    if (window.confirm(`Delete ${bookObj.title}?`)) {
      deleteBook(bookObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (

    <div className="mt-5 d-flex flex-wrap" style={{ boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)' }}>
      <Card style={{
        width: '400px', minWidth: '350px', alignContent: 'space-evenly', boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)',
      }}
      >
        <Card.Img
          variant="top"
          src={bookObj.image}
          alt={bookObj.title}
          style={{
            height: '100%', width: '100%', minWidth: '350px', boxShadow: '0px 1rem 1.5rem rgba(0, 0, 0, 0.5)',
          }}
        />
        <Card.Body>
          <Card.Title>{bookObj.title}</Card.Title>
          <p className="card-text bold">
            {bookObj.sale && (
              <span>
                SALE
                <br />
              </span>
            )}{' '}
            ${bookObj.price}
          </p>
          {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
          <Link href={`/book/${bookObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2" style={{ boxShadow: '0px 1rem 1.5rem rgba(0, 0, 0, 0.5)' }}>
              VIEW
            </Button>
          </Link>
          {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
          <Link href={`/book/edit/${bookObj.firebaseKey}`} passHref>
            <Button variant="info" style={{ boxShadow: '0px 1rem 1.5rem rgba(0, 0, 0, 0.5)' }}>EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisBook} className="m-2" style={{ boxShadow: '0px 1rem 1.5rem rgba(0, 0, 0, 0.5)' }}>
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

BookCard.propTypes = {
  bookObj: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    sale: PropTypes.bool,
    price: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default BookCard;
