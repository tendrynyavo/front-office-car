import Radio from "./radio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Input from "../form/input-form";

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
                <div className="sidebar-intervalle">
                    <div className ='input'>
                        <div className='input__label'>
                            <label>{'Minimum'}</label>
                        </div>
                        <input 
                            className='input__value' 
                            type={'text'}
                            name={min}
                            value = {inputValues[min]} 
                            onChange={handleChangeIntervalle} 
                        />
                    </div>
                    <div className ='input'>
                        <div className='input__label'>
                            <label>{'Maximum'}</label>
                        </div>
                        <input 
                            className='input__value' 
                            type={'text'}
                            name={max}
                            value = {inputValues[max]} 
                            onChange={handleChangeIntervalle} 
                        />
                    </div>
                </div>
            </div>
        </>
    );
  };
  
export default Intervalle;