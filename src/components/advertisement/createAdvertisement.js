import { useState } from "react";
import { post } from "../httpClient/httpClient";
import { useNavigate, } from "react-router-dom";

function CreateAdvertisement(props) {
    const navigate = useNavigate()

    const adTypes = ['SALE', 'PURCHASE', 'RENT']

    const categories = ['CAR', 'LEGO', 'ANIMAL', 'BICYCLE']

    const [category, setCategory] = useState("Car")
    const [type, setType] = useState("Sale")
    const [headerText, setHeaderText] = useState("")
    const [headerTextErrors, setHeaderTextErrors] = useState([""])
    const [text, setText] = useState("")
    const [textErrors, setTextErrors] = useState([""])
    const [price, setPrice] = useState("")
    const [priceErrors, setPriceErrors] = useState([""])
    const [mobile, setMobile] = useState("")
    const [mobileErrors, setMobileErrors] = useState([""])
    const [imgURL, setImgURL] = useState("")
    const [imgURLErrors, setImgURLErrors] = useState([""])

    const handleSubmit = (e) => {


        if (priceErrors.length > 0) {
            alert("Ad failed to be created due to price not being a number")
        }
        else if (textErrors.length > 0) {
            alert("Ad failed to be created due to body text being empty")
        }
        else if (headerTextErrors.length > 0) {
            alert("Ad failed to be created due to header text being empty")
        }
        else if (mobileErrors.length > 0) {
            alert("Ad failed to be created due to phone number being empty")
        }
        else if (imgURLErrors.length > 0) {
            alert("Ad failed to be created due to image URL being empty")
        }
        else {
            e.preventDefault();
            post("createAd", getPayload(), true, 8088).then((res) => {
                res.json().then((resp) => {

                    //navigate('/loggedIn')

                })

            }).catch(error => {
                console.log(error)
                alert("Failed to create ad")
            })
        }
    }

    const getPayload = () => {
        return { category: category.toUpperCase().trim(), type: type.toUpperCase().trim(), headerText: headerText, text: text, price: price, mobile: mobile, imgURL: imgURL ?? "" }
    }

    const handleOnChange = (e) => {

        const { name, value } = e.target

        if (name === "headerText") {
            setHeaderText(value)
            setHeaderTextErrors(validateInput(value))
        }
        else if (name === "category") {
            setCategory(value)
        }
        else if (name === "type") {
            setType(value)
        }
        else if (name === "text") {
            setText(value)
            setTextErrors(validateInput(value))
        }
        else if (name === "price") {
            setPrice(parseFloat(value))
            setPriceErrors(validatePrice(value))

        }

        else if (name === "mobile") {
            setMobile(value)
            setMobileErrors(validateInput(value))
        }

        else if (name === "imgURL") {
            setImgURL(value)
        }

    }

    const validatePrice = (value) => {

        if (!parseFloat(value)) {
            return ["Price needs to be a decimal number"]
        }
        return []
    }

    const validateInput = (value) => {
        if (value === "") {
            return ["Please fill out field"]
        }
        return []
    }

    if (props.loggedIn) {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Header text" name="headerText" type='text' value={headerText.value} onChange={handleOnChange} />
                    <div className="form-element-error">{headerTextErrors.map((error, index) => <p key={index}>{error}</p>)}</div>
                    <select name="category" onChange={handleOnChange}>
                        {categories.map((element, i) => {
                            return (
                                <option key={i} value={element}>{element}</option>
                            )
                        })}
                    </select>
                    <select name="type" onChange={handleOnChange}>
                        {adTypes.map((element, i) => {
                            return (
                                <option key={i} value={element}>{element}</option>
                            )
                        })}
                    </select>
                    <textarea placeholder="text" name="text" value={text.value} onChange={handleOnChange} rows="4" cols="50" style={{ resize: "none" }}></textarea>
                    <div className="form-element-error">{textErrors.map((error, index) => <p key={index}>{error}</p>)}</div>
                    <input placeholder="price" name="price" type='text' value={price.value} onChange={handleOnChange} />
                    <div className="form-element-error">{priceErrors.map((error, index) => <p key={index}>{error}</p>)}</div>
                    <input placeholder="mobile" name="mobile" type='text' value={mobile.value} onChange={handleOnChange} />
                    <div className="form-element-error">{mobileErrors.map((error, index) => <p key={index}>{error}</p>)}</div>
                    <input placeholder="Image Url" name="imgURL" type='text' value={imgURL.value} onChange={handleOnChange} />

                    <button >Create</button>
                </form>

            </>)
    }
    else {

        return null
    }


    
}

export default CreateAdvertisement