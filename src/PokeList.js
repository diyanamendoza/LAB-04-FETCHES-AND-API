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
                    this.props.loadStatus ? 
                <Loader type="Circles" color="white" height={100} width={100}/>  
                :
                (array.map(entry => {
                    return <PokeItem 
                    key={entry.id}
                    {...entry}
                    />
                })) 
                // || (<h3>Boo. No results to show.</h3>)                
                }
            </div>
        )
    }
}
