import React, { Component } from 'react'

export default class PokeDetail extends Component {
    render() {
        return (
                <div className="poke-card">
                    <h3>{this.props.pokemon}</h3>
                    <img src={this.props.url_image} alt={this.props.id} />
                    <div className="poke-card-stats">
                    <h4>Type(s): {this.props.type_1}, {this.props.type_2}</h4>
                    <h4>Shape: {this.props.shape}</h4>
                    <h4>Abilities: {this.props.ability_1}, {this.props.ability_2}</h4>
                    <h4>Egg Groups: {this.props.egg_group_1}, {this.props.egg_group_2} </h4>
                    <h4>Defense: {this.props.defense}</h4>
                    <h4>Special Defense: {this.props.special_defense}</h4>
                    <h4>Attack: {this.props.attack}</h4>
                    <h4>Special Attack: {this.props.special_attack}</h4>
                    <a href="http://www.pokemon.com/us/pokedex/absol">Pokedex Profile</a>
                    </div>
                </div>
        )
    }
}
