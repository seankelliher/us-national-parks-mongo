<template>
    <!--<HelloWorld />-->
    <HeaderPart />
    <NavPart />
    <!--<ul>
        Router Link Components
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/parks-by-name">Parks By Name</router-link></li>
    </ul>-->

    <!--Router View Component-->
    <router-view></router-view>
    <FooterPart />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue"
import HeaderPart from "./components/HeaderPart.vue";
import NavPart from "./components/NavPart.vue";
import FooterPart from "./components/FooterPart.vue";

export default {
    name: "App",
    components: {
        HeaderPart,
        NavPart,
        FooterPart
    }
};
</script>
