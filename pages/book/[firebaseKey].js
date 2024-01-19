/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewBookDetails } from '../../api/mergedData';

export default function ViewBook() {
  const [bookDetails, setBookDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewBookDetails(firebaseKey).then(setBookDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap" style={{ width: '100%', justifyContent: 'center' }}>
      <div className="d-flex flex-column" style={{ boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)', width: '33%', minWidth: '350px' }}>
        <img src={bookDetails.image} alt={bookDetails.title} style={{ width: 'auto', boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)' }} />

        <div className="text-white" style={{ width: '100%' }}>
          <h5>
            {bookDetails.title} by {bookDetails.authorObject?.first_name} {bookDetails.authorObject?.last_name}
            {bookDetails.authorObject?.favorite ? ' 🤍' : ''}
          </h5>
          Author Email: <a href={`mailto:${bookDetails.authorObject?.email}`}>{bookDetails.authorObject?.email}</a>
          <p>{bookDetails.description || ''}</p>
          <hr style={{ boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)' }} />
          <p>{bookDetails.sale ? `🏷️ Sale $${bookDetails.price}` : `$${bookDetails.price}`}</p>
        </div>
      </div>
    </div>
  );
}
