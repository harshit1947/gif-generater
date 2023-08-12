import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = "1yKNhs9RzaqcrNI5tQDdNWZ2UXyIQa1D";
// console.log(API_KEY);
function Random() {
    
    // const [gif , setGif ] = useState('');
    // const [loading , setLoading] = useState(false);
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //      const {data} = await axios.get(url);
    //      setLoading(false);
    //      setGif(data.data.images.downsized_large.url);
         
    // }

    // useEffect( () => {
    //     fetchData();
    // },[])
    const { gif,loading,fetchData}=useGif();
  return (
    <div className='random-gif-sec'>
        <h4 className='random-head'>Random Gif</h4>
        {
            loading ? (<Spinner/>) :(<img src ={gif}/>)
        }
        <button  className='btn' onClick={(event)=>{
            fetchData();
        }}>Generate</button>
    </div>
  )
}

export default Random
