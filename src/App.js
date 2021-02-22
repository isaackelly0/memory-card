import './App.css';
import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Board from "./components/Board";

class App extends Component {
  constructor(){
    super()
    this.state = {score: 0, bestScore: 0};
    this.scoreTracker = (bool) => {
      if(bool){
        this.setState({score: this.state.score + 1})
      }
      else{
        this.setState({score: 0})  
        this.reset()
      }
    };
    this.setBoard = (arr) => {
      ReactDOM.render(arr, document.getElementById('deck')) ;
    };
    this.reset = async () => { 
      await ReactDOM.unmountComponentAtNode(document.getElementById('deck')) 
      this.setBoard(<Board fn={this.scoreTracker}/>)
    }
    this.compareScore = (init, best) => {
      if(init > best){
        this.setState({bestScore: init})
      }
    };
  };
  componentDidMount(){
    this.setBoard(<Board fn={this.scoreTracker}/>) 
  }
  componentDidUpdate(){
    this.compareScore(this.state.score, this.state.bestScore);
  }
  render(){return (
    <div className="App container">
      <header className="row">
        <h1 className="col-sm-12 col-lg-8">Try not to click the same card twice!</h1> 
        <h3 className="col-sm-12 col-md-6 col-lg-2">Score:{this.state.score}</h3> 
        <h3 className="col-sm-12 col-md-6 col-lg-2">High score:{this.state.bestScore}</h3> 
      </header>
      <span id="deck">
      </span>
    </div>
  );}
  
}
export default App;
