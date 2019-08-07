import React from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { quotes } from './quotes'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: quotes[getRandomIndex(quotes.length)],
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    let nextQuote
    do {
      nextQuote = quotes[getRandomIndex(quotes.length)]
    }
    while (nextQuote.text === this.state.quote.text)
    this.setState({ quote: nextQuote })
  }

  render () {
    return (
      <Container id="quote-box"
                 className="vh-100 d-flex align-items-center">
        <Jumbotron className="m-0 w-100">
          <ShowQuote quote={this.state.quote}/>
          <GetQuote onClick={this.handleClick}/>
          <TweetQuote quote={this.state.quote}/>
        </Jumbotron>
      </Container>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root'),
)

function ShowQuote (props) {
  return (
    <blockquote className="blockquote text-center">
      <p id="text" className="mb-0">{props.quote.text}</p>
      <footer className="blockquote-footer">
        <cite id="author" title="Source Title">{props.quote.author}</cite>
      </footer>
    </blockquote>
  )
}

function GetQuote (props) {
  return (
    <Button id="new-quote" variant="secondary" className="float-right btn-sm"
            onClick={props.onClick}>
      New Quote
    </Button>
  )
}

function TweetQuote (props) {
  const tweetQuoteURI = 'https://twitter.com/intent/tweet?text=' +
    encodeURIComponent(
      '"' + props.quote.text + '" ' + props.quote.author,
    )
  return (
    <Button id="tweet-quote" className="float-left btn-sm" href={tweetQuoteURI}>
      <i className="fa fa-twitter"/> Tweet
    </Button>
  )
}

function getRandomIndex (arrayLength) {
  return Math.floor(Math.random() * arrayLength)
}
