import {Link, useNavigate} from "react-router-dom";
import { get } from "../httpClient/httpClient";

function Header(props) {

    const navigate = useNavigate();

    const handleLogOut = () => {
        get("logout", true).then(() => {
            {props.setLoggedIn(false)
            navigate("/")}
        }).catch(() => console.log("Error"))
    }

    if (props.loggedIn) {
        return (
            <div>
                <h1>You are signed in</h1>
                <button onClick={handleLogOut}>Logout</button>
                <Link to={"FrontPage"}><button>To fronpage</button> </Link>
                <Link to={"categories"}><button>To categories</button> </Link>
            </div>
            )
    } else {
        return (
            <div>
                <h1>Please sign in to view content</h1>
                <Link to={"/LoginPage"}><button>Login</button></Link>
                <Link to={"/SignUp"}><button>Sign up</button></Link>
                <Link to={"FrontPage"}><button>To fronpage</button> </Link>
            </div>
        )
    }
}

export default Header;