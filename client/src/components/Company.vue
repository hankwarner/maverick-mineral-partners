<template>
    <div>
        <main class="big-container">
            <v-content>
                <section class="container">
                    <!-- <img
                        src="../../public/images/forest.jpg"
                        alt="Stampede of horses"
                        class="horses-photo"
                    > -->
                    <div class="box">
                        <span class="inner">Company Overview</span>
                    </div>

                    <section class="inner-container">
                        <div class="individual-bio-container">
                            <span class="text" id="company-bio">
                                <h3>Maverick Mineral Partners</h3> <br>
                                <p>
                                    Located in the historic Daniels and Fisher Clock Tower in Denver, Colorado, Maverick Mineral Partners was founded in 
                                    2019 by Eric Heringer and John Jones. With a combined experience of almost a decade, Eric and John have fine-tuned what 
                                    a successful transaction looks like within the oil and gas industry. Whether you own an Overriding Royalty Interest, 
                                    Working Interest, Mineral Acreage or looking to Lease, Maverick Mineral Partners will walk you through what a transaction 
                                    looks like from start to finish while exploring all options with full transparency. Having a combined four hundred successful 
                                    transactions and acquiring over 5,000 acres in 5 different basins, the partners at Maverick Minerals have mastered the art of 
                                    personal touch while providing value that goes above just a dollar amount.
                                </p>
                                <p style="font-weight: bold;">
                                    LinkedIn: 
                                    <a class="linked-in-logo" href="https://www.linkedin.com/company/maverick-mineral-partners-llc?trk=public_profile_topcard_current_company">
                                        <font-awesome-icon size="2x" :icon="['fab', 'linkedin']" />
                                    </a>
                                </p>
                            </span>
                        </div>
                    </section>

                    <span class="photo-container" id="eric-photo">
                        <img
                            src="../../public/images/stock_employees.jpg"
                            alt="John Jones and Eric Heringer"
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

export default {
  components: {
    BottomBanner,
    PageFooter
  },
};
</script>


<style scoped lang="scss">
    .big-container {
        max-width: 100%;
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
    }
    
    .container {
        margin: 0 1px;
        // max-width: 100%;
        // background-size: cover;
        // background-position: center center;
        // background-attachment: fixed;
        // position: relative;
    }
    
    // .horses-photo {
    //     max-width: 100%;
    //     width: 100%;
    //     //height: auto;
    //     opacity: 0.9;
    //     object-fit: cover;
    //     object-position: 100% 40%;
    // }

    a {
        color: black;
    }

    .linked-in-logo {
        color: white;
    }

    // Desktop
    @media only screen and (min-width: 64.063em){
        .big-container {
            //background-image: url('../../public/images/clocktower_large_crop.jpg');
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
            //font-family: Perpetua Titling MT;
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
            //background-color: black;
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
            // font-family: Perpetua Titling MT;
        }

        // h2 {
        //     font-weight: bold;
        //     font-size: 2.3rem;
        //     font-family: Bitter,serif;
        // }

        h3 {
            font-weight: bold;
            font-size: 1.7rem;
            font-family: Open Sans,sans-serif;
            color: white;
            margin-top: 3%;
            margin-left: 25%;
            //margin-right: 20%;
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
            //background-color: black;
            position: absolute;
            top: 43rem;
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

        // .horses-photo {
        //     height: 35rem !important;
        //     transform: rotate(90deg);
        //     margin-top: 6rem;
        // }

        hr {
            color: black;
            width: .1rem;
            height: 15rem;
            margin-left: 28rem;
        }

        .eric-photo {
            top: 9rem;
        }
    }


    // iPad Pro
    @media only screen and (min-width: 50.01em) and (max-width: 64em) {
        .big-container {
            background-image: url('../../public/images/clocktower_vertical.jpg');
            background-attachment: scroll;
            overflow: scroll;
            overflow-x: hidden;
            //-webkit-overflow-scrolling: touch;
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
            //font-family: Perpetua Titling MT;
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
            // font-family: Perpetua Titling MT;
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
            //background-color: white;
            position: absolute;
            top: 95rem;
            left: 5.5rem;
            //right: 0.5rem;
        }

        .company-photo {
            width: 50rem;
            margin-top: 4rem;
            margin-bottom: 1rem;
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
        .big-container {
            background-image: url('../../public/images/clocktower_vertical.jpg');
            background-attachment: scroll;
            overflow: scroll;
            overflow-x: hidden;
            //-webkit-overflow-scrolling: touch;
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
            //font-family: Perpetua Titling MT;
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
            // font-family: Perpetua Titling MT;
        }

        .photo-container {
            //background-color: white;
            position: absolute;
            top: 85rem;
            left: 1rem;
            right: 1rem;
        }

        .company-photo {
            width: 35rem;
            margin-top: 3rem;
            margin-bottom: 1rem;
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
        .big-container {
            background-image: url('../../public/images/clocktower_vertical.jpg');
            background-attachment: scroll;
            overflow: scroll;
            overflow-x: hidden;
            //-webkit-overflow-scrolling: touch;
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
            //font-family: Perpetua Titling MT;
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
            // margin-bottom: 9rem;
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
            // font-family: Perpetua Titling MT;
        }

        .photo-container {
            //background-color: white;
            position: absolute;
            top: 85rem;
            left: 1rem;
            right: 1rem;
            // height: 20rem;
            // width: 25rem;
        }

        .company-photo {
            width: 28rem;
            margin-top: 3rem;
            margin-right: 1rem;
            margin-bottom: 4rem;
            box-shadow: -2px -2px 2px rgba(34,34,34,0.6);
            border-radius: 8px;
        }

        #company-bio {
            margin-bottom: 9rem;
            font-family: Open Sans,sans-serif !important;
        }
    }
</style>