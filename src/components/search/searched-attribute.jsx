import Radio from "./radio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Attribut = ({ handleChange, title, data, name }) => {
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

                {data.map((input, index) => {
                    return(
                        <Radio
                            key={index}
                            handleChange={handleChange} 
                            value={ input.id }
                            title={ input.nom }
                            name={ name }
                            {...(input.nom && { color: input.nom })}
                        />
                    )
                })}
                
            </div>
        </>
    );
  };
  
export default Attribut;