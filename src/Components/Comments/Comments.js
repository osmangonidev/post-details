import React, { useState, useEffect } from 'react';
import './Comments.css'

const Comments = (props) => {
    const comment=props.comment;
    const {name,postId,id,email,body}=comment;
    const commentTitle=capitalizeFirstLetter(name);

    const [picture,setPicture]=useState([]);
    useEffect(()=>{
        fetch(`https://randomuser.me/api/?results=1&inc=picture&noinfo`)
        .then(res=>res.json())
        .then(data=>setPicture(data.results))
    },[])

    let url='';
    if(picture.length>0){
        url=picture[0].picture.large;
    }
    
    return (
        <div id='comment-section'>
            <div id='img-wrapper'>
                {<img src={url} alt=""/>}
            </div>
            <div id='description-wrapper'>
                <h3><span className="text-highlight">Title:</span>  {commentTitle}</h3>
                <h4><span className="text-highlight">Comment: </span> {body}</h4>
                <h4><span className="text-highlight">Email: </span> {email}</h4>
            </div>
        </div>
    );
};


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
export default Comments;