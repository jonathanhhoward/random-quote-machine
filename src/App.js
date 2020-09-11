import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import DisplayQuote from './DisplayQuote'
import GetQuote from './GetQuote'
import getRandomIndex from './getRandomIndex'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: {},
      url: 'quotes.json'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.getQuote()
  }

  handleClick () {
    this.getQuote()
  }

  getQuote () {
    fetch(this.state.url).then(response => response.json()).then(quotes => {
      this.setState(state => {
        let nextQuote
        do {
          nextQuote = quotes[getRandomIndex(quotes.length)]
        }
        while (nextQuote.text === state.quote.text)
        return { quote: nextQuote }
      })
    }).catch(error => console.error(error))
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

function TweetQuote (props) {
  const tweetQuoteURI = 'https://twitter.com/intent/tweet?text=' +
    encodeURIComponent(
      '"' + props.quote.text + '" ' + props.quote.author
    )
  return (
    <Button id="tweet-quote" className="btn-sm float-left" href={tweetQuoteURI}>
      <i className="fa fa-twitter"/> Tweet
    </Button>
  )
}
