import React from 'react'
import Button from 'react-bootstrap/Button'

function GetQuote ({ onClick }) {
  return (
    <Button
      className="btn-sm float-right"
      id="new-quote"
      onClick={onClick}
      variant="secondary"
    >
      New Quote
    </Button>
  )
}

export default GetQuote
