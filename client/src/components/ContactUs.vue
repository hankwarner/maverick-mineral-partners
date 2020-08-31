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
            <v-form method="POST" action="">
                <div class="form-container">
                    <article id="basic-info">
                        <div class="form-header">
                            <h2>
                                Contact Us
                            </h2>
                        </div>
                        <hr>
                        <div class="columns">
                            <b-field class="column" id="name" label="Name*">
                            <b-input v-model="name"></b-input>
                            </b-field>

                        </div>
                        <div class="columns">
                            <b-field class="column" id="phone-email" label="Email">
                                <b-input v-model="email"></b-input>
                            </b-field>
                            <b-field class="column" id="phone-email" label="Phone">
                                <b-input v-model="phone"></b-input>
                            </b-field>
                        </div>
                        <div class="columns">
                            <b-field class="column" id="phone-email" label="How may we assist you?*">
                                <b-input v-model="question" maxlength="200" type="textarea"></b-input>
                            </b-field>
                        </div>
                        <div class="buttons">
                            <b-button @click="contactUs" type="is-success" expanded>Submit</b-button>
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
import EmailService from '@/services/Email';
import PageFooter from '@/components/Footer';

export default {
    components: {
        PageFooter
    },
    
    data() {
        return {
            loading: false,
            name: "",
            email: "",
            phone: "",
            question: "",
            requiredFields: ["name", "question"],
            error: null,
            errors: [],
            errorMessage: "There's been a problem with your request. Please try again later.",
            success: null,
            successMessage: "Message successfully delivered!",
        }
    },

    methods: {
        async contactUs() {
            this.loading = true;

            try {
                this.validateForm();

                var response = await EmailService.contactUs({
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    question: this.question,
                });

                this.success = true;
                this.resetData();

            } catch(err) {
                console.log(err);
                this.success = false;

            } finally {
                this.loading = false;
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
            height: 51rem;
            //box-shadow: 0px -0.5rem 0.1rem rgba(0,0,0,0.8);
        }

        .form-container {
            position: absolute;
            height: 45.5rem;
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
            height: 41rem;
            //box-shadow: 0px -0.5rem 0.1rem rgba(0,0,0,0.8);
        }

        .form-container {
            //position: absolute;
            height: 55rem;
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

        .column {
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
            height: 46rem;
        }

        .form-container {
            height: 55rem;
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

        .column {
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
            height: 46.5rem;
            //box-shadow: 0px -0.5rem 0.1rem rgba(0,0,0,0.8);
        }

        .form-container {
            position: absolute;
            height: 63rem;
            width: 20rem;
            margin: 1.4rem;
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

        .column {
            text-align: left;
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
            margin-top: 3.5rem;
        }

        .property-question {
            margin-bottom: 1rem;
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            font-size: 1.1rem;
        }
    }

</style>
