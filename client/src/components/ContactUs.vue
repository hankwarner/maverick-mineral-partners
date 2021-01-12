<template>
    <v-content>
        <section class="container" style="top: 0.7rem;">
            <img
                src="../../public/images/mountains_2.jpeg"
                alt="Mountains"
                class="mountains-photo"
            >
            <div class="box">
                <span class="inner">Contact Us</span>
            </div>
        </section>
        <section class="container" id="form-background">
            <v-form method="POST">
                <div class="form-container">
                    <article id="basic-info">
                        <div class="form-header">
                            <h2>
                                Contact Us
                            </h2>
                        </div>
                        <hr>
                        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                            <b-field class="form-label" id="name" label="Name*">
                                <b-input v-model.trim="$v.name.$model"></b-input>
                            </b-field>
                        </div>
                        <b-message v-if="$v.name.$error" type="is-danger">
                            Name is required.
                        </b-message>
                        <div class="form-group">
                            <b-field class="form-label" id="phone-email" label="Email">
                                <b-input v-model.trim="email"></b-input>
                            </b-field>
                            <b-field class="form-label" id="phone-email" label="Phone">
                                <b-input v-model.trim="phone"></b-input>
                            </b-field>
                        </div>
                        <div class="form-group" :class="{ 'form-group--error': $v.question.$error }">
                            <b-field class="form-label" id="phone-email" label="How may we assist you?*">
                                <b-input v-model.trim="$v.question.$model" maxlength="200" type="textarea"></b-input>
                            </b-field>
                        </div>
                        <b-message type="is-danger" v-if="$v.question.$error">
                            Please complete the question above.
                        </b-message>
                        <div class="buttons">
                            <b-button 
                                v-if="$v.$invalid" disabled expanded>
                                    Submit
                            </b-button>
                            <b-button 
                                v-else @click="contactUs" type="is-success" expanded>
                                    Submit
                            </b-button>
                            <b-loading :active.sync="loading" :can-cancel="true"></b-loading>
                        </div>
                        <b-notification v-if="success" type="is-success" has-icon>
                            {{successMessage}}
                        </b-notification>
                        <b-notification v-if="error" type="is-danger" has-icon>
                            {{error}}
                        </b-notification>
                    </article>
                </div>
            </v-form>
        </section>
        <page-footer />
    </v-content>
</template>

<script>
import EmailService from '@/services/Email';
import PageFooter from '@/components/Footer';
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
    components: {
        PageFooter
    },
    
    data() {
        return {
            loading: false,
            name: '',
            email: '',
            phone: '',
            question: '',
            error: null,
            success: null,
            successMessage: 'Message successfully delivered!',
        }
    },

    validations: {
        name: {
            required
        },
        question: {
            required
        }
    },

    methods: {
        async contactUs() {
            this.loading = true;
            this.error = null;

            try {
                // Run form validation
                this.$v.$touch();

                if(this.$v.$invalid){
                    this.error = 'Please ensure all required fields are completed.';
                    this.success = false;

                } else {
                    var response = await EmailService.contactUs({
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                        question: this.question,
                    });

                    this.success = true;
                    this.resetData();
                }
            } catch(err) {
                console.log(err);
                this.error = 'There was a problem submitting your request. Please try again later.';
                this.success = false;

            } finally {
                this.loading = false;
            }
        },
        resetData() {
            this.name = "";
            this.email = "";
            this.phone = "";
            this.question = "";
        }
    },
}
</script>

<style scoped lang="scss">
    .container {
        margin: 0 1px;
        max-width: 100%;
    }

    .mountains-photo {
        width: 100%;
        height: 49rem;
        object-fit: cover;
    }

    .buttons {
        font-family: Bitter,serif;
    }

    .form-group{
        margin-bottom: .5%;
    }

    @media only screen and (min-width: 64.063em){
        .container {
            top: 0.3rem;
        }
        
        .mountains-photo {
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
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 3.2rem;
        }

        #form-background {
            background-color: rgba(0,0,0,0.8);
        }

        .form-container {
            position: relative;
            width: 70rem;
            margin-left: 12.5rem;
            padding: 3% 0;
        }

        #basic-info {
            position: relative;
            width: 70rem;
        }

        .form-header {
            text-align: left;
            font-family: Bitter,serif;
            font-size: 2.2rem;
            color: white;
        }

        hr {
            color: black;
            width: 70rem;
            height: 0.1rem;
        }

        .form-label {
            text-align: left;
            width: 30rem;
        }

        #name {
            margin-top: 0.7rem;
        }

        #phone-email {
            margin-top: 2rem;
        }
    }


    // iPad Pro
    @media only screen and (min-width: 50.01em) and (max-width: 64em) {
        .container {
            top: 0rem;
        }
        
        .box {
            background-color: black;
            position: absolute;
            top: 9.7rem;
            left: 33rem;
            height: 10.7rem;
            width: 25rem;
            opacity: 0.7;
        }

        .inner {
            position: absolute;
            color: white;
            top: 2rem;
            left: 3rem;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 3.5rem;
        }

        #form-background {
            background-color: rgba(0,0,0,0.8);
        }

        .form-container {
            width: 55rem;
            padding: 2rem;
            margin: 0 2.5rem;
        }

        .form-header {
            text-align: left;
            font-family: Bitter,serif;
            font-size: 2.2rem;
            color: white;
        }

        .form-label {
            text-align: left;
            width: 30rem;
        }
    }


    // Tablet
    @media only screen and (min-width: 40.01em) and (max-width: 50em) {
        .container {
            top: 0rem;
        }
        
        .box {
            background-color: black;
            position: absolute;
            top: 9.7rem;
            left: 20rem;
            height: 10.7rem;
            width: 25rem;
            opacity: 0.7;
        }

        .inner {
            position: absolute;
            color: white;
            top: 2rem;
            left: 3rem;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 3.5rem;
        }

        #form-background {
            background-color: rgba(0,0,0,0.8);
        }

        .form-container {
            width: 40rem;
            padding: 2rem;
            margin: 0 4rem;
        }

        .form-header {
            text-align: left;
            font-family: Bitter,serif;
            font-size: 2.2rem;
            color: white;
        }

        .form-label {
            text-align: left;
            width: 37.5rem;
        }
    }


    // Mobile
    @media only screen and (max-width: 40em) {
        .container {
            top: 0.3rem;
        }

        .mountains-photo {
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
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 2rem;
        }

        #form-background {
            background-color: rgba(0,0,0,0.8);
        }

        .form-container {
            position: relative;
            width: 20rem;
            margin: 1.4rem;
            padding: 10% 0;
        }

        #basic-info {
            width: 20rem;
        }

        .form-header {
            text-align: left;
            font-family: Bitter,serif;
            font-size: 1.5rem;
            color: white;
        }

        hr {
            color: black;
            width: 20rem;
            height: 0.1rem;
        }

        .form-label {
            text-align: left;
        }

        #name {
            margin-top: 0.7rem;
        }

        #phone-email {
            margin-top: 2rem;
        }
    }
</style>
