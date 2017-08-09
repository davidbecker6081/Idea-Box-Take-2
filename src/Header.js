import React from 'react'
import IdeaCard from './IdeaCard'

export default class Header extends React.Component {
  constructor(props) {
    super()
    this.state = {
      titleInput: '',
      bodyInput: ''
    }
  }

  updateTitle(e) {
    this.setState({
      titleInput: e.target.value
    })
  }

  updateBody(e) {
    this.setState({
      bodyInput: e.target.value
    })
  }

  submitIdea() {
    const idea = {title: this.state.titleInput, body: this.state.bodyInput}

    this.props.updateIdeaCardArray(idea)

    this.setState({
      titleInput: '',
      bodyInput: ''
    })
  }

  render() {
    return (
      <div className="header">
        <h1>IdeaBoxReact</h1>

        <div className="input-container">
          <input type="text" onChange={this.updateTitle.bind(this)} value={this.state.titleInput} placeholder="Enter Title" id="title-input" />
          <input type="text" onChange={this.updateBody.bind(this)}  value={this.state.bodyInput} placeholder="Enter Body" id="body-input" />
          <input type="submit" value="Submit" onClick={this.submitIdea.bind(this)}/>
        </div>

      </div>
    )
  }
}
