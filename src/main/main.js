import {Route, Routes, Switch} from "react-router-dom";
import LoginPage from "../components/login/loginPage";
import Body from "../components/body/body";
import SignUpPage from "../components/signup/signup";
import Categories from "../components/categories/categories";
import ShowAdvertisementList from "../components/advertisement/advertismentList";
//import Categories from "../components/categories/categories";

function Main(props) {
    return (
        <div>
            <Routes>
                <Route path={"/LoginPage"} element={<LoginPage setLoggedIn={props.setLoggedIn}/>}></Route>
                <Route path={"SignUp"} element={<SignUpPage/>}></Route>
                <Route path={"/FrontPage"} element={<Body/>}></Route>
                <Route path={"/Categories"} element={<Categories loggedIn={props.loggedIn}/>}></Route>
                <Route path={"/Categories/:category/advertisements"} element={<ShowAdvertisementList loggedIn={props.loggedIn}/>} />
                <Route path={"/*"} element={<Body/>}></Route>
            </Routes>
        </div>
    )
}

export default Main;