<template>
    <div class="background">
        <v-content>
            <section class="container" style="top: 2.39rem;">
                <div class="parallax">
                    <div class="box">
                        <span class="inner">Testimonials</span>
                    </div>
                </div>
            </section>
            <div class="below-picture">
                <section v-for="(testimonial, index) in testimonials" :key="testimonial.id" class="container" id="bio-container">
                    <div class="individual-testimonial-container">
                        <span class="quote-icon">
                            <font-awesome-icon size="2x" :icon="['fas', 'quote-left']" />
                        </span>
                        <span class="text">
                            <p v-for="(paragraph, index) in testimonial.paragraphs" :key="index">
                                {{paragraph}}
                            </p>
                            <br />
                            <h3>- {{testimonial.name}}</h3>
                        </span>
                    </div>
                    <hr v-if="index != testimonials.length - 1">
                </section>
            </div>
        </v-content>
        <bottom-banner />
        <page-footer />
    </div>
</template>


<script>
import BottomBanner from '@/components/BottomBanner';
import PageFooter from '@/components/Footer';
import TestimonialService from '@/services/Testimonial';

export default {
    components: {
        BottomBanner,
        PageFooter
    },

    data(){
        return {
            readMoreActivated: false,
            testimonials: [],
            error: null,
            loading: false
        }
    },

    mounted() {
        this.getTestimonials();
    },

    methods: {
        async getTestimonials() {
            try {
                this.loading = true;

                var response = await TestimonialService.getTestimonials();
                this.testimonials = response.data;
                console.log(this.testimonials);

            } catch(err) {
                console.log(err);
                this.error = err.message;

            } finally {
                this.loading = false;
            }
        },

        activateReadMore(){
            this.readMoreActivated = true;
        }
    }
};
</script>


<style scoped lang="scss">
    .background {
        background-color: lightgray;
    }

    .below-picture {
        background-color: lightgrey;
    }

    .individual-testimonial-container {
        background-color: white;
    }
    
    .container {
        margin: 0 1px;
        max-width: 100%;
    }

    .parallax {
        background-image: url("../../public/images/horses_stampede.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    p {
        font-size: 1rem;
    }

    hr,
    a {
        color: black;
    }

    // X-Large
    @media only screen and (min-width: 110em) {
        .parallax {
            height: 45rem;
            background-size: cover;
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
            margin: 0 1px;
        }

        .quote-icon {
            margin-right: 90%;
        }

        #bio-container div {
            width: 60rem;
            margin: 3% 28%;
            padding-bottom: 2%;
        }

        #bio-container:first-of-type{
            margin-top: 5%;
        }

        #bio-container:last-of-type{
            margin-bottom: 10%;
        }

        .individual-testimonial-container {
            padding-top: 2.5rem;
        }

		.highlighted-quote-1 {
			font-style: bold;
		}

        #bio-container {
            margin-bottom: 2rem;
        }

        .text {
            left: 30%;
            height: 26rem;
            width: 38rem;
            text-align: left;
            font-family: Arial,Helvetica,sans-serif;
        }

        .text p {
            font-style: italic;
            margin: 3%;
        }

        .text h3 {
            text-align: right;
            padding-top: 1.1rem;
            margin: 0 5rem;
        }

        h3 {
            font-weight: bold;
            font-size: 1.8rem;
            font-family: Bitter,serif;
        }

        p {
            font-family: Bitter,serif;
            font-size: 1.4rem !important;
            margin-top: 1rem;
        }

        hr {
            width: 30%;
            margin: 2% 35%;
        }
    }

    // Desktop
    @media only screen and (min-width: 64.063em) and (max-width: 110em){
        .parallax {
            height: 33rem;
            background-size: cover;
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
            margin: 0 1px;
        }

        .quote-icon {
            margin-right: 43rem;
        }

        #bio-container div {
            width: 50rem;
            margin: 3% 26%;
            padding-bottom: 2%;
        }

        .individual-testimonial-container {
            padding-top: 2.5rem;
        }

        #bio-container {
            margin-bottom: 2rem;
        }

        #bio-container:first-of-type{
            margin-top: 7%;
        }

        #bio-container:last-of-type{
            margin-bottom: 12%;
        }

        .text {
            left: 30%;
            height: 26rem;
            width: 38rem;
            text-align: left;
            font-family: Arial,Helvetica,sans-serif;
        }

        .text p {
            font-style: italic;
            margin: 5%;
        }

        .text h3 {
            text-align: right;
            padding-top: 1.1rem;
            margin: 0 5rem;
        }

        h3 {
            font-weight: bold;
            font-size: 1.3rem;
            font-family: Bitter,serif;
        }

        p {
            font-family: Bitter,serif;
            margin: 5%;
        }

        hr {
            width: 40%;
            margin: 2% 31%;
        }
    }

    // iPad Pro
    @media only screen and (min-width: 50.01em) and (max-width: 64em) {
        .parallax {
            height: 38.5rem;
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
            left: 3rem;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 2.5rem;
        }

        #bio-container {
            margin-bottom: 2rem;
        }

        #bio-container div {
            width: 50rem;
            margin: 3% 10.5%;
            padding-bottom: 5%;
        }

        #bio-container:first-of-type{
            margin-top: 10%;
        }

        #bio-container:last-of-type{
            margin-bottom: 10%;
        }

        .individual-testimonial-container {
            padding-top: 2.5rem;
        }

        .quote-icon {
            float: left;
            margin-right: .1rem;
            padding-left: 1rem;
        }

        .text {
            height: 26rem;
            width: 38rem;
            text-align: left;
            font-family: Arial,Helvetica,sans-serif;
        }

        .text p {
            font-style: italic;
            font-size: 1.3rem;
        }

        .text h3 {
            text-align: right;
            padding-top: 1.1rem;
            padding-right: 1.5rem;
        }

        h3 {
            font-weight: bold;
            font-size: 1.3rem;
            font-family: Bitter,serif;
        }

        p {
            font-family: Bitter,serif;
            margin: 5%;
        }

        hr {
            width: 65%;
            margin: 6% 18%;
        }
    }

    // Tablet
    @media only screen and (min-width: 40.063em) and (max-width: 50em){
        .parallax {
            height: 28rem;
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
            left: 3rem;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 2.5rem;
        }

        #bio-container {
            margin-bottom: 2rem;
        }

        #bio-container div {
            width: 40rem;
            margin: 3% 8.5%;
            padding-bottom: 5%;
        }

        #bio-container:first-of-type{
            margin-top: 13%;
        }

        #bio-container:last-of-type{
            margin-bottom: 12%;
        }

        .individual-testimonial-container {
            padding-top: 2.5rem;
        }

        .quote-icon {
            float: left;
            margin-right: .1rem;
            padding-left: 1rem;
        }

        .text {
            height: 26rem;
            width: 38rem;
            text-align: left;
            font-family: Arial,Helvetica,sans-serif;
        }

        .text p {
            font-style: italic;
            font-size: 1.3rem;
        }

        .text h3 {
            text-align: right;
            padding-top: 1.1rem;
            padding-right: 1.5rem;
        }

        h3 {
            font-weight: bold;
            font-size: 1.3rem;
            font-family: Bitter,serif;
        }

        p {
            font-family: Bitter,serif;
            margin: 5%;
        }

        hr {
            width: 65%;
            margin: 6% 18%;
        }
    }

    // Mobile
    @media only screen and (max-width: 40em){
        .parallax {
            height: 32rem;
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
            left: 3rem;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 2.5rem;
        }

        #bio-container {
            margin-bottom: 2rem;
        }

        #bio-container div {
            width: 20rem;
            margin: 3% 7%;
            padding-bottom: 10%;
        }

        #bio-container:first-of-type{
            margin-top: 20%;
        }

        #bio-container:last-of-type{
            margin-bottom: 40%;
        }

        .individual-testimonial-container {
            padding-top: 2.5rem;
        }

        .quote-icon {
            float: left;
            margin-right: .1rem;
            padding-left: 1rem;
        }

        .text {
            height: 26rem;
            width: 38rem;
            text-align: left;
            font-family: Arial,Helvetica,sans-serif;
        }

        .text p {
            font-style: italic;
            font-size: 1.3rem;
        }

        .text h3 {
            text-align: right;
            padding-top: 1.1rem;
            padding-right: 1.5rem;
        }

        h3 {
            font-weight: bold;
            font-size: 1.2rem;
            font-family: Bitter,serif;
        }

        p {
            font-family: Bitter,serif;
            margin: 5%;
        }

        hr {
            width: 65%;
            margin: 10% 16%;
        }
    }
</style>
