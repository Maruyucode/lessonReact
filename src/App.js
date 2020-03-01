import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { createStore } from 'redux';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="container text-center mt-5">
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/blog/:id" component={Blog}/>
      <Route exact path="/sum/:num1/:num2" component={Sum}/>
    </div>
  </BrowserRouter>
)

// action ?
const vote = (state=0, action) => {
  switch (action.type) {
    case 'ADD': return state + 1
    default : return state 
  }
}

// storeの定義
let store = createStore(vote);

const Home = () => {
  // storeのstateにactionをなげる
  store.dispatch({ type: 'ADD' });
  store.dispatch({ type: 'ADD' });
  store.dispatch({ type: 'ADD' });
  store.dispatch({ type: 'ADD' });
  store.dispatch({ type: 'ADD' });
  // storeのゲッター
  let vote = store.getState()
  return (
    <div>
      <h1>Welcom</h1>
      <p>{ vote }</p>
      <p>
        <Link to="/about">Aboutへ</Link>
      </p>
    </div>
  )
}

const About = () => {
  
  return (
    <div>
      <h1>About Page</h1>
      <p>{ store.getState().toString() }</p>
    </div>
  )
}

const Blog = (props) => {
  const { id }   = props.match.params;  // 分割代入？
  return (
    <div>
      <p>{ id }番目の記事</p>
    </div>
  )
}

const Sum = props => {
  console.log(props);
  const { num1, num2 } = props.match.params;
  return (
    <div>
      <p>{`${num1} + ${num2} = ${parseInt(num1) + parseInt(num2)}`}</p>
    </div>
  )
}

export default App;
