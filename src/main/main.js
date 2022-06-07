import {Route, Routes} from "react-router-dom";
import LoginPage from "../components/login/loginPage";
import React from "react";
import Body from "../components/body/body";
//import Body from "../components/body/bodyAsClass"
import MoreBody from "../components/body/morebody";
import EvenMoreBody from "../components/body/evenMoreBody";
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
                <Route path={"/FrontPage/"} element={<Body loggedIn={props.loggedIn}/>}>
                    <Route path="/FrontPage/moreBody/" element={<MoreBody loggedIn={props.loggedIn}/>}>
                        <Route path="/FrontPage/moreBody/evenMoreBody/" element={<EvenMoreBody loggedIn={props.loggedIn}/>}></Route>
                    </Route>
                </Route>   
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