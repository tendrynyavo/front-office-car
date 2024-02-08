const BulleMessage = ({message, date, user}) => {
    
    const color = (user) ? 'white' : '#f6c951';
    const font = (user) ? 'black' : 'white';
    const position = (user) ? 'end' : 'start';

    return (
        <div 
            className="row"
            style={{
                justifyContent: `flex-${position}`,
            }}
        >
            <div 
                className="bulle-message"
                style={{
                    backgroundColor: color,
                    color: font
                }}
            >
                <div className="bulle-message__body">
                    { message }
                </div>
                <div className="bulle-message__date">
                    { date }
                </div>
            </div>
        </div>
    );
}

export default BulleMessage;