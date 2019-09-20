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
  }

  handleClick = () => {
    let nextQuote
    do {
      nextQuote = quotes[getRandomIndex(quotes.length)]
    }
    while (nextQuote.text === this.state.quote.text)
    this.setState({ quote: nextQuote })
  }

  render () {
    return (
      <Container className="align-items-center d-flex vh-100" id="quote-box">
        <Jumbotron className="m-0 w-100">
          <ShowQuote quote={this.state.quote}/>
          <GetQuote onClick={this.handleClick}/>
          <TweetQuote quote={this.state.quote}/>
        </Jumbotron>
      </Container>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))

function ShowQuote (props) {
  return (
    <blockquote className="blockquote text-center">
      <p className="mb-0" id="text">{props.quote.text}</p>
      <footer className="blockquote-footer">
        <cite id="author" title="Source Title">{props.quote.author}</cite>
      </footer>
    </blockquote>
  )
}

function GetQuote (props) {
  return (
    <Button className="btn-sm float-right" id="new-quote"
            onClick={props.onClick} variant="secondary">
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
    <Button id="tweet-quote" className="btn-sm float-left" href={tweetQuoteURI}>
      <i className="fa fa-twitter"/> Tweet
    </Button>
  )
}

function getRandomIndex (arrayLength) {
  return Math.floor(Math.random() * arrayLength)
}
