import axios from "axios";

const LoginApi = (username, password) => {


    return (
        axios.post("http://localhost:8090/api/v1/login", {username: username, password: password})
        .then((response) => {
            return response
        }).catch((error) => {
            return error.response;
        })
    )
}

export default LoginApi;