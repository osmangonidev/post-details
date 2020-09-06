import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Posts from './Components/Posts/Posts';
import Header from './Components/Header/Header';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {

  const [posts,setPosts]=useState([]);

  useEffect(()=>{
      const postsUrl="https://jsonplaceholder.typicode.com/posts";
      fetch(postsUrl)
      .then(res=>res.json())
      .then(data=>setPosts(data))
  },[]);

 console.log(posts.length)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header></Header>
            {posts.map(item=><Posts post={item}></Posts>)}
            
          </Route>
          <Route path="/post/:id">
            <PostDetail></PostDetail>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
