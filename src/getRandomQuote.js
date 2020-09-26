import quotes from './quotes';

function getRandomQuote(prevQuote) {
  let nextQuote;
  do {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    nextQuote = quotes[randomIndex];
  } while (nextQuote.text === prevQuote.text);
  return nextQuote;
}

export default getRandomQuote;
