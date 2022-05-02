import { useEffect, useState } from "react";
import { get } from "../httpClient/httpClient";
import { useNavigate, useParams } from "react-router-dom";

function ShowAdvertisementList(props) {
    const {category} = useParams()
    const [advertisements, setAdvertisements] = useState([])
    const navigate = useNavigate()

    useEffect((e) => {
        get("advertisement/get" + "?category=" + category,true,9093).then((response) => {
                response.json().then((json) => {
                    console.log(json)
                    setAdvertisements(json.advertisementList)
                })
        }).catch((e) => {
            console.log(e)
        } )
    }, [])

    if (props.loggedIn) {
            return (
                <>
                <button onClick={() => navigate("/createAdvertisement")}>Create Ad</button>
                     <ul>
                    {advertisements.map((element, i) => {
                        return(
                        <li key={i}>
                            <a href={`/advertisement/${element.id.uuid}`}>{element.headerText + " | " + element.price + " DKK"}</a>
                        </li>)
                    })}
                </ul>
                
                </>
            )
        }
     else {
        return null
    }

}

export default ShowAdvertisementList