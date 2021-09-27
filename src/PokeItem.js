import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokeItem extends Component {
    render() {
        return (
            <div className='one-poke'>
                <Link to={`/pokemon/${this.props._id}`}>
                    <img src={this.props.url_image} alt={this.props.id} />
                    <h3>{this.props.pokemon}</h3>
                    <h4>Type(s): {this.props.type_1}, {this.props.type_2}</h4>
                    <h4>Shape: {this.props.shape}</h4>
                    <h4>Abilities: {this.props.ability_1}, {this.props.ability_2}</h4>
                </Link>
            </div>
        )
    }
}
