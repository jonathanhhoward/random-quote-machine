import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

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

function DisplayQuote (props) {
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
      '"' + props.quote.text + '" ' + props.quote.author
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
