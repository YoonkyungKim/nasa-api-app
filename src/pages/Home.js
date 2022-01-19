import React, { useEffect, useState } from 'react';
// import './style.css';
import api from '../api/api';
import Post from '../components/Post';

const Home = () => {
  
    const [result, setResult] = useState([]);

    let startDate = new Date();
    startDate.setDate(startDate.getDate() - 14);
    startDate = startDate.toISOString().split('T')[0];

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        console.log("waiting for api...");
        
        try {
            const data = await api.get('?', {
                params: {
                    start_date: startDate,
                    api_key: process.env.REACT_APP_NASA_API_KEY
                }
            });
            console.log(data.data);
            setResult(data.data);
        } catch (e) {
            console.error("api call error " + e);
        }        
    }

    return (
        <div className='homepage'>
            <Post data={result}/>
        </div>
    );
};
export default Home;