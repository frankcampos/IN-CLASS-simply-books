/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';

export default function ViewAuthor() {
  const [authorBooks, setAuthorBooks] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then((response) => {
      if (response && Array.isArray(response.books)) {
        setAuthorBooks(response.books);
      } else {
        console.error('Unexpected response structure:', response);
      }
    });
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      {authorBooks.map((book) => (
        <div key={book.id} className="card m-2" style={{ width: '18rem' }}>
          <img src={book.image} alt={book.title} className="card-img-top" style={{ width: '100%' }} />
          <div className="card-body text-grey">
            <h5 className="card-title">
              {book.title} by {book.authorObject?.first_name} {book.authorObject?.last_name}
              {book.authorObject?.favorite ? ' 🤍' : ''}
            </h5>
            <p className="card-text">{book.description || ''}</p>
            <p>{book.sale ? `🏷️ Sale $${book.price}` : `$${book.price}`}</p>
            <a href={`mailto:${book.authorObject?.email}`} className="btn btn-primary">
              Contact Author
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
