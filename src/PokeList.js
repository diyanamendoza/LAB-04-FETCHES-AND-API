import React, { Component } from 'react'
import PokeItem from './PokeItem.js'
import Loader from 'react-loader-spinner';

//shout out to Stef for sharing the goods on getting the dynamic Loader going

export default class PokeList extends Component {
    render() {
        const array = this.props.data;
        // console.log(array);
        return (
            <div className="poke-container">
                {
                //if isLoading is true
                this.props.loadStatus ? 
                //show loader
                <Loader type="Circles" color="white" height={100} width={100}/>  
                //but if isLoading is false, check this condition
                :
                //if array is empty, show h3
                (array.length === 0) ? (<h2>No results to show :(</h2>)
                //else map it
                : (array.map(entry => { return <PokeItem key={entry.id} {...entry}/> })) 
                }
            </div>
        )
    }
}
