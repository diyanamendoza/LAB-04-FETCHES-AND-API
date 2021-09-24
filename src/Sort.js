import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div className='dropdowns'>
                <p>Sort By</p>
                {
                <select onChange={this.props.categorySort}>
                    <option value='pokemon'>Name</option>
                    <option value='type'>Type</option>
                    <option value='shape'>Shape</option>
                    <option value='ability'>Ability</option>
                </select>
                }
                {
                <select onChange={this.props.sort}>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
                }

            </div>
        )
    }
}
