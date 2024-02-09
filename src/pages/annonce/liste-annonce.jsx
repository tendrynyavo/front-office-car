import Card from 'components/card/card.jsx';
import Sidebar from '../sidebar/sidebar';
import { useEffect, useState } from "react";

const ListeAnnonce = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCategoryname, setSelectedCategoryname] = useState(null);
    const [inputValues, setInputValues] = useState({
        prixMin: '',
        prixMax: '',
        anneeMin: '',
        anneeMax: '',
        kilometrageMin: '',
        kilometrageMax: ''
      });

    const handleChange = (event) => {  
        setSelectedCategory(event.target.value);
        setSelectedCategoryname(event.target.name);
    };

    const handleChangeIntervalle = (event) => {
        const { name, value } = event.target;
        setInputValues(prevValues => ({
          ...prevValues,
          [name]: value
        }));

        // console.log(`Name: ${name}, Value: ${value}`);
    }; 
    
    // valeur mise a jour
    useEffect(() => {
        console.log(inputValues);
    }, [inputValues]);
    

    function filteredData(selected) {
    
        if (selected) {
            console.log(selected);
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

            <Sidebar handleChange={handleChange} handleChangeIntervalle={handleChangeIntervalle} inputValues={inputValues} />
            
            <div className='annonce'>
                
                <div className="annonce__annonce-grid">
                    <Card 
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
                    />
                </div>
            </div>
        </div>
    );
}

export default ListeAnnonce;