import {Link, Outlet, useLocation} from "react-router-dom"

function FirstPage() {

    const location = useLocation()

    return(
        <div>
            <h1>This is the first section of the subroute exampel</h1>
            <Link to={`${location.pathname}secondPage`}>Second section</Link>
            <Outlet/>
        </div>
    )

}

export default FirstPage