import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="welcome">
                <h1>Welcome to the Pokemon Search Party</h1>
                <div className="enter-container">
                    <Link to="/pokemon">
                        <img src="/pikachu-happy.gif" alt="dancing pikachu" />
                        <button>Enter</button>
                    </Link>
                </div>
            </div>
        )
    }
}
