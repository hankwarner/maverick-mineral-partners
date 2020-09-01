import axios from 'axios';

export default {
    async getCompanyInfo() {
        var path = '/api/company';
        var response = await axios.get(path)
        
        return response;
    }
}
