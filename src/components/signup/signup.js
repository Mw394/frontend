import {useState} from "react";
import { post } from "../httpClient/httpClient";
import {Navigate, useNavigate} from "react-router-dom";


function SignUpPage() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleOnChange = (e) => {
        const {name, value} = e.target

        if (name === "username") {
            setUsername(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "email") {
            setEmail(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       post("auth/signUp", {userName: username, email: email, password: password}, true, 9092).then((response) => {
        if (response.status == 200) {
            alert("Sucessfully signed up")
            navigate("/LoginPage")
        } else {
            alert("Failed to sign up")
        }
       })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="email" name="email" onChange={handleOnChange}></input>
                <input placeholder="username" name="username" onChange={handleOnChange}></input>
                <input placeholder="password" type={"password"} name="password" onChange={handleOnChange}></input>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpPage;