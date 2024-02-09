import Radio from "./radio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Input from "../form/input-form";
import Slider from "react-slider";

const Intervalle = ({ handleChangeIntervalle, title, min, max, inputValues }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <h4 className="sidebar-title" onClick={toggleAccordion}>
                {title}
                <FontAwesomeIcon icon={faChevronDown} className="sidebar-chevron-icon" />    
            </h4>
    
            <div className={`sidebar-accordion-content ${isExpanded ? 'expanded' : ''}`}>
                <div className={"sidebar-intervalle-values"}>{inputValues[0]} - {inputValues[1]}</div>
                <Slider 
                    className="sidebar-intervalle-slider" 
                    value={inputValues} 
                    min={min} 
                    max={max} 
                    onChange={handleChangeIntervalle} 
                />
            </div>
        </>
    );
  };
  
export default Intervalle;