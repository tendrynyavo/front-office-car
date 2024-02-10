import BulleMessage from '../../components/message/Bulles';
import UserNotification from '../../components/message/Users';
import Input from '../../components/form/Input-forms';
import { useEffect } from 'react';
import { getUsersMessage, getMessages, envoyer } from '../../services/message';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Message = () => {

    const [discussions, setDiscussions] = useState([]);
    const [messages, setMessages] = useState([]);
    const [isRefresh, setIsRefresh] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getUsersMessage()
        .then((response) => {
            console.log(response.data.data.users);
            const array = [];
            for (let index = 0; index < response.data.data.users.length; index++) {
                let json = {
                    "id" : response.data.data.users[index].id,
                    "user" : response.data.data.users[index].nom,
                    "number" : response.data.data.discussions[index].nombreMessagesNonLu,
                    "duration" : response.data.data.discussions[index].dateHeureEnvoie,
                    "lastMessage" : response.data.data.discussions[index].dernierMessage
                }
                array.push(json);
            }
            
            setDiscussions(array);
        });


        getMessages(id)
        .then((response) => {
            setMessages(response.data.data.discussions);
        });
    }, [id, isRefresh]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        envoyer(id, formData.get("message"));
        setIsRefresh(!isRefresh);
        
    };

    return (
        <div className="conversation">
            <div className="conversation__list">
                <div className='conversation__list__title'>
                    Discussions
                </div>
                <div className='conversation__list__users'>
                    {discussions.map((discussion) => {
                        return (
                            <Link to={`/message/${discussion.id}`}>
                                <UserNotification 
                                    user={ discussion.user } 
                                    number={ discussion.number } 
                                    duration={ discussion.duration }
                                    lastMessage={ discussion.lastMessage }
                                />
                            </Link>
                        );    
                    })}
                </div>
            </div>

            <div className="conversation__message">
                <div className='conversation__message__user'>
                    Tendry Ny Avo
                </div>
                <div className='conversation__message__bubble'>
                    {messages.map((message) => {
                        return (
                            <BulleMessage 
                                message={message.message} 
                                date={message.dateHeureEnvoie} 
                                user={(message.idEnvoyeur != id)} 
                            />
                        );
                    })}
                </div>
                <div className='conversation__message__input'>
                    <form onSubmit={handleSubmit}>
                        <Input type={'text'} placeholder={'Ecrivez un message ici...'} name={'message'} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Message;