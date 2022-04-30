import { useEffect, useState } from "react";
import { get } from "../httpClient/httpClient";
import { useParams } from "react-router-dom";

function ShowAdvertisementList(props) {
    const {category} = useParams()
    const [advertisements, setAdvertisements] = useState()

    useEffect((e) => {
        get("advertisement/get" + "?category=" + category,true,9093).then((response) => {
                response.json().then((json) => {
                    console.log(json)
                    setAdvertisements(json.advertisementList)
                })
        }).catch((e) => {
            console.log(e)
        } )
    }, [advertisements])


    if (props.loggedIn) {
        if (advertisements.length == 0) {
            <>
            <p>There are no advertisments in this Category</p>
            </>
        } else {
            return (
                <>
                    <ul>
                        {advertisements.map((element, i) => {
                            return (
                                <li key={i}>
                                    <a >{Object.entries(element)[0][1]}</a>
                                </li>
                            )
                        })}
                    </ul>
                
                </>
            )
        }
    } else {
        return null
    }

}

export default ShowAdvertisementList