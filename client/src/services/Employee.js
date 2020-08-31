import axios from 'axios';

export default {
    async getEmployees() {
        var path = '/api/employees';
        console.log("getEmployees called from services");
        var response = await axios.get(path)
        
        return response;
    }
}
