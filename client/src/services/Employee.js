import Api from './Api';

export default {
    async getEmployees() {
        var path = 'api/employees';
        var response = await Api().get(path);
        
        return response;
    }
}
