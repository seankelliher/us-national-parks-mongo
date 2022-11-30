<template>
    <section>
        <PageIntro
            title="Welcome"
            intro="Since 1916, the National Park Service has safeguarded America's National Parks."
        />

        <div class="home-page">
            <div class="homepage-link">
                <router-link to="/parks-by-name">
                    Search Parks by Name
                </router-link>
            </div>

            <div class="homepage-link">
                <router-link to="/parks-by-region">
                    Search Parks by Region
                </router-link>
            </div>

            <div class="homepage-link">
                <router-link to="/parks-by-state">
                    Search Parks by State
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import PageIntro from "../components/PageIntro.vue";

export default {
    name: "ParksByName",
    components: {
        PageIntro
    }
};
</script>
