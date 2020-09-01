import axios from 'axios';

export default {
    async getTestimonials() {
        var path = '/api/testimonial';
        var response = await axios.get(path)
        
        return response;
    }
}
