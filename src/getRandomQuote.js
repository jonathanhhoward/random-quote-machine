import quotes from './quotes'

function getRandomIndex (arrayLength) {
  return Math.floor(Math.random() * arrayLength)
}

function getRandomQuote (prevQuote) {
  let nextQuote
  do {
    nextQuote = quotes[getRandomIndex(quotes.length)]
  }
  while (nextQuote.text === prevQuote.text)
  return nextQuote
}

export default getRandomQuote
