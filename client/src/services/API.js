import axios from "axios";
export default() => {
    return axios.create({
        baseURL: `${process.env.PORT}` // Originally backticks and http://localhost:8081/.
    });
};

