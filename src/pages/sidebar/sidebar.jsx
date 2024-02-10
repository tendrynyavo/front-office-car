import { useEffect, useState } from "react";
import Attribut from "../../components/search/searched-attribute";
import Intervalle from "../../components/search/searched-intervalle";
import { getList } from "../../services/crud";

const Sidebar = ({handleChange, handleChangeIntervalle, inputValues}) => {

    const [categories , setCategories] = useState([]);
    const [modeles , setModeles] = useState([]);
    const [moteurs , setMoteurs] = useState([]);
    const [boites , setBoites] = useState([]);
    const [couleurs , setCouleurs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCategories = () => {
        let liste = "categories";
        let a = getList( liste );
        a.then( response => {
            setCategories(response.data)
        } );
    };

    const fetchModeles = () => {
        let liste = "modeles";
        let a = getList( liste );
        a.then( response => {
            setModeles(response.data.data.modeles)
        } );
    };

    const fetchMoteurs = () => {
        let liste = "moteurs";
        let a = getList( liste );
        a.then( response => {
            setMoteurs(response.data)
        } );
    };

    const fetchBoites = () => {
        let liste = "vitesses";
        let a = getList( liste );
        a.then( response => {
            setBoites(response.data)
        } );
    };

    const fetchCouleurs = () => {
        let liste = "couleurs";
        let a = getList( liste );
        a.then( response => {
            setCouleurs(response.data)
        } );
    };


    useEffect( () => {
        setIsLoading(true);
        fetchCategories();
        fetchModeles();
        fetchMoteurs();
        fetchBoites();
        fetchCouleurs();
        setIsLoading(false);
    }, [isLoading] );


    // const couleurs = [
    //     {
    //         "value" : "Couleur 1",
    //         "title" : "Couleur 1",
    //         "name" : "test",
    //         "color" : "red"
    //     },
    //     {
    //         "value" : "Couleur 2",
    //         "title" : "Couleur 2",
    //         "name" : "test",
    //         "color" : "blue" 
    //     }
    // ];

  return (
    <>
        <section className="sidebar">
            <Attribut handleChange={handleChange} title="Categorie" data={categories} name={"categorie"} />
            <Attribut handleChange={handleChange} title="Modele" data={modeles} name={"modele"}/>
            <Attribut handleChange={handleChange} title="Moteur" data={moteurs} name={"moteur"}/>
            <Attribut handleChange={handleChange} title="Boite" data={boites} name={"boite"}/>
            <Intervalle handleChangeIntervalle={inputValues[1]} title="Annee" min={inputValues[0][0]} max={inputValues[0][1]} inputValues={inputValues[0]} />
            {/* <Intervalle handleChangeIntervalle={inputValues[3]} title="Kilometrage" min={inputValues[2][0]} max={inputValues[2][1]} inputValues={inputValues[2]} /> */}
            {/* <Intervalle handleChangeIntervalle={handleChangeIntervalle} title="Kilometrage" min={'kilometrageMin'} max={'kilometrageMax'} inputValues={inputValues} /> */}
            <Attribut handleChange={handleChange} title="Couleur" data={couleurs} name={"couleur"}/>
        </section>
    </>
  );
};

export default Sidebar;
