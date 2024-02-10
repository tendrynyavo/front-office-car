const UserNotification = ({lastMessage, user, number, duration}) => {
    return (
        <div className="notification">
            <div className="notification__user">
                { user }
                <div className="notification__user__message">
                    { lastMessage }
                </div>
            </div>
            <div className="notification__number">
                <p>{ duration }</p>
                <span>{ number }</span>
            </div>
        </div>
    );
}

export default UserNotification;