import React from 'react'

function DisplayQuote ({ quote }) {
  return (
    <blockquote className="blockquote text-center">
      <p
        className="mb-0"
        id="text"
      >
        {quote.text}
      </p>
      <footer className="blockquote-footer">
        <cite
          id="author"
          title="Source Title"
        >
          {quote.author}
        </cite>
      </footer>
    </blockquote>
  )
}

export default DisplayQuote
