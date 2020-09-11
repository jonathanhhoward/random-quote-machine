import quotes from './quotes'
import getRandomIndex from './getRandomIndex'

function getRandomQuote (prevQuote) {
  let nextQuote
  do {
    nextQuote = quotes[getRandomIndex(quotes.length)]
  }
  while (nextQuote.text === prevQuote.text)
  return nextQuote
}

export default getRandomQuote
