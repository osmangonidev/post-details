import React, { useState, useEffect } from 'react';
import {Link,BrowserRouter as Router} from "react-router-dom";
import './Posts.css'
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';


const Posts = (props) => {
    const post=props.post
    let count=0;
    const [picture,setPicture]=useState([]);
    useEffect(()=>{
        fetch('https://picsum.photos/v2/list?page=2&limit=100')
        .then(res=>res.json())
        .then(data=>setPicture(data))
        count++
    },[])
    let url='';
    if(picture.length>0){
        const random=Math.floor(Math.random()*100)
        url=picture[random].download_url;
    }
    console.log(picture.length,post.id)
    return (
        <div id="post-wrapper">
            <img src={url} />
            <Box color="info.main"><h2>{capitalizeFirstLetter(post.title)}</h2></Box>
            <Box color="text.secondary"><h4> {capitalizeFirstLetter(post.body)} </h4></Box>
            <Link to={`/post/${post.id}`} id='read-more' ><Button id="read-btn" variant="outlined" color="primary">Read more</Button></Link>
        </div>
    );
};


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
export default Posts;