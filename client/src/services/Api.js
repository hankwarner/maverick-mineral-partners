import axios from 'axios';

export default () => {
    if(process.env.NODE_ENV == 'development') {
        var baseUrl = 'http://localhost:7071/api/';

    } else {
        var baseUrl = 'https://gentle-wave-00890671e.azurestaticapps.net/api/';
    }
    console.log(baseUrl);
    return axios.create({baseURL: baseUrl});
};
