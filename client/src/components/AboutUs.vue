<template>
    <div>
        <v-content>
            <section class="container">
                <img
                    src="../../public/images/mountains_sunrise.jpg"
                    alt="Mountains during sunrise"
                    class="mountains-photo"
                >
                <div class="box">
                    <span class="inner">About Us</span>
                </div>
            </section>

            <section class="container" id="bio-container">
                <div class="individual-bio-container">
                    <span class="photo-container" id="eric-photo">
                        <img
                            src="../../public/images/eric_heringer.jpg"
                            alt="Eric Heringer headshot"
                            class="headshots"
                            id="eric-headshot"
                        >
                    </span>
                    <span class="text" id="eric-text">
                        <h2>Eric Heringer</h2>
                        <h3>PARTNER</h3>
                        <h4>eheringer@mavmp.com</h4>
                        <h4>(303) 746-2353</h4>
                        <a href="https://www.linkedin.com/in/eric-heringer-a48b775a">
                            <font-awesome-icon size="2x" :icon="['fab', 'linkedin']" />
                        </a>
                        <p id="eric-text">
                            Eric was born and raised in Littleton, Colorado. 
                            He attended the University of St. Thomas in St. Paul, 
                            Minnesota where he graduated in 2016 with an undergrad 
                            in Finance. Soon after graduation, he would realize his 
                            true calling was in the Oil and Gas and wanted to pursue 
                            being a third generation landman in his family. Having a 
                            finance background has helped him start his own company 
                            but truly enjoys the many encounters with landowners and 
                            overseeing successful transactions of all shapes and sizes. 
                            When he is not in the office you can catch him playing pickup 
                            basketball or cruising on his snowboard.
                        </p>
                    </span>
                </div>
                <hr>
                <div class="individual-bio-container">
                    <span class="photo-container">
                        <img
                            src="../../public/images/john_jones.jpg"
                            alt="John Jones headshot"
                            class="headshots"
                            id="john-headshot"
                        >
                    </span>
                    <span class="text">
                        <h2>John Jones</h2>
                        <h3>PARTNER</h3>
                        <h4>jjones@mavmp.com</h4>
                        <h4>(706) 315–8394</h4>
                        <a href="https://www.linkedin.com/in/john-jones-3059ab90">
                            <font-awesome-icon size="2x" :icon="['fab', 'linkedin']" />
                        </a>
                        <p id="john-text">
                            John was born and raised in Columbus, Georgia just south of 
                            Atlanta. After graduating high school, John attended Auburn 
                            University which led him to pursue medical device sales for Depuy 
                            Synthesis. He quickly realized he wanted to explore more options 
                            outside of the south as well as the medical field. In 2014, John moved 
                            to Denver where he began to learn about the oil and gas industry. 
                            Since then, John has developed a passion working with mineral owners 
                            and other companies alike. When John is out of the office, you can find 
                            him in the great outdoors with his two dogs, Major and Otis. 
                        </p>
                    </span>
                </div>
            </section>
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
};
</script>


<style scoped lang="scss">
    .container {
        margin: 0 1px;
        max-width: 100%;
    }
    
    .mountains-photo {
        max-width: 100%;
        width: 100%;
        opacity: 0.9;
    }

    p {
        font-size: 1.1rem;
    }

    hr {
        color: black;
    }

    a {
        color: black;
    }


    // X-Large
    @media only screen and (min-width: 90.063em) {
        // .individual-bio-container {
        //     height: 28rem;
        //     width: 100rem;
        //     margin: 2rem 12.8rem;
        // }

        // .text {
        //     font-size: 5rem;
        // }
    }


    // Desktop
    @media only screen and (min-width: 64.063em){
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
            margin: 0 1px;
        }

        .mountains-photo {
            height: 35rem;
            object-fit: cover;
            object-position: top;
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
            background-color: white;
            position: absolute;
            top: 2rem;
            left: 42rem;
            height: 26rem;
            width: 38rem;
            text-align: left;
            // font-family: Perpetua Titling MT;
        }

        h2 {
            font-weight: bold;
            font-size: 2.3rem;
            font-family: Bitter,serif;
        }

        h3 {
            font-weight: bold;
            font-size: 1.3rem;
            // font-family: Open Sans,sans-serif;
            font-family: Bitter,serif;
        }

        p {
            // font-family: Open Sans,sans-serif;
            font-family: Bitter,serif;
            margin-top: 1rem;
        }

        .photo-container {
            background-color: white;
            position: absolute;
            top: 5rem;
            left: 15rem;
            height: 20rem;
            width: 25rem;
        }

        .headshots {
            height: 14rem;
            box-shadow: -2px -2px 2px rgba(34,34,34,0.6);
            border-radius: 8px;
        }

        hr {
            width: 35rem;
            margin-left: 32rem;
        }

        #eric-photo {
            top: 35rem;
        }

        #eric-text {
            top: 33rem;
        }
    }

    // iPad Pro
    @media only screen and (min-width: 50.01em) and (max-width: 64em) {
        .box {
            background-color: black;
            position: absolute;
            top: 10rem;
            left: 5rem;
            height: 10rem;
            width: 20rem;
            opacity: 0.7;
        }

        .inner {
            position: absolute;
            color: white;
            top: 2.8rem;
            left: 2.8rem;
            //font-family: Perpetua Titling MT;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 3rem;
        }

        .container {
            margin: 0 1px;
        }

        .individual-bio-container {
            padding: 0 2rem;
        }

        h2 {
            font-weight: bold;
            font-size: 2.3rem;
            font-family: Bitter,serif;
        }

        h3 {
            font-weight: bold;
            font-size: 1.3rem;
            // font-family: Open Sans,sans-serif;
            font-family: Bitter,serif;
        }

        p {
            // font-family: Open Sans,sans-serif;
            font-family: Bitter,serif;
            margin-top: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
        }

        #eric-text {
            margin-bottom: 3rem;
        }

        #eric-headshot {
            margin-top: 3rem;
        }

        hr {
            width: 30rem;
            margin: 0 17rem;
        }

        #john-text {
            margin-bottom: 5.5rem;
        }

        #john-headshot {
            margin-top: 2.5rem;
        }
    }

    // Tablet
    @media only screen and (min-width: 40.063em) and (max-width: 50em){
        .box {
            background-color: black;
            position: absolute;
            top: 10rem;
            left: 5rem;
            height: 10rem;
            width: 20rem;
            opacity: 0.7;
        }

        .inner {
            position: absolute;
            color: white;
            top: 3rem;
            left: 2.5rem;
            //font-family: Perpetua Titling MT;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 2.5rem;
        }

        .container {
            margin: 0 1px;
        }

        .individual-bio-container {
            padding: 0 2rem;
        }

        h2 {
            font-weight: bold;
            font-size: 2.3rem;
            font-family: Bitter,serif;
        }

        h3 {
            font-weight: bold;
            font-size: 1.3rem;
            //font-family: Open Sans,sans-serif;
            font-family: Bitter,serif;
        }

        p {
            //font-family: Open Sans,sans-serif;
            font-family: Bitter,serif;
            margin-top: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
        }

        #eric-text {
            margin-bottom: 3rem;
        }

        #eric-headshot {
            margin-top: 3rem;
        }

        hr {
            width: 30rem;
            margin: 0 8.5rem;
        }

        #john-text {
            margin-bottom: 5.5rem;
        }

        #john-headshot {
            margin-top: 2.5rem;
        }
    }


    // Mobile
    @media only screen and (max-width: 40em){
        .mountains-photo {
            margin-top: 6rem;
            transform: scale(1.2);
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
            //font-family: Perpetua Titling MT;
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 2.5rem;
        }

        #eric-headshot {
            margin-top: 5rem;
        }

        #john-headshot {
            margin-top: 3rem;
        }

        h2 {
            font-weight: bold;
            font-size: 2.3rem;
            font-family: Bitter,serif;
        }

        h3 {
            font-weight: bold;
            font-size: 1.3rem;
            // font-family: Open Sans,sans-serif;
            font-family: Bitter,serif;
        }

        p {
            // font-family: Open Sans,sans-serif;
            font-family: Bitter,serif;
            margin-top: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
            // margin-bottom: 9rem;
        }

        #eric-text {
            margin-bottom: 4.5rem;
        }

        hr {
            width: 15.3rem;
            margin-left: 4.3rem;
        }

        #john-text {
            //top: 33rem;
            margin-bottom: 9rem;
        }
    }
</style>
