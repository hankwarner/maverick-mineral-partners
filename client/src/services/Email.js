import Api from './Api';

export default {
    async requestOffer(req) {
        var path = 'api/request';
        var response = await Api().post(path, req);
        
        return response;
    },

    async contactUs(req) {
        var path = 'api/contact';
        var response = await Api().post(path, req);
        
        return response;
    }
}
