import Api from '@/services/Api';

export default {
    requestOffer(formData) {
        try {
            console.log("requestOffer called");
            console.log("formData "+JSON.stringify(formData));
            Api().post('request-offer', formData);
        } catch (err) {
            console.log(err);
            return res.send(err);
        }
    },

    contactUs(formData) {
        try {
            console.log("contactUs called");
            console.log("formData "+JSON.stringify(formData));
            Api().post('contact-us', formData);
        } catch (err) {
            console.log(err);
            return res.send(err);
        }
    },
}
