<template>
    <div>
        <ThePreloader />
    </div>
</template>

<script>
import animateMainPage from "./main_animations.js";
import ThePreloader from "./components/ThePreloader.vue";

export default {
components: {
    ThePreloader,
},
mounted() {
    animateMainPage();
},
};
</script>

<style lang="scss" scoped>
@import './style.css'; 

#mobile-chart {
    display: none;
    width: 100%;

    @media screen and (max-width: 575.98px) {
        display: block;
    }
}
</style>
