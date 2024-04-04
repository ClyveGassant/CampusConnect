import React, { Component } from 'react'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <h1 className='title'>CampusConnect</h1>
                <h3 className='Select'>Select a service</h3>
                <div class="categories_left">
                    <button>Men's Hair</button>
                    <button>Women's Hair</button>
                    <button>Nails</button>
                    <button>DJ</button>
                    <button>Clothing</button>

                </div>
                <div class="categories_right">
                    <button>Catering</button>
                    <button>Rental Spaces</button>
                    <button>Photography</button>
                    <button>Tutoring</button>

                </div>
            </div>
        )
    }
}