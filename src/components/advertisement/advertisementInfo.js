import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../httpClient/httpClient";


function Advertisement(props) {
    const {id} = useParams()
    const [advertisement, setAdvertisement] = useState([])

    useEffect((e) => {
        get("advertisement/getByID" + "?id=" + id, true, 9093).then((response) => {
            response.json().then((json) => {
                if (json.advertisement.imgURL == null) {
                    json.advertisement.imgURL = ""
                }
                setAdvertisement(json.advertisement)
                console.log(json.advertisement)
            })
        })
    })


    if (props.loggedIn) {
        console.log(advertisement);
        return (
            <>
            <h1>{advertisement.headerText}</h1>
            <img src={advertisement.imgURL} alt="No image"></img>
            <p>Category: {"" + advertisement.category} Type: {"" + advertisement.type}</p>
            <p>{advertisement.text}</p>
            <p>Price: {advertisement.price} DKK</p>
            <p>Phonenumber: {advertisement.mobile}</p>              
            </>
        )
    }
    else {
        return null
    }
}

export default Advertisement