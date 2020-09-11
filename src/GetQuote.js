import React from 'react'
import Button from 'react-bootstrap/Button'

function GetQuote (props) {
  return (
    <Button className="btn-sm float-right" id="new-quote"
            onClick={props.onClick} variant="secondary">
      New Quote
    </Button>
  )
}

export default GetQuote
