import React, { Component } from 'react';
import {authors} from './authors';
import {posts} from './posts';
import './App.css';

const Header = () => {
  return(
    <div>
      <h2>MAQE Forums</h2>
      <h3>Subtitle</h3>
      <h4>Posts</h4>
    </div>
  );
}

function getPostTimeLength(time){
  let x = time.split(" ");
  let post = x[0];
  let today = "2017-12-15";
  let todayYear = parseInt(today.slice(0,4));
  let postYear = parseInt(post.slice(0,4));
  let todayMonth = parseInt(today.slice(5,7));
  let postMonth = parseInt(post.slice(5,7));
  let todayDate = parseInt(today.slice(8,10));
  let postDate = parseInt(post.slice(8,10));
  if ( todayYear > postYear) {
    return  `⏲ ${todayYear - postYear}  ${(todayYear - postYear) > 1 ? 'years': 'year'}`;
  } else if (todayMonth > postMonth) {
    return `⏲ ${todayMonth - postMonth}  ${(todayMonth - postMonth) > 1 ? 'months': 'month'}`;
  } else if (todayDate > postDate) {
      if (todayDate - postDate > 6) {
        return `⏲ ${(todayDate - postDate) % 6}  ${(todayDate - postDate) % 6 > 1 ? 'weeks': 'week'}`;
      } else {
        return `⏲ ${(todayDate - postDate)}  ${(todayDate - postDate) > 1 ? 'days': 'day'}`;        
      }
  }
}

function getAuthorName(id){
  let res;
  authors.map( a => {
    if(a.id === id){
      res = a;
      return; 
    }
  });
  return res;
}

const Layout = () => {
  return(
    posts.map( (post, i) => {
      return(
      <div className="box" style={{background: `${i % 2 === 0 ? 'white' : '#EEE'}`}}>
      <div className="post-box">
        <img src={post.image_url}/>     
        <h4>{post.title}</h4>
        <p>{post.body}</p>   
        <div className="post-time">
          {
            getPostTimeLength(post.created_at)
          }
        </div>
      </div>
      <div className="line"></div>  
      <div className="author-box">
        <img src={getAuthorName(post.author_id).avatar_url}/>
        <div className="author-name">{getAuthorName(post.author_id).name}</div>
        <div className="author-regist">{getAuthorName(post.author_id).role}</div>
        <div className="author-place">{getAuthorName(post.author_id).place}</div>
      </div>
    </div>
      );
    })
  );
}

const PostList = () => {
  return(
    <>
    </>
  );
}

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Layout />
      </>
    );
  }
}

export default App;
