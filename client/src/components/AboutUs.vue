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
                <div v-for="(employee, index) in employees" :key="employee.id" class="individual-bio-container">
                    <span class="photo-container">
                        <img
                            :src="require(`../../public/images/${employee.image}`)"
                            alt="Headshot"
                            class="headshots"
                        >
                    </span>
                    <span class="text">
                        <h2>{{employee.name}}</h2>
                        <h3>{{employee.title}}</h3>
                        <h4>{{employee.email}}</h4>
                        <h4>{{employee.phone}}</h4>
                        <a v-bind:href="employee.linkedIn">
                            <font-awesome-icon size="2x" :icon="['fab', 'linkedin']" />
                        </a>
                        <p>
                            {{employee.bio}}
                        </p>
                    </span>
                    <hr v-if="index != employees.length - 1">
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
import EmployeeService from '@/services/Employee';

export default {
    components: {
        BottomBanner,
        PageFooter
    },

    data() {
        return {
            loading: false,
            employees: [],
            error: null
        }
    },

    mounted() {
        this.getEmployees();
    },

    methods: {
        async getEmployees() {
            try {
                this.loading = true;

                var response = await EmployeeService.getEmployees();
                this.employees = response.data;
                console.log(this.employees);

            } catch(err) {
                console.log(err);
                this.error = err.message;

            } finally {
                this.loading = false;
            }
        },
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
            left: 42rem;
            height: 26rem;
            width: 38rem;
            text-align: left;
        }

        h2 {
            font-weight: bold;
            font-size: 2.3rem;
            font-family: Bitter,serif;
        }

        h3 {
            font-weight: bold;
            font-size: 1.3rem;
            font-family: Bitter,serif;
        }

        p {
            font-family: Bitter,serif;
            margin-top: 1rem;
        }

        .photo-container {
            background-color: white;
            position: absolute;
            margin-top: 5%;
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
            width: 50%;
            margin-left: 25%;
            position: relative;
            top: 100%
        }
    }

    // Tablet
    @media only screen and (min-width: 40.063em) and (max-width: 64em){
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

        .individual-bio-container:first-of-type{
            margin-top: 5%;
        }

        .individual-bio-container:last-of-type{
            margin-bottom: 10%;
        }

        h2 {
            font-weight: bold;
            font-size: 2.3rem;
            font-family: Bitter,serif;
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
            width: 50%;
            margin-left: 25%;
            margin-bottom: 5%;
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
            font-family: Bitter,serif;
            font-weight: bold;
            font-size: 2.5rem;
        }

        .individual-bio-container:first-of-type{
            margin-top: 15%;
        }

        .individual-bio-container:last-of-type{
            margin-bottom: 35%;
        }

        h2 {
            font-weight: bold;
            font-size: 2.3rem;
            font-family: Bitter,serif;
        }

        h3 {
            font-weight: bold;
            font-size: 1.3rem;
            font-family: Bitter,serif;
        }

        p {
            font-family: Bitter,serif;
            margin-top: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
        }

        hr {
            width: 75%;
            margin: 8% 0 10% 12.5%;
        }
    }
</style>
