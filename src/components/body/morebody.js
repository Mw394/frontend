import { Link, useLocation, Outlet } from "react-router-dom"

function MoreBody() {

    const location = useLocation()

    return (
        <div>
            <p>To see the advertisements navigate to the categories page using the button named To categories</p>
            <p>Here you will see a list of different categories and how many ads each category currently contains</p>
            <Link to={`${location.pathname}/evenMoreBody`}>Even more info</Link>
            <Outlet/>
        </div>
    )

}

export default MoreBody