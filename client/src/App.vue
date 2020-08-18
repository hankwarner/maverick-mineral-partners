<template>
  <div id="app">
    <v-app>
      <v-content>
        <page-header />
        <router-view />
        <!-- <bottom-banner /> -->
        <!-- <page-footer /> -->
      </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header';
import BottomBanner from '@/components/BottomBanner';
import PageFooter from '@/components/Footer';

export default {
  name: 'App',
  components: {
    PageHeader,
    BottomBanner,
    PageFooter,
  },
};
</script>

<style lang="scss">
$primary: rgb(75, 57, 37);
$primary-invert: findColorInvert($primary);
$divider-background-color:  rgb(75, 57, 37);

// Setup $colors to use as bulma classes
$colors: (
  "primary": ($primary, $primary-invert),
);

.button.is-primary {
  background-color:rgb(75, 57, 37);
}

.button.is-primary:hover {
  background-color:rgb(145, 108, 67);
}

.button.is-success {
  background-color:rgb(145, 108, 67);
}

.button.is-success:hover {
  background-color:yellowgreen;
}

#app {
  font-family: 'Avenir', Bitter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  overflow-x: hidden;
}
body {
  position: relative
}

.label {
  color: white;
}

</style>
