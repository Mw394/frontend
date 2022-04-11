import {Link, useNavigate} from "react-router-dom";

function Login() {
    return (
        <div>
            <Link to={"/LoginPage"}>
            <button>
                Login
            </button>
            </Link>
            <button>
                Sign up
            </button>
        </div>
    )
}

export default Login;