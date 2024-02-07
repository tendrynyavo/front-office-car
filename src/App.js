import './App.scss';
import ListeAnnonce from 'pages/annonce/liste-annonce';
import Header from 'components/header/header';
import Fiche from './pages/annonce/fiche-annonce';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Fiche /> */}
      <ListeAnnonce />
    </div>
  );
}

export default App;
