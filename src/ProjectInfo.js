import project1 from './images/project1.png'
import project2 from './images/project2.png'

const projects = [
    {
        id: 1,
        image: project1,
        title: `Movie Hunter`,
        technology: `HTML, CSS, JavaScript, jQuery,  Bootstrap, FontAwesome, Scrum methodology, Adobe Photoshop & Illustrator, Third-party APIs`,
        description: `Utilized The Movie Database API and The IMDB API to collect and organize movie information based on user searches and popularity; \nProvided rich relevant information including movie trailer, poster, availability, overview, cast, reviews, and recommendation`,
        repo: `https://github.com/anthonypacella/MovieHunter`,
        link: `https://anthonypacella.github.io/MovieHunter/`,
    },
    {
        id: 2,
        image: project2,
        title: `Weather Dashboard`,
        technology: `HTML, CSS, JavaScript, jQuery,  Bootstrap, FontAwesome`,
        description: `Utilized The OpenWeather API for users to search for weather and forecast information based on city names; \nStored search history to local storage for the convenience usage`,
        repo: `https://github.com/banbanleelee/WeatherDashboard`,
        link: `https://banbanleelee.github.io/WeatherDashboard/`,
    }
]

export default projects