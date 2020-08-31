export default {
    async requestOfferToMav(offer) {
        console.log(offer);
        var response = await fetch('/api/request');
        console.log(response);
        //return await response.json();
    }
}
