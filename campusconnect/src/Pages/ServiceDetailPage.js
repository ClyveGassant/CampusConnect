import React, { Component } from 'react'
import '../ServiceDetailPage.css';
import profilePic from '../assets/campuscuts.jpg'; // Example profile pic import
import examplePhoto1 from '../assets/campuscuts.jpg';
import examplePhoto2 from '../assets/campuscuts.jpg'; // Example photo import
import examplePhoto3 from '../assets/campuscuts.jpg'; // Example photo import
import examplePhoto4 from '../assets/campuscuts.jpg';
import { Link } from "react-router-dom";

export default class Homepage extends Component {
    render() {
        return (
            <div className="service-detail">
                <div className="service-header">
                    <img src={profilePic} alt="Profile" className="profile-picture" />
                    <div className="title-rating-container">
                        <h1 className="service-title">Campus Cuts</h1>
                        <div className="rating">⭐⭐⭐⭐⭐</div>
                    </div>
                </div>
                <div className="description-box">
                    <div className="service-description">
                        <p>
                            Campus cuts is a place for all kind of people,
                            especially those that want to feel taken care of without all
                            the to-do of a salon.
                        </p>
                        <p className="prices">

                            Prices: $35 - $45
                        </p>
                    </div>
                    <Link to="/Message">
                        <button className="see-more">Mesage Campus Cuts</button>
                    </Link>

                    <div className="service-photos">
                        <h2 className='photo-title'>Photos:</h2>
                        <div className="photos-container">
                            <img src={examplePhoto1} alt="Service example" />
                            <img src={examplePhoto2} alt="Service example" />
                            <img src={examplePhoto3} alt="Service example" />
                            <img src={examplePhoto4} alt="Service example" />
                            <img src={examplePhoto4} alt="Service example" />
                        </div>
                    </div>
                    <button className="reviews">Leave a Review</button>
                </div>
            </div>
        );
    }
}

