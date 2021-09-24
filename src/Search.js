import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className='form-container'>
                <form onSubmit={this.props.submit} id="searchform">
                    <input onChange={this.props.input} placeholder='Enter query, then select search type '></input>
                    <p>Search Type</p>
                        {
                        <select onChange={this.props.categorySearch}>
                            <option value='pokemon'>Name</option>
                            <option value='type'>Type</option>
                            <option value='shape'>Shape</option>
                            <option value='ability'>Ability</option>
                        </select>
                        }
                    <button>Search</button>
                </form>
                <button onClick={this.props.reset}>Reset</button>
                
            </div>
        )
    }
}
