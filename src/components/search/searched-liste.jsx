import Radio from "./radio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
    import Input from "../form/input-form";
    import Slider from "react-slider";

const Prix = ({ handleChangeIntervalle, title, min, max, inputValues }) => {
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
                
            </div>
        </>
    );
  };
  
export default Prix;