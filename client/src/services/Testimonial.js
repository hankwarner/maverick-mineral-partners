import Api from './Api';

export default {
    async getTestimonials() {
        var path = 'api/testimonial';
        var response = await Api().get(path);
        
        return response;
    }
}
