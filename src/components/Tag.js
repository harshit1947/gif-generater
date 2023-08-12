import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = "1yKNhs9RzaqcrNI5tQDdNWZ2UXyIQa1D";
console.log(API_KEY);
function Tag() {
    
    // const [gif , setGif ] = useState('');
    // const [loading , setLoading] = useState(false);
    const [tag , setTag] = useState('car');
    const { gif,loading,fetchData}=useGif(tag);
    
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //      const {data} = await axios.get(url);
    //      setLoading(false);
    //      setGif(data.data.images.downsized_large.url);
         
    // }

    function changeHandler(event){
        setTag(event.target.value);
    }
    // useEffect( () => {
    //     fetchData();
    // },[])
  return (
    <div className='tag-gif-sec'>
        <h4 className='random-head'>Random {tag} Gif</h4>
        {
            loading ? (<Spinner/>) :(<img src ={gif}/>)
        }
        
        <input
            type='text'
            value={tag}
            onChange={changeHandler}
        />
        <button className='btn' onClick={(event)=>{
            fetchData(event.target.value);
        }}>Generate</button>
    </div>
  )
}

export default Tag

