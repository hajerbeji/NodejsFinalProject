import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OneBook from './OneBook';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Favourite = ({openfavoris, setopenfavoris, openPlusModal, setopenPlusModal, searchinput, setsearchinput, booktosearch, setbooktosearch}) => {
  const navigate = useNavigate();
  const [favorisss, setfavorisss] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3009/books/liked');
        setfavorisss(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='favouriscomponent'>
        <Navbar openfavoris={openfavoris} setopenfavoris={setopenfavoris} openPlusModal={openPlusModal} setopenPlusModal={setopenPlusModal}
                searchinput={searchinput} setsearchinput={setsearchinput} booktosearch={booktosearch} setbooktosearch={setbooktosearch} />
        <span>
            {favorisss.map((element) => (
            <OneBook key={element.id} element={element} />
        ))}
        </span>
    </div>
  );
};

export default Favourite;
