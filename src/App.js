import './App.scss';
import ListeAnnonce from './pages/annonce/Liste-annonce.jsx';
import Fiche from './pages/annonce/Fiche-annonce.jsx';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/front-office/Layout.jsx';
import Message from './pages/message/Message.jsx';
import Login from './pages/login/Login-back-office.jsx';
import useToken from './hooks/useToken.js';

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
