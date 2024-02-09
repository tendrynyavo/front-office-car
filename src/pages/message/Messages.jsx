import BulleMessage from '../../components/message/Bulles';
import UserNotification from '../../components/message/Users';
import Input from '../../components/form/Input-forms';

const Message = () => {
    return (
        <div className="conversation">
            <div className="conversation__list">
                <div className='conversation__list__title'>
                    Discussions
                </div>
                <div className='conversation__list__users'>
                    <UserNotification 
                        user={'Tendry Ny Avo'} 
                        number={4} 
                        duration={'2 min'}
                    />
                    <UserNotification 
                        user={'Rüth'} 
                        number={2} 
                        duration={'2 days'}
                    />
                    <UserNotification 
                        user={'Layah'} 
                        number={2} 
                        duration={'2 weeks'}
                    />
                </div>
            </div>

            <div className="conversation__message">
                <div className='conversation__message__user'>
                    Tendry Ny Avo
                </div>
                <div className='conversation__message__bubble'>
                    <BulleMessage message={'Hello Tendry Ny Avo'} date={'02/04/2004'} user={true} />
                    <BulleMessage message={'Hello Tendry Ny Avo'} date={'02/04/2004'} />
                    <BulleMessage message={'Hello Tendry Ny Avo'} date={'02/04/2004'} />
                    <BulleMessage message={'Hello Tendry Ny Avo'} date={'02/04/2004'} user={true} />
                    <BulleMessage message={'Hello Tendry Ny Avo'} date={'02/04/2004'} />
                    <BulleMessage message={'Hello Tendry Ny Avo'} date={'02/04/2004'} />
                    <BulleMessage message={'Hello Tendry Ny Avo'} date={'02/04/2004'} user={true} />
                    <BulleMessage message={'Hello Tendry Ny Avo'} date={'02/04/2004'} user={true} />
                    <BulleMessage message={'Hello Tendry Ny Avo'} date={'02/04/2004'} />
                </div>
                <div className='conversation__message__input'>
                    <Input type={'text'} placeholder={'Ecrivez un message ici...'} />
                </div>
            </div>
        </div>
    );
}

export default Message;