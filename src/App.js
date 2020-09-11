import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import DisplayQuote from './DisplayQuote'
import GetQuote from './GetQuote'
import TweetQuote from './TweetQuote'
import getRandomIndex from './getRandomIndex'
import quotes from './quotes'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { quote: {} }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.getRandomQuote()
  }

  handleClick () {
    this.getRandomQuote()
  }

  getRandomQuote () {
    this.setState(state => {
      let nextQuote
      do {
        nextQuote = quotes[getRandomIndex(quotes.length)]
      }
      while (nextQuote.text === state.quote.text)
      return { quote: nextQuote }
    })
  }

  render () {
    return (
      <Container className="align-items-center d-flex vh-100" id="quote-box">
        <Jumbotron className="m-0 w-100">
          <DisplayQuote quote={this.state.quote}/>
          <GetQuote onClick={this.handleClick}/>
          <TweetQuote quote={this.state.quote}/>
        </Jumbotron>
      </Container>
    )
  }
}

export default App
