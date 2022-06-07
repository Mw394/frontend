import React, {useState} from "react"

class Body extends React.Component {

    constructor(props) {
        super(props)
        this.state = {loggedIn: false, shouldUpdate: false}
    }

    componentDidMount() {
        console.log("Frontpage component mounted")
    }

    componentDidUpdate() {
        console.log("Frontpage component did update")
    }

    shouldComponentUpdate() {
        return this.state.shouldUpdate
    }

    componentWillUnmount() {
        console.log("Frontpage component unmounted")
    }

    render() {
        console.log("Logged in? " + this.state.loggedIn)
        if (this.state.loggedIn) {
            return (
                <div>
                    <h1>Welcome to this advertisement website. Here you can find advertisements of different kinds and even create your own ad</h1>
                    <p>To see the advertisements navigate to the categories page using the button named To categories</p>
                    <p>Here you will see a list of different categories and how many ads each category currently contains</p>
                    <p>If you wish to create a Ad do so using the Create ad button under categories</p>
                    <button onClick={() => this.setState({loggedIn: false})}>Logout</button> 
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Welcome to this advertisement website. Please sign up or login to see the content of this website</h1>
                    <button onClick={() => this.setState({loggedIn: true, shouldUpdate: true})}>Login</button> 
                </div>
            )
        }
    }
}

export default Body