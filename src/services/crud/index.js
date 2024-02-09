import axios from 'axios';

// console.log(`Bearer ${sessionStorage.getItem('token')}`);

export const getList = (modele) => {

    return axios.request({
        method : "GET",
        url: `${process.env.REACT_APP_API_URL}/api/${modele}`
    });
}

export const ajouter = (data, modele) => {
    console.log("data: "+data);
    return axios.request({
        headers: {   
            'Content-Type': 'application/json' // Assurez-vous que le Content-Type est correct
        },
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/api/${modele}`,
        data: data
    });
}

// export const executeRequest = ( method, modele, data ) => {
//     let headers = {
//         Authorization : `Bearer ${sessionStorage.getItem('token')}`
//     };
//     return axios.request({
//         headers: headers,
//         method: method,
//         url: `${process.env.REACT_APP_API_URL}/api/${modele}`,
//         data: data
//     });
// };
