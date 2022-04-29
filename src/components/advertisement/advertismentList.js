import { useEffect, useState } from "react";
import { get } from "../httpClient/httpClient";
import { useParams } from "react-router-dom";

function ShowAdvertisementList(props) {
    const {category} = useParams()
    const [advertisements, setAdvertisements] = useState()

    useEffect((e) => {
        console.log(category)
            get(`advertisement/get?category=${category}`, true, 9093).then((response) => {
            if (response.status == 200) {
                response.json().then((json) => {
                    setAdvertisements(json.advertisementList)
                })
            } else {
                alert("Failed to get advertisements")
            }
        })
    })

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
        return (
            <p>Please login in to view advertisements</p>
        )
    }

}

export default ShowAdvertisementList