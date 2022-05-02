import {Route, Routes, Switch} from "react-router-dom";
import LoginPage from "../components/login/loginPage";
import Body from "../components/body/body";
import SignUpPage from "../components/signup/signup";
import Categories from "../components/categories/categories";
import ShowAdvertisementList from "../components/advertisement/advertismentList";
import Advertisement from "../components/advertisement/advertisementInfo";
import CreateAdvertisement from "../components/advertisement/createAdvertisement";

function Main(props) {
    return (
        <div>
            <Routes>
                <Route path={"/LoginPage"} element={<LoginPage loggedIn={props.loggedIn} isLoggedin={props.isLoggedin}/>}></Route>
                <Route path={"/SignUp"} element={<SignUpPage/>}></Route>
                <Route path={"/FrontPage"} element={<Body loggedIn={props.loggedIn}/>}></Route>
                <Route path={"/Categories"} element={<Categories loggedIn={props.loggedIn}/>}></Route>
                <Route path={"/Categories/:category/advertisements"} element={<ShowAdvertisementList loggedIn={props.loggedIn}/>} />
                <Route path={"/advertisement/:id"} element={<Advertisement loggedIn={props.loggedIn}/>}/>
                <Route path={"/createAdvertisement"} element={<CreateAdvertisement loggedIn={props.loggedIn}/>}/> 
                <Route path={"/*"} element={<Body loggedIn={props.loggedIn}/>}></Route>
            </Routes>
        </div>
    )
}

export default Main;