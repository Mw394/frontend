import {useState} from "react";
import {useEffect} from "react";
import { get } from "../httpClient/httpClient";
import {useNavigate} from "react-router-dom";
import './categories.css';


function Categories(props) {
    const [categories, setCategories] = useState({})

    function buttons() {
        return (
            Object.entries(categories).map((element, count) => {
                return (
                    <tr key={count}>
                        <td><button onClick={
                            () => 
                            navigate('/categories/ ' + element[0] + "/advertisements")
                            }>{element[0] + " " + element[1] }</button></td>
                    </tr>
                )
            })
        )
    }

    useEffect(() => {
        get("advertisement/categories", true, 9093).then((response) => {
          if (response.status == 200) {
            response.json().then((e) => {
              console.log(e)
              setCategories(e.categoryHashMap)
              console.log(categories)
            })
          }
        })
      }, [])

    const navigate = useNavigate()
    console.log(props.loggedIn)
    if (props.loggedIn) {
        return (
            <div id="categoryButtons">
                <p>Categories</p>
                {
                    buttons()
                }

            </div>
        )
    }
    else {
        //window.location.href = "/"
        return null
    }
    

}

export default Categories