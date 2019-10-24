import React, { Component } from 'react';
import TodoContainer from './container/TodoContainer';
import GithubContainer from './container/GithubContainer';

export default class App extends Component{
  render(){
    return(
      <div>
        <TodoContainer />
        <GithubContainer />
      </div>
    )
  }
}