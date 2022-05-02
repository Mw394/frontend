function Body(props) {

    console.log(props.loggedIn)
    if (props.loggedIn) {
        return (
            <div>
                <h1>Welcome to this advertisement website. Here you can find advertisements of different kinds and even create your own ad</h1>
                <p>To see the advertisements navigate to the categories page using the button named To categories</p>
                <p>Here you will see a list of different categories and how many ads each category currently contains</p>
                <p>If you wish to create a Ad do so using the Create ad button under categories</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Welcome to this advertisement website. Please sign up or login to see the content of this website</h1>
            </div>
        )
    }

}

export default Body;