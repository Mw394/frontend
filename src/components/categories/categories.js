
import { useEffect, useState } from "react"
import { get } from "../../http/httpClient"
import { Link, useNavigate } from "react-router-dom"


function Categories(props) {
    const [categories, setCategories] = useState([])
    useEffect((e) => {
        get("categories", true, 9093).then((c) => {
            console.log(c);

            c.then((c) => {
                setCategories(c)
            })
        }).catch(console.log("Error"))
    }, [])
    const navigate = useNavigate()

    return <div>

    </div>
    /*
    if (props.loggedin) {
        return (
            <>
                <p>Categories</p>
                <table>
                    <tbody>
                        
                        {
                           categories.map((element, i ) => {
                            return (
                                <tr key={i}>
                                <td ><button onClick={() => navigate(`/categories/${Object.entries(element)[0][0].toLowerCase()}/advertisements`)}>{(Object.entries(element)[0][1])} {(Object.entries(element)[0][0])}</button></td>
                                </tr>
                            )
                        })
                        }

                    </tbody>
                </table>
            </>
        )
    }
    else {
        //window.location.href = "/"
        return null
    }
    */

}

export default Categories