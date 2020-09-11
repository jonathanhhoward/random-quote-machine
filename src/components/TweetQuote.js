import React from 'react'
import Button from 'react-bootstrap/Button'

function TweetQuote ({ quote }) {
  const query = '?text=' + encodeURIComponent(`"${quote.text}" ${quote.author}`)
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
