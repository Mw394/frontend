import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Body(props) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState("Nobody")
    const location = useLocation()

    useEffect(() => {
        console.log(name + " er logget ind")
    }, [name])

    console.log("Logged in? " + loggedIn)
        if (props.loggedIn) {
            return (
                <div>
                    <h1>Welcome {name} to this advertisement website. Here you can find advertisements of different kinds and even create your own ad</h1>
                    <Link to={`${location.pathname}/moreBody`}>More info</Link> <br/>
                    <Outlet/>
                    <button onClick={() =>  {
                        setLoggedIn(false)
                        //setName("Nobody")
                    }}>Logout</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Welcome to this advertisement website. Please sign up or login to see the content of this website</h1>
                    <button onClick={() => {
                        setLoggedIn(true)
                        setName("Martin")
                    }}>Login</button> 
                </div>
            )
        }

}

export default Body;