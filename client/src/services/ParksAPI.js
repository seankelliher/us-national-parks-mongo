import API from "./API.js";

export default {
    getParks () {
        return API().get("park");
    }
};