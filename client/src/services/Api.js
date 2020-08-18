import axios from 'axios';

export default () => {
    if(process.env.NODE_ENV == 'development') {
        var baseUrl = 'http://localhost:8081/';

    } else {
        var baseUrl = 'https://maverick-frontend.herokuapp.com';
    }

    return axios.create({baseURL: baseUrl});
};
