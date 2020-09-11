import React from 'react'

function DisplayQuote (props) {
  return (
    <blockquote className="blockquote text-center">
      <p
        className="mb-0"
        id="text"
      >
        {props.quote.text}
      </p>
      <footer className="blockquote-footer">
        <cite
          id="author"
          title="Source Title"
        >
          {props.quote.author}
        </cite>
      </footer>
    </blockquote>
  )
}

export default DisplayQuote
