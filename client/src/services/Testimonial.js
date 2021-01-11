import Api from '@/services/api';

export default {
    async getTestimonials() {
        var path = 'testimonial';
        var response = await Api().get(path);
        
        return response;
    }
}
