import {Route, Routes, Switch} from "react-router-dom";
import LoginPage from "../components/login/loginPage";
import Body from "../components/body/body";
import SignUpPage from "../components/signup/signup";

function Main(props) {
    return (
        <div>
            <Routes>
                <Route path={"/LoginPage"} element={<LoginPage setLoggedIn={props.setLoggedIn}/>}></Route>
                <Route path={"SignUp"} element={<SignUpPage/>}></Route>
                <Route path={"/FrontPage"} element={<Body/>}></Route>
                <Route path={"/*"} element={<Body/>}></Route>
            </Routes>
        </div>
    )
}

export default Main;