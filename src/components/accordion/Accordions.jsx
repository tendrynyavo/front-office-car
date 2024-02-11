const Accordion = ({items, title, id, value, object = false}) => {

    const clone = (obj) => Object.assign({}, obj);

    const renameKey = (object, key, newKey) => {
        const clonedObj = clone(object);
        const targetKey = clonedObj[key];
        delete clonedObj[key];
        clonedObj[newKey] = targetKey;
        return clonedObj;
    };
     
    
    items = items.map((obj) => {
        return renameKey(obj, id, 'key');
    });
    
    items = items.map((obj) => {
        return renameKey(obj, value, 'value');
    });

    console.log(items);
     

    const accordionClick = (e) => {
        const item = e.target;
        const table = item.nextElementSibling;
        if (item.style.transform === '' || item.style.transform === 'rotate(1turn)') {
            item.style.transform = 'rotate(0.5turn)';
            table.style.display = 'block';
        } else {
            item.style.transform = 'rotate(1turn)';
            table.style.display = 'none';
        }
    }

    
    return (
        <div className="accordion detail">
            { title }<span className="material-symbols-outlined" onClick={(e) => accordionClick(e)}>expand_more</span>
            <div 
                className="table"
                style={{
                    display: 'none'
                }}
                >
                <table>
                    {items.map((item) => {
                        const key = (object) ? item.key.nom : item.key;
                        return (
                            <tr>
                                <td>{ key }</td>
                                <td align="right">{ item.value }</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    );
}

export default Accordion;