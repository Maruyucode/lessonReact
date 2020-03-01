import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
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

const Home = () => {
  return (
    <div>
      <h1>Welcom</h1>
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
