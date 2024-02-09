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
    
    // valeur mise a jour
    // useEffect(() => {
    //     console.log(anneeValues);
    // }, [anneeValues]);
    

    console.log(annonces);

    function filteredData(selected) {
    
        if (selected) {
            // console.log(selected);
        //   filteredProducts = filteredProducts.filter(
        //     ({ category, color, company, newPrice, title }) =>
        //       category === selected ||
        //       color === selected ||
        //       company === selected ||
        //       newPrice === selected ||
        //       title === selected
        //   );
        }
    
        return ""
    }
    
    filteredData(selectedCategory);
    // const result = filteredData(products, selectedCategory, query);

    return (
        <div className='container'>

            <Sidebar handleChange={handleChange} handleChangeIntervalle={combinedTable} inputValues={combinedTable} />
            
            <div className='annonce'>
                
                <div className="annonce__annonce-grid">

                {annonces.map((input) => {
                    return(
                        <Card 
                        image={'peakpx.jpg'}
                        modele={ input.voiture.modele.nom } 
                        marque={ 'Mercedes-benz' } 
                        categorie={ input.voiture.categorie.nom }
                        lieu={ input.lieu.nom } 
                        date={ input.date }
                        prix={ input.prix }
                    />
                    )
                })}
                    {/* <Card 
                        image={'peakpx.jpg'}
                        modele={'Maybach Virgil Abloh Edition'} 
                        marque={'Mercedes-benz'} 
                        categorie={'SUV'}
                        lieu={'Ambohipo'} 
                        date={'02/04/2024'}
                        prix={'1.000.000'}
                    />

                    <Card 
                        image={'cybertruck-debut.jpeg'}
                        modele={'Cybertrunk'} 
                        marque={'Tesla'} 
                        categorie={'4x4'}
                        lieu={'Ambohipo'} 
                        date={'02/04/2024'}
                        prix={'100.000.000'}
                    />
                    <Card 
                        image={'Clint419.jpg'}
                        modele={'Cybertrunk'} 
                        marque={'Jeep'} 
                        categorie={'SUV'}
                        lieu={'Ambohipo'} 
                        date={'02/04/2024'}
                        prix={'150.000.000'}
                    />
                    <Card 
                        image={'cybertruck-debut.jpeg'}
                        modele={'Cybertrunk'} 
                        marque={'Tesla'} 
                        categorie={'4x4'}
                        lieu={'Ambohipo'} 
                        date={'02/04/2024'}
                        prix={'100.000.000'}
                    />
                    <Card 
                        image={'Clint419.jpg'}
                        modele={'Cybertrunk'} 
                        marque={'Tesla'} 
                        categorie={'4x4'}
                        lieu={'Ambohipo'} 
                        date={'02/04/2024'}
                        prix={'100.000.000'}
                    />
                    <Card 
                        image={'cybertruck-debut.jpeg'}
                        modele={'Cybertrunk'} 
                        marque={'Tesla'} 
                        categorie={'4x4'}
                        lieu={'Ambohipo'} 
                        date={'02/04/2024'}
                        prix={'100.000.000'}
                    />
                    <Card 
                        image={'cybertruck-debut.jpeg'}
                        modele={'Cybertrunk'} 
                        marque={'Tesla'} 
                        categorie={'4x4'}
                        lieu={'Ambohipo'} 
                        date={'02/04/2024'}
                        prix={'100.000.000'}
                    />
                    <Card 
                        image={'cybertruck-debut.jpeg'}
                        modele={'Cybertrunk'} 
                        marque={'Tesla'} 
                        categorie={'4x4'}
                        lieu={'Ambohipo'} 
                        date={'02/04/2024'}
                        prix={'100.000.000'}
                    />
                    <Card 
                        image={'cybertruck-debut.jpeg'}
                        modele={'Cybertrunk'} 
                        marque={'Tesla'} 
                        categorie={'4x4'}
                        lieu={'Ambohipo'} 
                        date={'02/04/2024'}
                        prix={'100.000.000'}
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default ListeAnnonce;