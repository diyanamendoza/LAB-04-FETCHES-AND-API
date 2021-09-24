import React, { Component } from 'react'
import PokeList from './PokeList.js'
import Search from './Search.js'
import request from 'superagent'
import Sort from './Sort.js'

export default class SearchPage extends Component {
//state things
    state = {
        pokeData: [],
        query: '',
        sortOrder: 'asc',
        category: 'pokemon',
        isLoading: false,
    }

//fetch the poke data function
    fetchSearch = async () => {
        try { 
            this.setState({ isLoading: true })
            const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.category}&direction=${this.state.sortOrder}`);
            // const body = await response.body;
            // console.log(body);
            this.setState({
                pokeData: response.body.results,
                isLoading: false,
            });
        } catch(e) {
            console.log(e.message)
        }
    }

//load the data
    componentDidMount = async () => {
        await this.fetchSearch();
    }

//handling functions
    handleSubmit = async (e) => {
        e.preventDefault();
        await this.fetchSearch();
    }

    handleChange = (e) => {
        this.setState({
            query: e.target.value});
    }

    handleReset = async () => {
        await this.setState({
            query: '',
            category: 'pokemon'});
        await this.fetchSearch();
        }

    handleSort = async (e) => {
        await this.setState({
            sortOrder: e.target.value
        });
        await this.fetchSearch();
    }

    handleCatSort = async (e) => {
        await this.setState({
            category: e.target.value
        });
        await this.fetchSearch();
    }

//render
    render() {
        return (
            <div className="search-page">
                <h1>Pokemon Search Party</h1>
                <Search 
                    submit={this.handleSubmit}
                    input={this.handleChange}
                    reset={this.handleReset}
                />
                <Sort 
                    sort={this.handleSort}
                    categorySort={this.handleCatSort}
                />
                <PokeList 
                    data={this.state.pokeData}
                    loadStatus={this.state.isLoading}
                />

            </div>
        )
    }
}
