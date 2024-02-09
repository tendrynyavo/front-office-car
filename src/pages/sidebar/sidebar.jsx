import Attribut from "../../components/search/searched-attribute";
import Intervalle from "../../components/search/searched-intervalle";

const Sidebar = ({handleChange, handleChangeIntervalle, inputValues}) => {

    const categories = [
        {
            "value" : "Categorie 1",
            "title" : "Categorie 1",
            "name" : "test" 
        },
        {
            "value" : "Categorie 2",
            "title" : "Categorie 2",
            "name" : "test" 
        }
    ];

    
    const modeles = [
        {
            "value" : "Modele 1",
            "title" : "Modele 1",
            "name" : "test" 
        },
        {
            "value" : "Modele 2",
            "title" : "Modele 2",
            "name" : "test" 
        }
    ];

    const moteurs = [
        {
            "value" : "Moteur 1",
            "title" : "Moteur 1",
            "name" : "test" 
        },
        {
            "value" : "Moteur 2",
            "title" : "Moteur 2",
            "name" : "test" 
        }
    ];

    const boites = [
        {
            "value" : "Boite 1",
            "title" : "Boite 1",
            "name" : "test" 
        },
        {
            "value" : "Boite 2",
            "title" : "Boite 2",
            "name" : "test" 
        }
    ];

    const couleurs = [
        {
            "value" : "Couleur 1",
            "title" : "Couleur 1",
            "name" : "test",
            "color" : "red"
        },
        {
            "value" : "Couleur 2",
            "title" : "Couleur 2",
            "name" : "test",
            "color" : "blue" 
        }
    ];

  return (
    <>
        <section className="sidebar">
            <Attribut handleChange={handleChange} title="Categorie" data={categories} name={"categorie"} />
            <Attribut handleChange={handleChange} title="Modele" data={modeles} name={"modele"}/>
            <Attribut handleChange={handleChange} title="Moteur" data={moteurs} name={"moteur"}/>
            <Attribut handleChange={handleChange} title="Boite" data={boites} name={"boite"}/>
            <Intervalle handleChangeIntervalle={inputValues[1]} title="Annee" min={inputValues[0][0]} max={inputValues[0][1]} inputValues={inputValues[0]} />
            <Intervalle handleChangeIntervalle={inputValues[3]} title="Kilometrage" min={inputValues[2][0]} max={inputValues[2][1]} inputValues={inputValues[2]} />
            {/* <Intervalle handleChangeIntervalle={handleChangeIntervalle} title="Kilometrage" min={'kilometrageMin'} max={'kilometrageMax'} inputValues={inputValues} /> */}
            <Attribut handleChange={handleChange} title="Couleur" data={couleurs} name={"couleur"}/>
        </section>
    </>
  );
};

export default Sidebar;
