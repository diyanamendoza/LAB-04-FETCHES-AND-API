import React, { Component } from 'react'
import request from 'superagent'
import PokeDetail from './PokeDetail.js';
import Loader from 'react-loader-spinner';


export default class DetailPage extends Component {
    state = {
        pokeToDetail: [],
        isLoading: false
    }

    componentDidMount = async () => {
        try {
            this.setState({ isLoading: true })
            const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.id}`);

            this.setState({ 
                pokeToDetail: [response.body],
                isLoading: false
            })
        }
        catch(e) {
            console.log(e.message)
        }

    }

    render() {
        console.log(this.state.pokeToDetail)
        const pokeDetailData = this.state.pokeToDetail;

        return (
            <div className="detail-page-container">
                {
                //if isLoading is true
                this.state.isLoading ? //show loader
                <Loader type="Circles" color="goldenrod" height={100} width={100}/>  
                //if isLoading is false
                : //show the stuff below
                pokeDetailData.map(entry => {
                        return <PokeDetail key={entry._id} {...entry}
                        />})
                }
            </div>
        )
    }
}
