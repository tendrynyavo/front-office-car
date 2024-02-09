import axios from 'axios';

// console.log(`Bearer ${sessionStorage.getItem('token')}`);

export const getList = (modele) => {

    return axios.request({
        method : "GET",
        url: `${process.env.REACT_APP_API_URL}/api/${modele}`
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
