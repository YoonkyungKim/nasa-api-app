import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod',
    // headers: {
    //     'x-app-key': process.env.REACT_APP_NASA_API_KEY,
    // }
});