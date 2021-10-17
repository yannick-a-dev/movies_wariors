import React from "react";
import axios from "axios";

import "./Characters.css"
import DisplayCharacter from "./DisplayCharacter";
class Characters extends React.Component {
    state = {
        characters: [],
        isloaded: false
    }
    getCharacters = async() => {

        const result = await axios.get(
            "https://akabab.github.io/starwars-api/api/all.json"
        //.then(res => this.setState({ characters: res.data, isloaded: true })) 
        )
        this.setState({characters: result.data, isloaded: true})
        console.log(result)
        //fetch("https://akabab.github.io/starwars-api/api/all.json")
            //.then(res => res.json())
           // .then(res => this.setState({ characters: res, isloaded: true }))
    }
    componentDidMount() {
        this.getCharacters()
    }
    render() {
        const {characters, isloaded} = this.state
        return (
            <>
            {
                !isloaded ?( <div>Loading...</div>) :  (
                <div>
                Characters code school
                <div>
                    {characters.map(character =>(
                       <DisplayCharacter character={character} key={character.id} />
                    ))}
                </div>
            </div>
                )}
            
            </>
        )
    }
}



export default Characters