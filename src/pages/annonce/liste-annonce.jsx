import Card from 'components/card/card.jsx';
import Sidebar from '../sidebar/sidebar';
import { useEffect, useState } from "react";
import { ajouter, getList } from '../../services/crud';
import { useNavigate } from "react-router-dom";

const anneeMin = 1985;
const anneeMax = 2024;

const kilometrageMin = 0;
const kilometrageMax = 1000000;

const ListeAnnonce = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCategoryname, setSelectedCategoryname] = useState(null);
    const [anneeValues, setAnneeValues] = useState([anneeMin, anneeMax]);
    const [kilometrageValues, setKilometrageValues] = useState([kilometrageMin, kilometrageMax]);

    const combinedTable = [
        anneeValues,
        setAnneeValues,
        kilometrageValues, 
        setKilometrageValues
    ];

    const navigate = useNavigate();
    const [annonces , setAnnonces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filters, setFilters] = useState({});

    const handleChange = (event) => {   
        const { name, value } = event.target;
        let filterKey = name;
        
        if (name === "categorie") {
            filterKey = "idCategorie";
        } else if (name === "boite") {
            filterKey = "idBoite";
        } else if (name === "couleur") {
            filterKey = "idCouleur";
        }
        
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterKey]: value
        }));
    };
    

    const fetchAnnouncementResult = (filter) => {
        let liste = "annonces/search";
        let a = ajouter(filter, liste);
        a.then(response => {
            setAnnonces(response.data);
        });
    };

    const fetchAnnouncement = () => {
        let liste = "annonces/list";
        let a = getList( liste );
        a.then( response => {
            setAnnonces(response.data)
        } );
    };

    useEffect(() => {
        setIsLoading(true);
        const filter = { ...filters }; // Copie des filtres actuels
        console.log("Filtres actuels :", filter);
        if(Object.keys(filter).length >   0){
            fetchAnnouncementResult(filter);
        } else {
            fetchAnnouncement();
        }
        setIsLoading(false);
    }, [filters, isLoading]);
    
    useEffect(() => {
        console.log("Annonces mises à jour:", annonces);
    }, [annonces]);
    
    
    // console.log(annonces);

    return (
        <div className='container'>

            <Sidebar handleChange={handleChange} handleChangeIntervalle={combinedTable} inputValues={combinedTable} />
            
            <div className='annonce'>
                
                <div className="annonce__annonce-grid">

                {annonces.map((one, index) => {

                    // check if object
                    const isVoitureObject = typeof one.voiture === 'object';

                    // check if modele
                    const modele = isVoitureObject && one.voiture.modele ? one.voiture.modele.nom : one.voiture;

                    //check if categorie
                    const categorie = isVoitureObject && one.voiture.categorie ? one.voiture.categorie.nom : '';

                    return (
                        <>
                            <Card  
                                key={index}
                                image={'peakpx.jpg'}
                                modele={modele}
                                marque={one.id + ' Mercedes-benz'}  
                                categorie={categorie}
                                lieu={one.lieu.nom}  
                                date={one.date}
                                prix={one.prix}
                            />
                        </>
                    );
                })}

                </div>
            </div>
        </div>
    );
}

export default ListeAnnonce;