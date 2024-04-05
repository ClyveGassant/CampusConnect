import React, { Component } from 'react'
import '../Homepage.css'; // Make sure this path is correct

export default class Homepage extends Component {
    handleSearch = (event) => {
        event.preventDefault();
        // Process the search
      };
    render() {
        return (
        <div className="homepage">
            <h1 className="title">CampusConnect</h1>
            <h3 className="Select">Select a service:</h3>
            <div className="categories-left">
            <button>Men's Hair</button>
            <button>Women's Hair</button>
            <button>Nails</button>
            <button>DJ</button>
            
            </div>
            <div className="categories-right">
            <button>Catering</button>
            <button>Photography</button>
            <button>Tutoring</button>
            <button>Clothing</button>
            </div>
            <div className="search-container">
            <form onSubmit={this.handleSearch}>
                <input type="text" className="search-input" placeholder="Search for other services" />
                <button type="submit" className="search-button" />
            </form>
            </div>
        </div>
        );
    }
}