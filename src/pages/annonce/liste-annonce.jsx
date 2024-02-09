import Card from 'components/card/card.jsx';
import Sidebar from '../sidebar/sidebar';
import { useEffect, useState } from "react";
import { getList } from '../../services/crud';
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

    const handleChange = (event) => {  
        setSelectedCategory(event.target.value);
        setSelectedCategoryname(event.target.name);
    };

    // const handleChangeIntervalle = (event) => {
    //     const { name, value } = event.target;
    //     setInputValues(prevValues => ({
    //       ...prevValues,
    //       [name]: value
    //     }));

    //     // console.log(`Name: ${name}, Value: ${value}`);
    // }; 

    const navigate = useNavigate();
    const [annonces , setAnnonces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAnnouncement = () => {
        let liste = "annonces/list";
        let a = getList( liste );
        a.then( response => {
            setAnnonces(response.data)
        } );
    };

    useEffect( () => {
        setIsLoading(true);
        fetchAnnouncement();
        setIsLoading(false);
    }, [isLoading] );

    // console.log(annonces);

    // {
    //     "idCategorie": "CAT01",
    //     "idBoite": "BDV02"
    // }

    function filteredData(annonces, selected, selectedName) {
        let filteredData = {
            "idCategorie": "",
            "idBoite": "",
        };

        if (selected) {
            console.log(selected);
            if(selectedName === "categorie"){
                filteredData["idCategorie"] = selected;
            } else if(selectedName === "boite"){
                filteredData["idBoite"] = selected;
            }
        //   filteredProducts = filteredProducts.filter(
        //     ({ category, color, company, newPrice, title }) =>
        //       category === selected ||
        //       color === selected ||
        //       company === selected ||
        //       newPrice === selected ||
        //       title === selected
        //   );
        }

        console.log(JSON.stringify(filteredData));
    
        return ""
    }
    
    filteredData(annonces, selectedCategory, selectedCategoryname);
    // const result = filteredData(products, selectedCategory, query);

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