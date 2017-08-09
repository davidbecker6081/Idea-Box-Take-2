import React from 'react'
import './IdeaCard.css'

export default class IdeaCard extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <article className={this.props.titleInput}>
        <h2>
          {this.props.titleInput}
        </h2>

        <p>
          {this.props.bodyInput}
        </p>
      </article>
    )
  }
}
