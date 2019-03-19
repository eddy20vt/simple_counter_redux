import React, { Component } from 'react';
import Button from './components/button'
import Counter from './components/counter'
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = { 
      counter: 0
    };
  }
  onIncrementClick = () =>{
    this.props.dispatch({type: "INCREMENT"});
  }

  onDecrementClick = () =>{
    this.props.dispatch({type: "DECREMENT"});
  }

  render() {
    return (
      <div className="App">
        {'Mi contador'}
        <div>
          <Button 
            text='+'
            onClick={this.onIncrementClick}
          />
          <Counter value={this.props.counter}/>
          <Button
          text='-'
            onClick={this.onDecrementClick}
          />
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) =>({
  counter: state.counter
});

export default connect(mapStatetoProps)(App);
