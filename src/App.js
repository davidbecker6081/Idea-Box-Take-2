import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import IdeaCardHolder from './IdeaCardHolder'


class App extends Component {
  constructor() {
    super()
    this.state = {
      ideaCards: []
    }
  }

  updateIdeaCardArray(newIdea) {
    const updatedArray = [newIdea, ...this.state.ideaCards]

    this.setState({
      ideaCards: updatedArray
    })
  }

  render() {
    return (
      <div className="App">
        <Header ideaCards={this.state.ideaCards} updateIdeaCardArray={this.updateIdeaCardArray.bind(this)}/>
        <IdeaCardHolder ideaCards={this.state.ideaCards} />
      </div>

    )
  }
}

export default App;
