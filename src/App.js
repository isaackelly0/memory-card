import './App.css';
import React, {Component} from "react";
import Card1 from "./components/card1"

class App extends Component {
  constructor(){
    super()
    this.state = {score: 0, bestScore: 0, cards: []};
    this.randomize = (arr) => {
      //create a random assortment of cards
      //setState cards
    };
    this.handleChange = (e) => {
      e.preventDefault();
    }
    this.scoreTracker = (bool) => {
      //setState score
      //if card was unclicked before, setState score +1
      //if card was already clicked, setScore to 0
      if(bool){
        this.setState({score: this.state.score + 1})
      }
      else{
        this.setState({score: 0})
      }
      
    };
    this.compareScore = (init, best) => {
      //compare score to best score
      //if init is better than best, setState bestScore
      if(init > best){
        this.setState({bestScore: init})
      }
    };

  };
  componentDidMount(){
    this.randomize(this.state.cards)
    //assign cards to "deck"
  }
  componentDidUpdate(){
    //this.scoreTracker(true);
    this.compareScore(this.state.score, this.state.bestScore);
    //this.randomize(this.cards);
    console.log("Updating...");

  }
  render(){return (
    <div className="App">
      <header><h1>{this.state.score}</h1><h1>{this.state.bestScore}</h1></header>
      <span className="deck">
        <Card1 fn={this.scoreTracker}/>
        <Card1 fn={this.scoreTracker}/>
        <Card1 fn={this.scoreTracker}/>
        <Card1 fn={this.scoreTracker}/>
        <Card1 fn={this.scoreTracker}/>
        <Card1 fn={this.scoreTracker}/>
 
      </span>
    </div>
  );}
  
}

export default App;
