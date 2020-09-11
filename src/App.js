import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import DisplayQuote from './components/DisplayQuote'
import GetQuote from './components/GetQuote'
import TweetQuote from './components/TweetQuote'
import getRandomQuote from './getRandomQuote'

function App () {
  const [quote, setQuote] = useState({})

  useEffect(() => {
    setQuote(prevQuote => getRandomQuote(prevQuote))
  }, [])

  function handleClick () {
    setQuote(prevQuote => getRandomQuote(prevQuote))
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
