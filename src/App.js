import './App.css';
import React, {Component} from "react";
import ReactDOM from 'react-dom';

import Card1 from "./components/card1"
import deck from "./components/card2"

class App extends Component {
  constructor(){
    super()
    this.scoreTracker = (bool) => {
      if(bool){
        this.setState({score: this.state.score + 1})
      }
      else{
        this.setState({score: 0})
        this.reset()
      }
    };
    this.state = {score: 0, bestScore: 0, 
      cards: deck(this.scoreTracker, true)};
    this.randomize = (arr) => {
      //create a random assortment of cards
      //setState cards
      ReactDOM.render(this.state.cards, document.getElementById('deck'))

    };
    this.reset = () => {
      //for if the score gets reset to zero
      //remount new deck with their initial state
      this.setState({cards: deck(this.scoreTracker, true)}) && ReactDOM.unmountComponentAtNode(document.getElementById('deck')) 
      ReactDOM.render(this.state.cards, document.getElementById('deck'))
    }
    this.compareScore = (init, best) => {
      if(init > best){
        this.setState({bestScore: init})
      }
    };
  };
  componentDidMount(){
    //this.randomize(this.state.cards)
    //assign cards to "deck"
  }
  componentDidUpdate(){
    this.compareScore(this.state.score, this.state.bestScore);
    //this.randomize(this.cards);
  }
  render(){return (
    <div className="App">
      <header><h1>{this.state.score}</h1><h1>{this.state.bestScore}</h1></header>
      <span id="deck">
      <Card1 fn={this.scoreTracker} status={true} name="mouth"/>
      </span>
    </div>
  );}
  
}
// {/* <Card1 fn={this.scoreTracker} status={true} name="mouth"/> */}
export default App;
