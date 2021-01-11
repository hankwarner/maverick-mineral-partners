<template>
    <div>
        <main class="background">
            <v-content>
                <section class="container">
                    <div class="box">
                        <span class="inner">Company Overview</span>
                    </div>
                    <section class="inner-container">
                        <div class="individual-bio-container">
                            <span class="text" id="company-bio">
                                <h3>{{companyInfo.name}}</h3> <br>
                                <p>
                                    {{companyInfo.bio}}
                                </p>
                                <p style="font-weight: bold;">
                                    LinkedIn: 
                                    <a class="linked-in-logo" v-bind:href="companyInfo.linkedIn">
                                        <font-awesome-icon size="2x" :icon="['fab', 'linkedin']" />
                                    </a>
                                </p>
                            </span>
                        </div>
                    </section>
                    <span class="photo-container">
                        <img
                            src="../../public/images/colorado-sun.jpg"
                            alt="Company photo"
                            class="company-photo"
                        >
                    </span>
                </section>
            </v-content>
            <bottom-banner />
            <page-footer />
        </main>
    </div>
</template>

<script>
import BottomBanner from '@/components/BottomBanner';
import PageFooter from '@/components/Footer';
import CompanyService from '@/services/Company';

export default {
    components: {
        BottomBanner,
        PageFooter
    },

    data(){
        return {
            companyInfo: {},
            error: null,
            loading: false
        }
    },

    mounted() {
        this.getCompanyInfo();
    },

    methods: {
        async getCompanyInfo() {
            try {
                this.loading = true;

                let response = await CompanyService.getCompanyInfo();
                this.companyInfo = response.data;

            } catch(err) {
                console.log(err);
                this.error = err.message;

            } finally {
                this.loading = false;
            }
        },

        activateReadMore(){
            this.readMoreActivated = true;
        },
    }
};
</script>

<style scoped lang="scss">
    .background {
        max-width: 100%;
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
    }
    
    .container {
        margin: 0 1px;
    }

    a {
        color: black;
    }

    .linked-in-logo {
        color: white;
    }

    // Desktop
    @media only screen and (min-width: 64.063em){
        .background {
            background-image: url('../../public/images/clocktower_side.jpg');
        }
        
        .box {
            background-color: black;
            position: absolute;
            top: 10rem;
            left: 5rem;
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

        .container {
            height: 86rem;
            margin: 0 1px;
        }

        .inner-container {
            margin: 0 1px;
            max-width: 100%;
        }

        .individual-bio-container {
            height: 28rem;
            width: 70rem;
            margin-top: 2rem;
            margin-left: 12.8rem;
            margin-bottom: 2rem;
        }

        #bio-container {
            margin-bottom: 10rem;
        }

        .text {
            background-color: black;
            opacity: 0.7;
            border-radius: 8px;
            position: absolute;
            top: 37rem;
            left: 42rem;
            height: 34rem;
            width: 42rem;
            text-align: left;
        }

        h3 {
            font-weight: bold;
            font-size: 1.7rem;
            font-family: Open Sans,sans-serif;
            color: white;
            margin-top: 3%;
            margin-left: 25%;
        }

        p {
            font-family: Open Sans,sans-serif;
            font-size: 1.2rem;
            margin-top: 1rem;
            margin-left: 2rem;
            margin-right: 2rem;
            color: white;
        }

        .photo-container {
            position: absolute;
            margin-top: 17%;
            left: 2rem;
            height: 20rem;
            width: 40rem;
        }

        .company-photo {
            height: 20rem;
            width: 30rem;
            box-shadow: -2px -2px 2px rgba(34,34,34,0.6);
            border-radius: 8px;
        }

        hr {
            color: black;
            width: .1rem;
            height: 15rem;
            margin-left: 28rem;
        }
    }


    // iPad Pro
    @media only screen and (min-width: 50.01em) and (max-width: 64em) {
        .background {
            background-image: url('../../public/images/clocktower_vertical.jpg');
            background-attachment: scroll;
            overflow: scroll;
            overflow-x: hidden;
            height: 50rem;
            margin-top: 5rem;
        }
        
        .container {
            height: 140rem;
        }

        .box {
            background-color: black;
            position: absolute;
            top: 11.5rem;
            left: 4.5rem;
            height: 13rem;
            width: 28rem;
            opacity: 0.7;
        }

        .inner {
            position: absolute;
            color: white;
            top: 4rem;
            left: 2rem;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 2.8rem;
        }

        #bio-container {
            padding: 0.5rem;
            margin: 7.5rem 2rem;
        }

        h2 {
            font-weight: bold;
            font-size: 2.3rem;
            font-family: Bitter,serif;
        }

        h3 {
            font-weight: bold;
            font-size: 2.8rem;
            font-family: Open Sans,sans-serif;
            color: white;
        }

        .text {
            background-color: black;
            opacity: 0.7;
            border-radius: 8px;
            position: absolute;
            top: 30rem;
            left: 5.3rem;
            height: 65rem;
            width: 50rem;
        }

        p {
            font-family: Open Sans,sans-serif;
            margin-top: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
            font-size: 2rem;
            color: white;
        }

        .individual-bio-container {
            padding-top: 1.5rem;
            margin-top: 2rem;
        }

        .photo-container {
            position: absolute;
            margin-top: 85%;
            left: 5.5rem;
            top: 9rem;
        }

        .company-photo {
            width: 50rem;
            margin-top: 80%;
            box-shadow: -2px -2px 2px rgba(34,34,34,0.6);
            border-radius: 8px;
        }

        #company-bio {
            margin-bottom: 9rem;
            font-family: Open Sans,sans-serif !important;
        }
    }

    // Tablet
    @media only screen and (min-width: 40.063em) and (max-width: 50em){
        .background {
            background-image: url('../../public/images/clocktower_vertical.jpg');
            background-attachment: scroll;
            overflow: scroll;
            overflow-x: hidden;
            height: 45rem;
            margin-top: 5rem;
        }
        
        .container {
            height: 115rem;
        }

        .box {
            background-color: black;
            position: absolute;
            top: 11.5rem;
            left: 4.5rem;
            height: 10rem;
            width: 25rem;
            opacity: 0.7;
        }

        .inner {
            position: absolute;
            color: white;
            top: 3.2rem;
            left: 1.7rem;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 2.5rem;
        }

        #bio-container {
            padding: 0.5rem;
            margin: 5rem 2rem;
        }

        h2 {
            font-weight: bold;
            font-size: 2.3rem;
            font-family: Bitter,serif;
        }

        h3 {
            font-weight: bold;
            font-size: 2.5rem;
            font-family: Open Sans,sans-serif;
            color: white;
        }

        p {
            font-family: Open Sans,sans-serif;
            margin-top: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
            font-size: 1.7rem;
            color: white;
        }

        .individual-bio-container {
            padding-top: 1.5rem;
            margin-top: 2rem;
        }

        .text {
            background-color: black;
            opacity: 0.7;
            border-radius: 8px;
            position: absolute;
            top: 25rem;
            left: 3.8rem;
            height: 58rem;
            width: 40rem;
        }

        .photo-container {
            position: absolute;
            margin-top: 85%;
            left: 1rem;
            right: 1rem;
        }

        .company-photo {
            width: 35rem;
            margin-top: 95%;
            box-shadow: -2px -2px 2px rgba(34,34,34,0.6);
            border-radius: 8px;
        }

        #company-bio {
            margin-bottom: 9rem;
            font-family: Open Sans,sans-serif !important;
        }
    }

    // Mobile
    @media only screen and (max-width: 40em){
        .background {
            background-image: url('../../public/images/clocktower_vertical.jpg');
            background-attachment: scroll;
            overflow: scroll;
            overflow-x: hidden;
            height: 35rem;
            margin-top: 5rem;
        }
        
        .container {
            height: 110rem;
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

        #bio-container {
            padding: 0.5rem;
            margin: 5rem 2rem;
        }

        h2 {
            font-weight: bold;
            font-size: 2.3rem;
            font-family: Bitter,serif;
        }

        h3 {
            font-weight: bold;
            font-size: 1.3rem;
            font-family: Open Sans,sans-serif;
            color: white;
            margin-top: 8%;
        }

        p {
            font-family: Open Sans,sans-serif;
            font-size: 1.2rem;
            margin-top: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
            color: white;
        }

        .text {
            background-color: black;
            opacity: 0.7;
            border-radius: 8px;
            position: absolute;
            top: 25rem;
            left: 1.5rem;
            height: 60rem;
            width: 20rem;
        }

        .photo-container {
            position: absolute;
            top: 85rem;
            left: 1rem;
            right: 1rem;
        }

        .company-photo {
            width: 28rem;
            margin-top: 13%;
            box-shadow: -2px -2px 2px rgba(34,34,34,0.6);
            border-radius: 8px;
        }

        #company-bio {
            margin-bottom: 9rem;
            font-family: Open Sans,sans-serif !important;
        }
    }
</style>