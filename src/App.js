import './App.scss';
import ListeAnnonce from 'pages/annonce/liste-annonce';
import Fiche from 'pages/annonce/fiche-annonce';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from 'pages/front-office/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/annonce' element={<ListeAnnonce />} />
          <Route path='/fiche' element={<Fiche />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
