import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import BookList from './components/BookList';
import PlusModal from './components/PlusModal';
import Authentification from './components/Authentification';
import { Route, Routes } from 'react-router-dom';
import ModalBook from './components/ModalBook';
import Favourite from './components/Favourite';
import { useState } from 'react';

function App() {

  const [openfavoris, setopenfavoris] = useState(false);
  const [openPlusModal, setopenPlusModal] = useState(false);
  const [searchinput, setsearchinput] = useState(false);
  const [booktosearch, setbooktosearch] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/booklist' element={<BookList openfavoris={openfavoris} setopenfavoris={setopenfavoris} openPlusModal={openPlusModal} setopenPlusModal={setopenPlusModal} searchinput={searchinput} setsearchinput={setsearchinput} booktosearch={booktosearch} setbooktosearch={setbooktosearch} />} />
        <Route path='/bookdescription' element={<ModalBook />} />
        <Route path='/addbook' element={<PlusModal />} />
        <Route path='/authentification' element={<Authentification />} />
        <Route path='/favourite' element={<Favourite openfavoris={openfavoris} setopenfavoris={setopenfavoris} openPlusModal={openPlusModal} setopenPlusModal={setopenPlusModal} searchinput={searchinput} setsearchinput={setsearchinput} booktosearch={booktosearch} setbooktosearch={setbooktosearch} />} />
      </Routes>
    </div>
  );
}

export default App;
