import './App.scss';
import ListeAnnonce from 'pages/annonce/liste-annonce';
import Fiche from 'pages/annonce/fiche-annonce';
import { Routes, Route } from "react-router-dom";
import Layout from 'pages/front-office/layout';
import Message from 'pages/message/message';
import Login from 'pages/login/login-back-office.jsx';
import useToken from 'hooks/useToken.js';

function App() {

  const {token, setToken} = useToken();

  
  if (token) {
    return <Login setToken={setToken} />;
  }

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListeAnnonce />} />
          <Route path='/fiche' element={<Fiche />} />
          <Route path='/message' element={<Message />} />
        </Route>
      </Routes>
  );
}

export default App;
