import React, { useEffect, useState } from 'react';
import OneBook from './OneBook';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faUser, faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import PlusModal from './PlusModal';
import Favourite from './Favourite';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const BookList = ({openfavoris, setopenfavoris, openPlusModal, setopenPlusModal, searchinput, setsearchinput, booktosearch, setbooktosearch}) => {
    const navigate = useNavigate()
    const [books, setbooks] = useState([]);


    useEffect(() => {
        // Function to fetch the book data
        const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3009/list');
            setbooks(response.data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchBooks(); // Call the function to fetch book data
    }, []);

  // Function to handle liking/unliking a book
  const handleLike = async (bookId) => {
    try {
      const response = await axios.post('http://localhost:3009/books/like', { bookId });

      if (response.status === 200) {
        // Update the liked status of the book in your state
        const updatedBooks = books.map((book) => {
          if (book._id === bookId) {
            return { ...book, liked: response.data.liked };
          }
          return book;
        });

        setbooks(updatedBooks); // Update the state with the updated list of books
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="booklist">
           <section className='navbar'>
            <Navbar openfavoris={openfavoris} setopenfavoris={setopenfavoris} openPlusModal={openPlusModal} setopenPlusModal={setopenPlusModal}
                searchinput={searchinput} setsearchinput={setsearchinput} booktosearch={booktosearch} setbooktosearch={setbooktosearch} />
            </section>
      <section className="list">
        {books
          .filter((element) => element.title.toUpperCase().includes(booktosearch.toUpperCase()))
          .map((element) => (
            <div key={element._id}>
              <OneBook element={element}  handleLike={handleLike} />
            </div>
          ))}
      </section>
    </div>
  );
};

export default BookList;
