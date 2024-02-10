import './App.scss';
import ListeAnnonce from './pages/annonce/Liste-annonces.jsx';
import Fiche from './pages/annonce/Fiche-annonces.jsx';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/front-office/Layouts.jsx';
import Message from './pages/message/Messages.jsx';
import Login from './pages/login/Login-back-offices.jsx';
import useToken from './hooks/useToken.js';

function App() {

  const {token, setToken} = useToken();

  
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListeAnnonce />} />
          <Route path='/fiche' element={<Fiche />} />
          <Route path='/message/:id' element={<Message />} />
        </Route>
      </Routes>
  );
}

export default App;
