import axios from 'axios';
import moment from "moment";

export const getUsersMessage = () => {
    let headers = {
        Authorization : `Bearer ${sessionStorage.getItem('token')}`
    };
    return axios.request({
        headers : headers,
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/api/users/listeDiscussions`
    });
}

export const getMessages = (receveur) => {
    let data = {
        "idReceveur" : receveur
    }
    let headers = {
        Authorization : `Bearer ${sessionStorage.getItem('token')}`
    };
    return axios.request({
        headers : headers,
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/api/users/discussions`,
        data: data
    });
}

export const envoyer = (receveur, message) => {
    const data = {
        'idReceveur' : receveur,
        'message' : message,
        'dateHeureEnvoie' : moment().format("YYYY-MM-DDThh:mm:ss"),
    };
    let headers = {
        Authorization : `Bearer ${sessionStorage.getItem('token')}`
    };
    console.log(headers);
    return axios.request({
        headers : headers,
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/api/users/messagerie`,
        data: data
    });
}