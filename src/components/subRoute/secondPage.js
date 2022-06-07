import {Link, Outlet, useLocation, useNavigate} from "react-router-dom"

function SecondPage() {

    const location = useLocation()
    const navigate = useNavigate()

    return(
        <div>
            <h2>This is the second section of the subroute exampel</h2>
            <Link to={`${location.pathname}/thirdPage`}>Third section</Link> <br/>
            <button onClick={() => navigate(-1)}>Hide second section</button>
            <Outlet/>
            
        </div>
    )

}

export default SecondPage