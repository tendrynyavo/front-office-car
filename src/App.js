import './App.scss';
import ListeAnnonce from './pages/annonce/Liste-annonces';
import Fiche from './pages/annonce/Fiche-annonces';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/front-office/Layouts';
import Message from './pages/message/Messages';
import Login from './pages/login/Login-back-offices';
import useToken from './hooks/useToken';

function App() {

  const {token, setToken} = useToken();
  
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
      <Routes>
        <Route path="/" element={<Layout setToken={setToken} />}>
          <Route index element={<ListeAnnonce />} />
          <Route path='/fiche/:id' element={<Fiche />} />
          <Route path='/message/:id' element={<Message />} />
        </Route>
      </Routes>
  );
}

export default App;
