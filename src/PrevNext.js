import React, { Component } from 'react'

export default class PrevNext extends Component {
    render() {
        return (
            <div className="pagination">
                { this.props.currentPage !== 1 && <button onClick={this.props.prev}>Prev</button>}
                <span id="page">Page: {this.props.currentPage}</span>
                { this.props.currentPage === 41 || <button onClick={this.props.next}>Next</button>}
                {/* { array.length > 20 || <button onClick={this.props.next}>Next</button>} */}
            </div>
        )
    }
}
