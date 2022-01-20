import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import './style.css';
import Post from '../components/Post';

const baseURL = 'https://api.nasa.gov/planetary/apod?';

const Home = () => {

    const [result, setResult] = useState([]);

    let startDate = new Date();
    startDate.setDate(startDate.getDate() - 14);
    startDate = startDate.toISOString().split('T')[0];

    useEffect(() => {
        axios.get(baseURL, {
            params: {
                start_date: startDate,
                api_key: process.env.REACT_APP_NASA_API_KEY
            }
        }).then((res) => {
            setResult(res.data);
        }).catch((e) => {
            console.error("api error " + e);
        });
    }, []);

    return (
        <div className='homepage'>
            <Post data={result}/>
        </div>
    );
};
export default Home;