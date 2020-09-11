import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import DisplayQuote from './DisplayQuote'
import GetQuote from './GetQuote'
import TweetQuote from './TweetQuote'
import getRandomIndex from './getRandomIndex'
import quotes from './quotes'

function App () {
  const [quote, setQuote] = useState({})

  useEffect(() => getRandomQuote(), [])

  function handleClick () {
    getRandomQuote()
  }

  function getRandomQuote () {
    setQuote(prevQuote => {
      let nextQuote
      do {
        nextQuote = quotes[getRandomIndex(quotes.length)]
      }
      while (nextQuote.text === prevQuote.text)
      return nextQuote
    })
  }

  return (
    <Container className="align-items-center d-flex vh-100" id="quote-box">
      <Jumbotron className="m-0 w-100">
        <DisplayQuote quote={quote}/>
        <GetQuote onClick={handleClick}/>
        <TweetQuote quote={quote}/>
      </Jumbotron>
    </Container>
  )
}

export default App
