const UserNotification = ({user, number, duration}) => {
    return (
        <div className="notification">
            <div className="notification__user">
                { user }
            </div>
            <div className="notification__number">
                <p>{ duration }</p>
                <span>{ number }</span>
            </div>
        </div>
    );
}

export default UserNotification;