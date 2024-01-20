/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { booksOnSale } from '../../api/bookData';
import { useAuth } from '../../utils/context/authContext';
import BookCard from '../../components/BookCard';

function Home() {
  // TODO: Set a state for books
  const [books, setBooks] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getAllTheBooks = () => {
    booksOnSale(user.uid).then(setBooks);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTheBooks();
  }, []);

  return (
    <div className="d-flex flex-wrap" style={{ justifyContent: 'space-evenly' }}>
      {/* TODO: map over books here using BookCard component */}
      {books.map((book) => (
        <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAllTheBooks} />
      ))}
    </div>

  );
}

export default Home;
