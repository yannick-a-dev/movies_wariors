import React from "react";

class Form extends React.Component {
    state = {
        firstName: "Essola",
        email: "essolayk@yahoo.fr"
    }

    handleChange = (event) => {
       //console.log(event.target.name)
       this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
        <div>
            pouletName: {this.state.firstName}
            <br />
            email: {this.state.email}
            <p>
                <input name="firstName" type="text" onChange= {this.handleChange}/>
            </p>
            <p>
                <input name="email" type="email" onChange= {this.handleChange} />
            </p>
        </div>
        )
    }
}

export default Form