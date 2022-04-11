import {useState} from "react";
import { post } from "../httpClient/httpClient";
import {useNavigate} from "react-router-dom";


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
       post("signup", {userName: username, email: email, password: password}, true).then(navigate("/LoginPage")).catch((e) => console.log(e))         
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