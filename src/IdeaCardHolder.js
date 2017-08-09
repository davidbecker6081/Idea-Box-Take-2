import React from 'react'
import IdeaCard from './IdeaCard'

export default class IdeaCardHolder extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const { ideaCards } = this.props
    console.log(ideaCards);

    return (
      <section>
        {ideaCards.map((idea, i) =>
          <IdeaCard key={i} titleInput={idea.title} bodyInput={idea.body}/>
        )}
      </section>
    )
  }
}
