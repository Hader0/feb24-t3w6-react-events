import React from "react";

// Function that capitalise's first letter of the Pokemon name
function capitalizeFirstLetter(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

class PokemonCard extends React.Component {
    constructor() {
        super();

        this.state = {
            pokemonName: "",
            pokemonImage: ""
        }
    }
    

    async componentDidMount() {
        let randomNumber = Math.ceil(Math.random() * 1025);
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
        let data = await response.json();

        this.setState({
            pokemonName: data.name,
            pokemonImage: data.sprites.front_default
        });
    }

    render() {
        return (
            <div className="pokemonCard">
                {this.state.pokemonName && this.state.pokemonImage ?
                // If condition is true, render this
                <>
                    <h1>{capitalizeFirstLetter(this.state.pokemonName)}</h1>
                    <img src={this.state.pokemonImage} />
                </>
                :
                // If condition is false, render this
                    <h1>Loading...</h1>
                }
            </div>
        );
    }
}

export default PokemonCard;