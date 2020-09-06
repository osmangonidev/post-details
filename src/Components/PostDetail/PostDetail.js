import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./PostDetail.css"
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {id}=useParams();
    const [post,setPost]=useState({});
    useEffect(()=>{
        const postUrl=`https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(postUrl)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[]);
    
    const [comments,setComments]=useState([]);
    useEffect(()=>{
         const commentsUrl=`https://jsonplaceholder.typicode.com/posts/${id}/comments`;
         fetch(commentsUrl)
         .then(res=>res.json())
         .then(data=>setComments(data))
    },[])


    
    const [display,setDisplay]=useState(false);
    function toggle(){
        if(display===false){
            setDisplay(true)
        }
        else{
            setDisplay(false);
        }
    
    }

   

    return (
        <div>
            <div id="post-detail-wrapper">
                <Link to='/'><ArrowBackIcon id='back-icon'></ArrowBackIcon></Link>
                <Box className="id" style={{display:'inline-block', marginRight:'200px'}} color='text.primary'><span className='highlight'>User Id:</span> {post.userId} </Box>
                <Box className="id"  style={{display:'inline-block', marginLeft:'200px'}} color='text.primary'><span className='highlight'>Post Id:</span> {post.id} </Box>
                <Box id='title' ><span className='highlight' color='text.primary'>Title: </span> {post.title} </Box>
                <Box id='description' color="text.secondary"> <span className='highlight'>Body:</span>  {post.body}</Box>
                <Button onClick={ toggle} variant="outlined" color="text.primary" >Click me to Show Comments</Button>
            </div>
            {display && <div id='comments-wrapper'> {comments.map(item=><Comments comment={item}></Comments>)}</div>}
        </div>
    );
};


export default PostDetail;