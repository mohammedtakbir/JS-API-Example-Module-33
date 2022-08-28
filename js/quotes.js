const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
const displayQuote = (quote) => {
    const quoteFiled = document.getElementById('quote');
    // quoteFiled.innerText = '';
    // const h3 = document.createElement('h3');
    quoteFiled.innerText = quote.quote;
    // quoteFiled.appendChild(h3)
}