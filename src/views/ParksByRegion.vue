<template>
    <PageIntro
        title="Parks By Region"
        intro="The U.S. National Park Service divides the United States into seven regions."
    />

    <div class="search">
        <label for="search-term"><h3>Search for your park by region</h3></label>
        <input
            id="search-term"
            v-model="searchTerm"
            type="text"
            name="search-term"
            placeholder="Eg., Pacific"
        >
    </div>

    <div class="search-messages">
        <p
            class="subtle"
            v-if="searchTerm!=='' && searchedParks.length===1"
        >   
            {{ searchedParks.length }} result for "{{ searchTerm }}"
        </p>
        <p
            class="subtle"
            v-if="searchTerm!=='' && searchedParks.length!==1"
        >
            {{ searchedParks.length }} results for "{{ searchTerm }}"
        </p>
        <p
            class="warn"
            id="error-msg"
        >
            A server error has occurred. Please try again later.
        </p>
    </div>
        
    <section>

        <div
            v-for="searchedPark in searchedParks"
            :key="searchedPark.pid"
            class="park"
        >

            <figure class="full">
                <img
                    :src="`/images/${searchedPark.image}.jpg`"
                    :alt="searchedPark.caption"
                >
                <figcaption>{{ searchedPark.caption }}</figcaption>
            </figure>

            <h3>{{ searchedPark.name }}</h3>

            <p>
                <strong>State: </strong>
                <span>{{ searchedPark.states.join(', ') }} </span>
                <br>
                <strong>Region: </strong> 
                <span>{{ searchedPark.regions.join(', ') }} </span>
                <br>
                <span>
                    <strong>Website:</strong>  
                    <a
                        :href="`${searchedPark.website}`"
                        target="_blank"
                    >
                        nps.gov/{{ searchedPark.pid }}
                    </a>
                </span>
            </p>

            <figure
                class="favorite"
                role="button"
                tabindex="0"
                aria-label="like icon, click to 'like' this park"
                @click="toggleFavorite(searchedPark)"
            >

                <img
                    v-if="getLocalStorage(searchedPark.pid) === true"
                    src="/images/favorite-icon-yes-fill.svg"
                    alt="filled icon, user liked this park"
                >
                <img
                    v-else
                    src="/images/favorite-icon-no-fill.svg"
                    alt="empty icon, user did not like this park yet"
                >
                </figure>

            </div>

    </section>

    <aside>
        <HelpBox
            title="Park regions."
            :list-items="listItems"
        />
        <MapBox title="Park regions map." />
    </aside>
</template>

<script>
import ParksAPI from "../services/ParksAPI.js";
import PageIntro from "../components/PageIntro.vue";
import HelpBox from "../components/HelpBox.vue";
import MapBox from "../components/MapBox.vue";

export default {
    name: "ParksByName",
    components: {
        PageIntro,
        HelpBox,
        MapBox
    },
    data () {
        return {
            searchTerm: "",
            parks: [],
            searchedParks: [],
            LocStore: "",
            listItems: ["Alaska", "Intermountain", "Midwest", "National Capital", "Northeast", "Pacific West", "Southeast"]
        }
    },
    watch: {
        searchTerm:function(val) {
            this.searchTerm = val
            if (val.length > 4) {
                let searchedParks = this.parks.filter((park) =>
                    park.regions.map((region) =>
                        region.substring(0, val.length).toLowerCase()).includes(
                            val.substring(0, val.length).toLowerCase()
                        )
                );
                this.searchedParks = searchedParks;
            }
        },
        LocStore:function(newLocStore, oldLocStore) {
            this.$forceUpdate(this.searchedParks);
        }
    },
    mounted () {
        this.loadParks();
    },
    methods: {
        async loadParks () {
            // Request items from MongoDB and wait for response.
            const response = await ParksAPI.getParks();
            // Check response.
            // If empty, display error on page.
            // If not empty, place response results into parks array, in data.
            const errorMsg = document.getElementById("error-msg");
            if (response.data.length === 0) {
                errorMsg.style.display = "block";
            } else {
                errorMsg.style.display = "";
                this.parks = response.data;
            }
        },
        toggleFavorite (parkName) {
            const parkIndex = this.searchedParks.indexOf(parkName);
            const parkPid = this.searchedParks[parkIndex].pid;
            const favorite = this.searchedParks[parkIndex].favorite;

            let status = JSON.parse(localStorage.getItem(parkPid));
            if (status === true) {
                localStorage.removeItem(`${parkPid}`);
                this.LocStore = localStorage.length;
            } else if (status === false || status === null) {
                localStorage.setItem(`${parkPid}`, true);
                this.LocStore = localStorage.length;
            }
        },
        getLocalStorage (parkName) {
            return JSON.parse(localStorage.getItem(parkName));
        }
    }
};
</script>
