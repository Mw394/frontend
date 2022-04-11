import {useState} from "react";
import { post } from "../httpClient/httpClient";
import {useNavigate} from "react-router-dom";


function LoginPage(props) {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChange = (e) => {
        const {name, value} = e.target

        if (name === "username") {
            setUsername(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setLoggedIn(true);
       post("login", getPayload(), true).then(navigate("/FrontPage")).catch((e) => console.log(e))         
    }

    const getPayload = () => {
        return {credential: username, password: password}
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" onChange={handleOnChange} name="username"></input>
                <input placeholder="password" type={"password"} onChange={handleOnChange} name="password"></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;