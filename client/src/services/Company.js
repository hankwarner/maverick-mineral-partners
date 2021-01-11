import Api from './Api';

export default {
    async getCompanyInfo() {
        var path = 'api/company';
        var response = await Api().get(path);
        
        return response;
    }
}
