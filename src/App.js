import './App.scss';
import ListeAnnonce from './pages/annonce/Liste-annonces';
import Fiche from './pages/annonce/Fiche-annonces';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/front-office/Layouts';
import Message from './pages/message/Messages';

function App() {

  // const {token, setToken} = useToken();
  
  // if (token) {
  //   return <Login setToken={setToken} />;
  // }

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
