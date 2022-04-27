import {useState} from "react";
import {useEffect} from "react";
import { get } from "../httpClient/httpClient";
//import {useNavigate} from "react-router-dom";

function Categories(props) {
    const [categories, setCategories] = useState({})

    useEffect(() => {
        get("advertisement/categories", true, 9093).then((response) => {
          if (response.status == 200) {
            response.json().then((e) => {
              console.log(e)
            })
          }
        })
      }, [])

    //const navigate = useNavigate()

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