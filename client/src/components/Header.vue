<template>
     <b-navbar class="navbar is-fixed-top">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../../public/images/logo.jpg"
                    alt="Maverick Mineral Partners logo"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item>
                <router-link
                    class="nav-link"
                    to="/company">
                        Company Overview
                </router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link
                    class="nav-link"
                    to="/aboutus">
                        About Us
                </router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                <router-link
                    class="nav-link"
                    to="/testimonials">
                        Testimonials
                </router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                <router-link
                    class="nav-link"
                    to="/contact-us">
                        Contact Us
                </router-link>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <router-link
                            class="request-offer"
                            to="/request-offer">
                                <strong>Request an Offer</strong>
                        </router-link>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style scoped>
    a.navbar-item:hover {
        color:rgb(145, 108, 67);
    }

    .navbar-item img {
        max-height: 5rem;
    }

    a {
        font-size: 1.3rem;
        color: rgb(145, 108, 67);
    }

    .request-offer{
        color: white;
    }

</style>
