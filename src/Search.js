import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className='form-container'>
                <form onSubmit={this.props.submit}>
                    <input onChange={this.props.input} placeholder='Enter Pokemon Name'></input>
                    <button>Search</button>
                </form>
                <button onClick={this.props.reset}>Reset</button>
                
            </div>
        )
    }
}
