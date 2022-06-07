import {Link, Outlet, useLocation, useNavigate} from "react-router-dom"

function ThirdPage() {

    const navigate = useNavigate()

    return(
        <div>
            <h3>This is the third section of the subroute exampel</h3>
            <button onClick={() => navigate(-1)}>Hide third section</button>
        </div>
    )

}

export default ThirdPage