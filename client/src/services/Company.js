import Api from '@/services/api';

export default {
    async getCompanyInfo() {
        var path = 'company';
        var response = await Api().get(path);
        
        return response;
    }
}
