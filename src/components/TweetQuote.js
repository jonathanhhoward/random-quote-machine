import React from 'react'
import Button from 'react-bootstrap/Button'

function TweetQuote (props) {
  const query = '?text=' + encodeURIComponent(`"${props.quote.text}" ${props.quote.author}`)
  const tweetQuoteURI = 'https://twitter.com/intent/tweet' + query

  return (
    <Button
      id="tweet-quote"
      className="btn-sm float-left"
      href={tweetQuoteURI}
    >
      <i className="fa fa-twitter"/> Tweet Quote
    </Button>
  )
}

export default TweetQuote
