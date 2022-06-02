import React from 'react';

function ProjectContainer() {
    return (
        <div>
            <div className="card">
                <h3>Movie Hunter</h3>
                <h4>Core technologies: HTML, CSS, JavaScript, jQuery,  Bootstrap, FontAwesome, Scrum methodology, Adobe Photoshop & Illustrator, Third-party APIs</h4>
                <ul>
                    <li>
                        Utilized The Movie Database API and The IMDB API to collect and organize movie information based on user searches and popularity
                    </li>
                    <li>
                        Provided rich relevant information including movie trailer, poster, availability, overview, cast, reviews, and recommendation
                    </li>
                </ul>
                <p><a href="https://github.com/anthonypacella/MovieHunter">Repository</a></p>
                <p><a href="https://anthonypacella.github.io/MovieHunter/">Deployed Application</a></p>   
            </div>

            <div className="card">
                <h3>Weather Dashboard</h3>
                <h4>Core technologies:  HTML, CSS, JavaScript, jQuery,  Bootstrap, FontAwesome</h4>
                <ul>
                    <li>
                        Utilized The OpenWeather API for users to search for weather and forecast information based on city names
                    </li>
                    <li>
                    Stored search history to local storage for the convenience usage
                    </li>
                </ul>
                <p><a href="https://github.com/banbanleelee/WeatherDashboard">Repository</a></p>
                <p><a href="https://banbanleelee.github.io/WeatherDashboard/">Deployed Application</a></p>   
            </div>
        </div>
        
    );
}

export default ProjectContainer;