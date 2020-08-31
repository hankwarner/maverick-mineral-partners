<template>
    <v-content>
        <section class="container" style="top: 0.8rem;">
            <img
                src="../../public/images/desert_horses.jpg"
                alt="Horses in the desert"
                class="horses-photo"
            >
            <div class="box">
                <span class="inner">Request an Offer</span>
            </div>
        </section>

        <section class="container" id="form-background">
            <!-- v-bind:style="{ height: formHeight }" -->
            <v-form method="POST" action="">
                <div class="form-container">
                    <article id="basic-info">
                        <div class="form-header">
                            <h2>
                                Request an Offer
                            </h2>
                            <p class="sub-header">
                                Please fill out the fields below.
                            </p>
                        </div>
                        <hr>
                        <div class="columns">
                            <b-field class="column" id="name" label="First Name*">
                            <b-input v-model="firstName"></b-input>
                            </b-field>
                            <b-field class="column" id="name" label="Last Name*">
                                <b-input v-model="lastName"></b-input>
                            </b-field>
                        </div>
                        <div class="columns">
                            <b-field class="column" id="phone-email" label="Phone*">
                                <b-input v-model="phone"></b-input>
                            </b-field>
                            <b-field class="column" id="phone-email" label="Email">
                                <b-input v-model="email"></b-input>
                            </b-field>
                        </div>
                    </article>

                    <article id="property-info">
                        <div class="form-header">
                            <h4>
                                Property Information
                            </h4>
                            <p class="sub-header">
                                Please fill out to the best of your ability.
                            </p>
                        </div>
                        <hr>
                        <div class="columns">
                            
                        </div>
                        <div class="columns">
                            <b-field class="column" id="phone-email" label="Property Description">
                                <b-input v-model="description"></b-input>
                            </b-field>
                            <b-field class="column" id="phone-email" label="Number of Acres">
                                <b-input v-model="acres"></b-input>
                            </b-field>
                        </div>
                        <div class="columns">
                            <b-field class="column" id="phone-email" label="County">
                                <b-input v-model="county"></b-input>
                            </b-field>
                            <b-field class="column" id="phone-email" label="State">
                                <b-input v-model="state"></b-input>
                            </b-field>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <section>
                                    <h4 class="property-question">Is Your Property Currently Leased?</h4>
                                    <div class="field">
                                        <b-radio v-model="leased"
                                            native-value="Yes"
                                            type="is-white"
                                            name="leased">
                                            Yes
                                        </b-radio>
                                    </div>
                                    <div class="field">
                                        <b-radio v-model="leased"
                                            native-value="No"
                                            type="is-white"
                                            name="leased">
                                            No
                                        </b-radio>
                                    </div>
                                    <div class="field">
                                        <b-radio v-model="leased"
                                            native-value="I don't know"
                                            type="is-white"
                                            name="leased">
                                            I don't know
                                        </b-radio>
                                    </div>
                                </section>
                            </div>
                            <div class="column">
                                <section>
                                    <h4 class="property-question">Is Your Property Currently Producing?</h4>
                                    <div class="field">
                                        <b-radio v-model="producing"
                                            native-value="Yes"
                                            type="is-white"
                                            name="producing">
                                            Yes
                                        </b-radio>
                                    </div>
                                    <div class="field">
                                        <b-radio v-model="producing"
                                            native-value="No"
                                            type="is-white"
                                            name="producing">
                                            No
                                        </b-radio>
                                    </div>
                                    <div class="field">
                                        <b-radio v-model="producing"
                                            native-value="I don't know"
                                            type="is-white"
                                            name="producing">
                                            I don't know
                                        </b-radio>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div class="columns">
                            <b-field class="column" id="phone-email" label="Additional Comments">
                                <b-input v-model="comments" maxlength="200" type="textarea"></b-input>
                            </b-field>
                        </div>
                        <div class="buttons">
                            <b-button @click="requestOffer" type="is-success" expanded>Submit</b-button>
                            <b-loading :active.sync="loading" :can-cancel="true"></b-loading>
                        </div>
                        <b-message v-if="success" type="is-success" has-icon>
                            {{successMessage}}
                        </b-message>
                        <b-message v-if="error" type="is-danger" has-icon>
                            {{error}}
                            {{errors}}
                        </b-message>
                    </article>
                </div>
            </v-form>
        </section>
        <page-footer />
    </v-content>
</template>

<script>
//import Email from '@/services/Email';
import ReqOffer from '@/services/RequestOfferService';
import PageFooter from '@/components/Footer';

export default {
    components: {
        PageFooter
    },
    
    data() {
        return {
            loading: false,
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            description: "",
            acres: "",
            state: "",
            county: "",
            leased: "",
            producing: "",
            comments: "",
            requiredFields: ["firstName", "lastName", "phone"],
            error: null,
            errors: [],
            success: null,
            successMessage: "Message successfully delivered!",
            formHeight: "106rem",
        }
    },

    methods: {
        async requestOffer() {
            this.loading = true;
            console.log("requestOffer herererer called");
            try {
                //this.validateForm();

                // var response = await Email.requestOffer({
                //     firstName: this.firstName,
                //     lastName: this.lastName,
                //     email: this.email,
                //     phone: this.phone,
                //     address: this.address,
                //     description: this.description,
                //     acres: this.acres,
                //     state: this.state,
                //     county: this.county,
                //     leased: this.leased,
                //     producing: this.producing,
                //     comments: this.comments,
                // });

                var response = await ReqOffer.requestOfferToMav({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    phone: this.phone,
                    address: this.address,
                    description: this.description,
                    acres: this.acres,
                    state: this.state,
                    county: this.county,
                    leased: this.leased,
                    producing: this.producing,
                    comments: this.comments,
                });

                this.success = true;
                this.resetData();

            } catch(err) {
                console.log(err);
                this.success = false;

            } finally {
                this.loading = false;
                this.formHeight = "108rem";
            }
        },

        validateForm(){
            this.errors = [];
            this.error = null;
            
            this.requiredFields.forEach(field => {
                if(!this[field]) {
                    this.errors.push(field);
                }
            });

            if(this.errors.length){
                this.error = "The following required fields are missing: ";
                throw this.error;
            }
            console.log("Form data is valid");
        },

        resetData() {
            this.firstName = "";
            this.lastName = "";
            this.email = "";
            this.phone = "";
            this.address = "";
            this.description = "";
            this.acres = "";
            this.state = "";
            this.county = "";
            this.leased = "";
            this.producing = "";
            this.comments = "";
        }
    },
}
</script>

<style scoped lang="scss">
    .container {
        margin: 0 1px;
        max-width: 100%;
    }

    .horses-photo {
        width: 100%;
    }

    .buttons {
        font-family: Bitter,serif;
    }

    @media only screen and (min-width: 64.063em){
        .container {
            top: 0.3rem;
        }
        
        .horses-photo {
            height: 49rem;
            object-fit: cover;
        }

        .box {
            background-color: black;
            position: absolute;
            top: 10rem;
            left: 45rem;
            height: 15rem;
            width: 40rem;
            opacity: 0.7;
        }

        .inner {
            position: absolute;
            color: white;
            top: 5rem;
            left: 8rem;
            //font-family: Perpetua Titling MT;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 3.2rem;
        }

        #form-background {
            background-image: url("../../public/images/dark_wood_texure_2.jpg");
            //box-shadow: 0px -0.5rem 0.1rem rgba(0,0,0,0.8);
            height: 108rem;
        }

        .form-container {
            position: absolute;
            height: 73rem;
            width: 70rem;
            margin-top: 5.5rem;
            margin-left: 12.5rem;
        }

        #basic-info {
            position: absolute;
            height: 30rem;
            width: 70rem;
        }

        .form-header {
            text-align: left;
            font-family: Bitter,serif;
            font-size: 2.2rem;
            color: white;
        }

        .sub-header {
            font-size: 1.1rem;
        }

        hr {
            color: black;
            width: 70rem;
            height: 0.1rem;
        }

        .column {
            text-align: left;
            width: 30rem;
        }

        #name {
            margin-top: 0.7rem;
        }

        #phone-email {
            margin-top: 2rem;
        }

        #property-info {
            color: white;
            position: absolute;
            height: 68rem;
            width: 70rem;
            margin-top: 30rem;
        }

        .property-question {
            margin-bottom: 1rem;
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            font-size: 1.1rem;
        }
    }


    // iPad Pro
    @media only screen and (min-width: 50.01em) and (max-width: 64em) {
        .container {
            top: 0.3rem;
        }
        
        .horses-photo {
            object-fit: cover;
        }

        .box {
            background-color: black;
            position: absolute;
            top: 9rem;
            left: 32rem;
            height: 11rem;
            width: 30rem;
            opacity: 0.7;
        }

        .inner {
            position: absolute;
            color: white;
            top: 3rem;
            left: 3rem;
            //font-family: Perpetua Titling MT;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 3.2rem;
        }

        #form-background {
            background-image: url("../../public/images/dark_wood_texure_2.jpg");
            height: 100rem;
        }

        .form-container {
            position: absolute;
            height: 73rem;
            width: 50rem;
            margin: 5rem 6.5rem;
        }

        .form-header {
            text-align: left;
            font-family: Bitter,serif;
            font-size: 2.2rem;
            color: white;
        }

        .sub-header {
            font-size: 1.1rem;
        }

        .column {
            text-align: left;
            width: 30rem;
        }

        #name {
            margin-top: 0.7rem;
        }

        #phone-email {
            margin-top: 2rem;
        }

        #property-info {
            color: white;
            position: absolute;
            height: 68rem;
            width: 50rem;
            margin-top: 3rem;
        }

        .property-question {
            margin-bottom: 1rem;
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            font-size: 1.1rem;
        }
    }


    // Tablet
    @media only screen and (min-width: 40.01em) and (max-width: 50em) {
        .container {
            top: 0.3rem;
        }
        
        .horses-photo {
            object-fit: cover;
        }

        .box {
            background-color: black;
            position: absolute;
            top: 9rem;
            left: 18rem;
            height: 11rem;
            width: 29rem;
            opacity: 0.7;
        }

        .inner {
            position: absolute;
            color: white;
            top: 3rem;
            left: 3rem;
            //font-family: Perpetua Titling MT;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 3.2rem;
        }

        #form-background {
            background-image: url("../../public/images/dark_wood_texure_2.jpg");
            height: 132rem;
        }

        .form-container {
            position: absolute;
            height: 73rem;
            width: 28.5rem;
            margin: 5rem 10rem;
        }

        .form-header {
            text-align: left;
            font-family: Bitter,serif;
            font-size: 2.2rem;
            color: white;
        }

        .sub-header {
            font-size: 1.1rem;
        }

        .column {
            text-align: left;
            width: 30rem;
        }

        #name {
            margin-top: 0.7rem;
        }

        #phone-email {
            margin-top: 2rem;
        }

        #property-info {
            color: white;
            position: absolute;
            height: 68rem;
            width: 28.5rem;
            margin-top: 3rem;
        }

        .label {
            font-size: 1.3rem;
        }

        .property-question {
            margin-bottom: 1rem;
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            font-size: 1.3rem;
        }
    }


    // Mobile
    @media only screen and (max-width: 40em) {
        .container {
            top: 0.3rem;
        }

        .horses-photo {
            height: 20rem;
            object-fit: cover;
        }

        .box {
            background-color: black;
            position: absolute;
            top: 10rem;
            left: 1.5rem;
            height: 8rem;
            width: 20rem;
            opacity: 0.7;
        }

        .inner {
            position: absolute;
            color: white;
            top: 2rem;
            left: 1.7rem;
            //font-family: Perpetua Titling MT;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 2rem;
        }

        #form-background {
            background-image: url("../../public/images/dark_wood_texure_2.jpg");
            height: 122.5rem;
            box-shadow: 0px -0.5rem 0.1rem rgba(0,0,0,0.8);
        }

        .form-container {
            //background-color: black;
            position: absolute;
            height: 63rem;
            width: 20rem;
            margin: 1.4rem;
        }

        #basic-info {
            //background-color: red;
            // position: absolute;
            // height: 20rem;
            width: 20rem;
        }

        .form-header {
            text-align: left;
            font-family: Bitter,serif;
            font-size: 1.5rem;
            color: white;
        }

        .sub-header {
            font-size: 1.5rem;
        }

        hr {
            color: black;
            width: 20rem;
            height: 0.1rem;
        }

        .column {
            text-align: left;
            // width: 30rem;
        }

        #name {
            margin-top: 0.7rem;
        }

        #phone-email {
            margin-top: 2rem;
        }

        #property-info {
            //background-color: red;
            color: white;
            position: absolute;
            height: 68rem;
            // width: 70rem;
            margin-top: 3.5rem;
        }

        .property-question {
            margin-bottom: 1rem;
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            font-size: 1.1rem;
        }
    }

</style>
