import axios from "axios";
export default() => {
    return axios.create({
        baseURL: "https://us-national-parks-mongo.herokuapp.com/"
    });
};

// On Heroku, baseURL is:
// https://us-national-parks-mongo.herokuapp.com/

// On localhost, baseURL is:
// http://localhost:8081/