<template>
    <div class="big-boy">
        <v-content>
            <section class="container" style="top: 2.39rem;">
                <div class="parallax">
                    <!-- <img
                        src="../../public/images/horses_stampede.jpg"
                        alt="Forest in the fog"
                        class="forest-photo"
                    > -->
                    <div class="box">
                        <span class="inner">Testimonials</span>
                    </div>
                </div>
            </section>
            <div class="below-picture">
                <section class="container" id="bio-container">
                    <div class="individual-testi-container-1">
                        <span class="quote-icon">
                            <font-awesome-icon size="2x" :icon="['fas', 'quote-left']" />
                        </span>
                        <span class="text" id="eric-text">
                            <p>
                                <b>My experience working with Maverick was very positive</b>, and I was very impressed
                                with the knowledge and consideration demonstrated by John Jones, the Operations 
                                Manager, during the Covid-19 Pandemic. John Jones contacted me indicating Maverick 
                                was interested in purchasing some of the mineral rights I owned in Eastern Colorado. 
                                After agreeing on the price and some of the other details, John drew up an agreement. 
                                When I reviewed the agreement, I felt a few changes should be made.  These changes 
                                were worked out very quickly as John and I talked on the phone.
                            </p>
                            <br />
                            <p>
                                Because of the virus, I was making every effort to avoid contact with anyone. I was able 
                                to have my signature on the deed notarized - and <b>John then agreed to meet me in a parking 
                                lot of my choice - right near a Ross store not far from my home.</b> He walked over to my car 
                                and I handed him the deed from my car window.  He assured me the funds were being wired to 
                                my bank account at the same time. 
                            </p>
                            <br />
                            <p>
                                Truly, <b>I could not believe the service, knowledge and kindness</b> displayed by John - 
                                especially in the times of Covid-19.  I certainly would never hesitate to work with Maverick 
                                in the future!"
                            </p>
                            <h3>- {{carousels[0].name}}</h3>
                        </span>
                    </div>
                    <hr>
                </section>

                <section class="container" id="bio-container">
                    <div class="individual-testi-container-2">
                        <span class="quote-icon">
                           <font-awesome-icon size="2x" :icon="['fas', 'quote-left']" />
                        </span>
                        <span class="text" id="eric-text">
                            <p>
                                <p>
                                    I want to provide you some feedback and <b>thank you for your expertise, honesty and timely assistance</b> 
                                    in completing the sale of my family’s mineral interests to Maverick Mineral Partners.
                                </p>
                                <br />
                                <p>
                                    We decided to sell our mineral interests after drilling operations had commenced because our holding was small, <b>our knowledge of the 
                                    nuances of the oil and gas drilling business was limited</b>, and, most importantly, because we had a very negative and disappointing 
                                    experience dealing with Trinity Operating (Usg), LLC, the company who drilled and subsequently operated the natural gas drilling 
                                    operations where our mineral rights were located.
                                </p>
                                <br />
                                <p>
                                    The intricacies, unknowns and conflicting information provided by Trinity left us questioning the intensions, honesty and trustworthiness 
                                    of the entire oil and gas industry!  Therefore, we contacted your company (after receiving an offer from you to purchase our mineral interests)
                                    with much trepidation.
                                </p>
                                <br />
                                <p>
                                    However, now that our business dealings with you are complete, <b>I am very happy to express our appreciation for the efforts put forth by you and your company.</b>  You returned our calls
                                    quickly, you answered our questions in a way that made sense and you followed through exactly as you told us you would.  <b>The overall experience of dealing with you has been a pleasure!</b>"
                                </p>
                                
                            <h3>- {{carousels[1].name}}</h3>
                        </span>
                    </div>
                    <hr>
                </section>

                <section class="container" id="bio-container">
                    <div class="individual-testi-container-3">
                        <span class="quote-icon">
                            <font-awesome-icon size="2x" :icon="['fas', 'quote-left']" />
                        </span>
                        <span class="text" id="eric-text">
                            <p>
                                <p>
                                    <b>I was very pleased with the customer service</b> provided by Eric. He always provided a very quick response
                                    and was very patient answering the massive number of questions I had."
                                </p>
                                <br />
                                <p>
                                    When it turned out the amount of the sale needed to be a bit less than originally expected, <b>Eric explained 
                                    everything in detail and did not hesitate to refer me to where I could find more information</b>. Not once did I 
                                    feel I was being given the run around or question his truthfulness."
                                </p>
                                
                            <h3>- {{carousels[2].name}}</h3>
                        </span>
                    </div>
                    <hr>
                </section>

                <section class="container" id="bio-container">
                    <div class="individual-testi-container-4">
                        <span class="quote-icon">
                            <font-awesome-icon size="2x" :icon="['fas', 'quote-left']" />
                        </span>
                        <span class="text" id="eric-text">
                            <p>
                                <p>
                                    I want to thank you for Elizabeth and myself for the sale of her mineral rights in CO. She is so thrilled that has been completed. I also want to 
                                    <b>thank you for your personal and professional way you handled the sale/purchase</b>.  You made it very easy to understand and your response 
                                    times were very much appreciated.
                                </p>
                                <br />
                                <p>
                                    You also made it very clear from the beginning that you were with Maverick Mineral Partners along with a partnership 
                                    with Primetime Oil and Gas. Having dealt with the sale of my mineral rights in OK, <b>communicating with you was very easy.</b>"
                                </p>
                                
                            <h3>- {{carousels[3].name}}</h3>
                        </span>
                    </div>
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


export default {
  components: {
    BottomBanner,
    PageFooter
  },

  data(){
      return {
        indicator: true,
        indicatorBackground: true,
        indicatorInside: true,
        indicatorMode: 'hover',
        indicatorPosition: 'is-top',
        indicatorStyle: 'is-lines',
        readMore1Activated: false,
        readMore2Activated: false,
        readMore3Activated: false,
        carousels: [
            { 
				name: 'J.T.',
				highlightedQuote: "I could not believe the service, knowledge and kindness . . . I certainly would never hesitate to work with Maverick in the future!",
                color: 'dark',
                p1: "My experience working with Maverick was very positive, and I was very impressed " + 
                    "with the knowledge and consideration demonstrated by John Jones, the Operations " + 
                    "Manager, during the Covid-19 Pandemic. John Jones contacted me indicating Maverick " +
                    "was interested in purchasing some of the mineral rights I owned in Eastern Colorado. " +
                    "After agreeing on the price and some of the other details, John drew up an agreement. " +
                    "When I reviewed the agreement, I felt a few changes should be made.  These changes " +
                    "were worked out very quickly as John and I talked on the phone.",
                p2: "Because of the virus, I was making every effort to avoid contact with anyone. I was able " +
                    "to have my signature on the deed notarized - and John then agreed to meet me in a parking " +
                    "lot of my choice - right near a Ross store not far from my home. He walked over to my car " +
                    "and I handed him the deed from my car window.  He assured me the funds were being wired to " +
                    "my bank account at the same time. ",
                p3: "Truly, I could not believe the service, knowledge and kindness displayed by John - " +
                    "especially in the times of Covid-19.  I certainly would never hesitate to work with Maverick " +
                    " in the future!"
            },
            { 
                name: 'N.K.G.', 
                color: 'dark',
                p1: "I want to provide you some feedback and thank you for your expertise, honesty and timely assistance " +
                    "in completing the sale of my family’s mineral interests to Maverick Mineral Partners.",
                p2: "We decided to sell our mineral interests after drilling operations had commenced because our holding was small, our knowledge of the " +
                    "nuances of the oil and gas drilling business was limited, and, most importantly, because we had a very negative and disappointing " +
                    "experience dealing with Trinity Operating (Usg), LLC, the company who drilled and subsequently operated the natural gas drilling " +
                    "operations where our mineral rights were located.",
                p3: "The intricacies, unknowns and conflicting information provided by Trinity left us questioning the intensions, honesty and trustworthiness " + 
                    "of the entire oil and gas industry!  Therefore, " +
                    "we contacted your company (after receiving an offer from you to purchase our mineral interests) with much trepidation.",
                p4: "However, now that our business dealings with you are complete, I am very happy to express our appreciation for the efforts put forth by you and your company.  You returned our calls " +
                    "quickly, you answered our questions in a way that made sense and you followed through exactly as you told us you would.  The overall experience of dealing with you has been a pleasure!  "
            },
            { 
                name: 'P.K.', 
                color: 'dark',
                p1: "I was very pleased with the customer service provided by Eric. He always provided a very quick response " +
                    "and was very patient answering the massive number of questions I had.",
                p2: "When it turned out the amount of the sale needed to be a bit less than originally expected, Eric explained " +
                    "everything in detail and did not hesitate to refer me to where I could find more information. Not once did I " +
                    "feel I was being given the run around or question his truthfulness."
            },
            { 
                name: 'Karen McMaster for Elizabeth K', 
                color: 'dark',
                p1: "I want to thank you for Elizabeth and myself for the sale of her mineral rights in CO.  She is so thrilled that has " +
                    "been completed.  I also want to thank you for your personal and professional way you handled the sale/purchase.  You " +
                    "made it very easy to understand and your response times were very much appreciated.",
                p2: "You also made it very clear from the beginning that you were with Maverick Mineral Partners along with a partnership " +
                    "with Primetime Oil and Gas.  Having dealt with the sale of my mineral rights in OK, communicating with you was very easy."
            }
        ]
      }
  },

  methods(){
      return{
          activateReadMore(){
			console.log("hey")
			this.readMore1Activated = true;
        },
      }
  }
};
</script>


<style scoped lang="scss">
    .big-boy {
        background-color: lightgray;
    }

    .below-picture {
        background-color: lightgrey;
    }

    .individual-testi-container-1 {
        background-color: white;
    }

    .individual-testi-container-2 {
        background-color: white;
    }

    .individual-testi-container-3 {
        background-color: white;
    }

    .individual-testi-container-4 {
        background-color: darkgrey;
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

        .individual-testi-container-1 {
            margin-top: 6% !important;
            padding-top: 2.5rem;
        }

		.highlighted-quote-1 {
			font-style: bold;
		}

        .individual-testi-container-2 {
            background-color: darkgrey;
            padding-top: 3rem;
        }

        .individual-testi-container-3 {
            padding-top: 2rem;
            //margin-bottom: 12% !important;
        }

        .individual-testi-container-4 {
            padding-top: 2rem;
            margin-bottom: 12% !important;
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
            margin: 0 5rem;
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

        .individual-testi-container-1 {
            margin-top: 7% !important;
            padding-top: 2.5rem;
        }

        .individual-testi-container-2 {
            background-color: darkgrey;
            padding-top: 3rem;
        }

        .individual-testi-container-3 {
            padding-top: 2rem;
            //margin-bottom: 12% !important;
        }

        .individual-testi-container-4 {
            padding-top: 2rem;
            margin-bottom: 12% !important;
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
            margin: 0 5rem;
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

        .individual-testi-container-1 {
            margin-top: 12% !important;
            padding-top: 2.5rem;
        }

        .individual-testi-container-2 {
            background-color: darkgrey;
            padding-top: 3rem;
        }

        .individual-testi-container-3 {
            padding-top: 2rem;
        }

        .individual-testi-container-4 {
            padding-top: 2rem;
            margin-bottom: 12% !important;
        }

        .quote-icon {
            float: left;
            margin-right: .1rem;
            padding-left: 1rem;
        }

        #eric-headshot {
            margin-top: 5rem;
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

        #eric-text {
            margin-bottom: 4.5rem;
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

        .individual-testi-container-1 {
            margin-top: 12% !important;
            padding-top: 2.5rem;
        }

        .individual-testi-container-2 {
            background-color: darkgrey;
            padding-top: 3rem;
        }

        .individual-testi-container-3 {
            padding-top: 2rem;
        }

        .individual-testi-container-4 {
            padding-top: 2rem;
            margin-bottom: 12% !important;
        }

        .quote-icon {
            float: left;
            margin-right: .1rem;
            padding-left: 1rem;
        }

        #eric-headshot {
            margin-top: 5rem;
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

        #eric-text {
            margin-bottom: 4.5rem;
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

        .individual-testi-container-1 {
            margin-top: 25% !important;
            padding-top: 2.5rem;
        }

        .individual-testi-container-2 {
            background-color: darkgrey;
            padding-top: 3rem;
        }

        .individual-testi-container-3 {
            padding-top: 2rem;
        }

        .individual-testi-container-4 {
            padding-top: 2rem;
            margin-bottom: 40% !important;
        }

        .quote-icon {
            float: left;
            margin-right: .1rem;
            padding-left: 1rem;
        }

        #eric-headshot {
            margin-top: 5rem;
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

        #eric-text {
            margin-bottom: 4.5rem;
        }

        hr {
            width: 65%;
            margin: 10% 16%;
        }
    }
    
    
    
    // With Pictures
    // .container {
    //     margin: 0 1px;
    //     max-width: 100%;
    // }
    
    // .forest-photo {
    //     max-width: 100%;
    //     width: 100%;
    //     opacity: 0.9;
    //     height: auto;
    // }

    // @media only screen and (min-width: 90.063em) {
    //     // .text-2 {
    //     //     left: 63rem;
    //     // }
    // }

    // @media only screen and (min-width: 64.063em){
    //     .carousel-container {
    //         margin-bottom: 10rem;
    //     }
        
    //     .box {
    //         background-color: black;
    //         position: absolute;
    //         top: 10rem;
    //         left: 45rem;
    //         height: 15rem;
    //         width: 40rem;
    //         opacity: 0.7;
    //     }

    //     .inner {
    //         position: absolute;
    //         color: white;
    //         top: 5rem;
    //         left: 8rem;
    //         font-family: Bitter,serif;
    //         font-weight: bold;
    //         font-size: 3.2rem;
    //     }

    //     .container {
    //         margin: 0 1px;
    //     }

    //     .testimonial-container {
    //         height: 28rem;
    //         width: 70rem;
    //     }

    //     .column {
    //         padding: 0;
    //         margin-top: 0;
    //     }

    //     .columns:not(:last-child) {
    //         margin-bottom: calc(1.1rem - 0.75rem);
    //     }

    //     #company-bio {
    //         margin-top: 3.7rem;
    //     }

    //     #testimonial-container-2 {
    //         margin-bottom: 1rem;
    //     }

    //     .text {
    //         background-color: transparent;
    //         position: relative;
    //         line-height: 1.6rem;
    //         top: .5rem;
    //         left: 28rem;
    //         height: 26rem;
    //         //width: 15rem;
    //         text-align: center;
    //         font-size: 1rem;
    //         font-family: "Book Antiqua",serif;
    //     }

    //     .text-2 {
    //         background-color: transparent;
    //         position: relative;
    //         top: 4rem;
    //         left: 3.5rem;
    //         height: 26rem;
    //         width: 1rem;
    //         //margin-left: 1rem;
    //         text-align: left;
    //         // font-family: Perpetua Titling MT;
    //         font-size: .8rem;
    //     }

    //     h4 {
    //         font-style: italic;
    //         font-family: Bitter,serif;
    //         font-size: 1.5rem;
    //     }

    //     h3 {
    //         font-weight: bold;
    //         font-size: 1.3rem;
    //         font-family: Open Sans,sans-serif;
    //     }

    //     p {
    //         font-family: Open Sans,sans-serif;
    //         margin-top: 1rem;
    //         width: 40%;
    //         padding-top: 1rem;
    //         padding-bottom: 1rem;
    //     }

    //     .customer-photo {
    //         height: 32rem;
    //         width: 100%;
    //     }

    //     hr {
    //         color: black;
    //         width: .1rem;
    //         height: 15rem;
    //         margin-left: 28rem;
    //     }
    // }

    // // iPad Pro
    // @media only screen and (min-width: 50.01em) and (max-width: 64em){
    //     .box {
    //         background-color: black;
    //         position: absolute;
    //         top: 10rem;
    //         left: 35rem;
    //         height: 10.7rem;
    //         width: 25rem;
    //         opacity: 0.7;
    //     }

    //     .inner {
    //         position: absolute;
    //         color: white;
    //         top: 2rem;
    //         left: 3rem;
    //         font-family: Bitter,serif;
    //         font-weight: bold;
    //         font-size: 3.5rem;
    //     }

    //     .container {
    //         margin: 0 1px;
    //     }

    //     .columns:last-child {
    //         margin-bottom: 1rem;
    //     }

    //     .columns:not(:last-child) {
    //         margin-bottom: 0;
    //     }

    //     .columns.is-tablet {
    //         padding: 0.15rem;
    //     }

    //     .column {
    //         padding: 0;
    //     }

    //     .customer-photo {
    //         height: 19rem;
    //         width: 48rem;
    //     }

    //     .text {
    //         background-color: white;
    //         position: relative;
    //         left: 0.7rem;
    //         height: 19rem;
    //         width: 24rem;
    //         text-align: left;
    //         margin-top: 0.8rem;
    //         // font-family: Perpetua Titling MT;
    //         font-size: 0.85rem;
    //     }

    //     .text-2 {
    //         background-color: white;
    //         position: relative;
    //         height: 19rem;
    //         width: 30rem;
    //         margin-top: 1rem;
    //         text-align: left;
    //         // font-family: Perpetua Titling MT;
    //         font-size: 0.8rem;
    //     }

    //     h4 {
    //         margin-bottom: 0.5rem;
    //         margin-left: 1rem;
    //         font-style: italic;
    //         font-family: Bitter,serif;
    //     }

    //     h3 {
    //         margin-top: 1rem;
    //         margin-left: 1rem;
    //         font-weight: bold;
    //         font-size: 1.1rem;
    //         font-family: Open Sans,sans-serif;
    //     }

    //     p {
    //         padding: 0 1rem;
    //         font-family: Open Sans,sans-serif;
    //     }
    // }

    // // iPad
    // @media only screen and (min-width: 40.01em) and (max-width: 50em) {
    //     .box {
    //         background-color: black;
    //         position: absolute;
    //         top: 10rem;
    //         left: 20rem;
    //         height: 10.7rem;
    //         width: 25rem;
    //         opacity: 0.7;
    //     }

    //     .inner {
    //         position: absolute;
    //         color: white;
    //         top: 2rem;
    //         left: 3rem;
    //         font-family: Bitter,serif;
    //         font-weight: bold;
    //         font-size: 3.5rem;
    //     }

    //     .container {
    //         margin: 0 1px;
    //     }
        
    //     #testimonial-container-2 {
    //         flex-direction: column-reverse;
    //         display: flex;
    //     }

    //     h4 {
    //         margin-bottom: 0.5rem;
    //         margin-left: 1rem;
    //         font-style: italic;
    //         font-family: Bitter,serif;
    //     }

    //     h3 {
    //         margin-top: 1rem;
    //         margin-left: 1rem;
    //         font-weight: bold;
    //         font-size: 1.1rem;
    //         font-family: Open Sans,sans-serif;
    //     }

    //     p {
    //         padding: 0 1rem;
    //         font-family: Open Sans,sans-serif;
    //     }

    //     .columns:last-child {
    //         margin-bottom: 2rem;
    //     }
    // }

    // // Mobile
    // @media only screen and (max-width: 40em){
    //     .forest-photo {
    //         transform: scale(1.5);
    //         margin-top: 5rem;
    //     }

    //     .box {
    //         background-color: black;
    //         position: absolute;
    //         top: 10rem;
    //         left: 2.5rem;
    //         height: 8rem;
    //         width: 18rem;
    //         opacity: 0.7;
    //     }

    //     .inner {
    //         position: absolute;
    //         color: white;
    //         top: 2rem;
    //         left: 3.5rem;
    //         //font-family: Perpetua Titling MT;
    //         font-family: Bitter,serif;
    //         font-weight: bold;
    //         font-size: 2rem;
    //     }

    //     .container {
    //         margin: 0 1px;
    //     }

    //     #testimonial-container {
    //         margin-top: 4rem;
    //     }

    //     #testimonial-container-2 {
    //         flex-direction: column-reverse;
    //         display: flex;
    //     }

    //     h4 {
    //         margin-bottom: 0.5rem;
    //         margin-left: 1rem;
    //         font-style: italic;
    //         font-family: Bitter,serif;
    //     }

    //     h3 {
    //         margin-top: 1rem;
    //         margin-left: 1rem;
    //         font-weight: bold;
    //         font-size: 1.5rem;
    //         font-family: Open Sans,sans-serif;
    //     }

    //     p {
    //         padding: 0 1rem;
    //         font-family: Open Sans,sans-serif;
    //     }

    //     .columns:last-child {
    //         margin-bottom: 5.3rem;
    //     }
    // }
</style>
