import React from 'react'
import Button from 'react-bootstrap/Button'

function TweetQuote (props) {
  const query = encodeURIComponent('"' + props.quote.text + '" ' + props.quote.author)
  const tweetQuoteURI = 'https://twitter.com/intent/tweet?text=' + query

  return (
    <Button
      id="tweet-quote"
      className="btn-sm float-left"
      href={tweetQuoteURI}
    >
      <i className="fa fa-twitter"/> Tweet
    </Button>
  )
}

export default TweetQuote