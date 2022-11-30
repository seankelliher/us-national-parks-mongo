<template>
    <nav>
        <div class="nav-link">
            <router-link to="/parks-by-name">
                BY NAME
            </router-link>
        </div>
        <div class="nav-link">
            <router-link to="/parks-by-region">
                BY REGION
            </router-link>
        </div>
        <div class="nav-link">
            <router-link to="/parks-by-state">
                BY STATE
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavPart"
};
</script>
