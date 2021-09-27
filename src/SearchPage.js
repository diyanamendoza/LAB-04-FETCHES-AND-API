import React, { Component } from 'react'
import PokeList from './PokeList.js'
import Search from './Search.js'
import request from 'superagent'
import Sort from './Sort.js'
import PrevNext from './PrevNext.js'

export default class SearchPage extends Component {
//state things
    state = {
        pokeData: [],
        query: '',
        sortOrder: 'asc',
        sortCategory: 'pokemon',
        searchCategory: 'pokemon',
        isLoading: false,
        currentPage: 1
    }

//fetch the poke data function
    fetchSearch = async () => {
        try { 
            this.setState({ isLoading: true })
            const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${this.state.searchCategory}=${this.state.query}&sort=${this.state.sortCategory}&direction=${this.state.sortOrder}&page=${this.state.currentPage}&perPage=20`);
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
            query: (e.target.value).toLowerCase(),
            currentPage: 1
        });
    }

    handleReset = async () => {
        await document.getElementById("searchform").reset();
        await this.setState({
            query: '',
            sortOrder: 'asc',
            searchCategory: 'pokemon',
            sortCategory: 'pokemon',
            currentPage: 1
        });
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
            sortCategory: e.target.value
        });
        await this.fetchSearch();
    }

    handleCatSearch = async (e) => {
        await this.setState({
            searchCategory: e.target.value
        });
        await this.fetchSearch();
    }

    handlePrev = async () => {
        await this.setState({ currentPage: this.state.currentPage - 1 })
        await this.fetchSearch();
    }

    handleNext = async () => {
        await this.setState({ currentPage: this.state.currentPage + 1 })
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
                    categorySearch={this.handleCatSearch}
                />
                <Sort 
                    sort={this.handleSort}
                    categorySort={this.handleCatSort}
                />
                <PrevNext
                    prev={this.handlePrev}
                    next={this.handleNext}
                    currentPage={this.state.currentPage}
                    data={this.state.pokeData}
                />
                <PokeList 
                    data={this.state.pokeData}
                    loadStatus={this.state.isLoading}
                />
            </div>
        )
    }
}
