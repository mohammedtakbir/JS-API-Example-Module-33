qouteBtn = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data.quote))
}
displayQuote = quote => {
    const quoteFiled = document.getElementById('quote');
    quoteFiled.innerText = quote;
}