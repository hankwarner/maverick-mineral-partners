import axios from 'axios';

export default {
    async requestOffer(req) {
        var path = '/api/request';
        var response = await axios.post(path, req)
        
        return response;
    },

    async contactUs(req) {
        var path = '/api/contact';
        var response = await axios.post(path, req)
        
        return response;
    }
}
