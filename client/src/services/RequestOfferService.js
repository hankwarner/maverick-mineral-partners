const axios = require('axios');

export default {
    async requestOfferToMav(req) {
        var path = '/api/request';
        var response = await axios.post(path, req)
        
        return response;
    }
}
