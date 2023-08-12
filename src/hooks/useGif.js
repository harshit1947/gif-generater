import React, { useState } from 'react'
import {  useEffect } from 'react';
import axios from 'axios';
const API_KEY = "1yKNhs9RzaqcrNI5tQDdNWZ2UXyIQa1D";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
function useGif(tag) {
   
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    async function fetchData(tag) {
        setLoading(true);
        const url1 = (tag ? (`${url}&tag=${tag}`):(url));
        const { data } = await axios.get(url1);
        setLoading(false);
        setGif(data.data.images.downsized_large.url);

    }

    useEffect(() => {
        fetchData('car');
    }, [])
    return {gif,loading,fetchData};
}

export default useGif
