import axios from "axios";

const SignupApi = (data) => {


    return (
        axios.post("http://localhost:8090/api/v1/user/post", data)
        .then((response) => {
            return response
        }).catch((error) => {
            return error.response;
        })
    )
}

export default SignupApi;