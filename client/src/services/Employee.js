import axios from 'axios';

export default {
    async getEmployees() {
        var path = '/api/employees';
        var response = await axios.get(path)
        
        return response;
    }
}