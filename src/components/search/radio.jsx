const Radio = ({ handleChange, value, title, name, color }) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="sidebar-checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
export default Radio;
  