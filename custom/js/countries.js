loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
displayCountry = countries => {
    const countryContainer = document.getElementById('country-container');
    countries.forEach(country => {
        // console.log(country)
       const countryDiv = document.createElement('div');
       countryDiv.classList.add('country');
       countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h2>
            <h3>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</h3>
            <button onclick="getCountryCode('${country.cca2}')">Details</button>
       `;
       countryContainer.appendChild(countryDiv);
    })
}

getCountryCode = (code) => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.json())
        .then(data => showCountryDetail(data[0]))
}
showCountryDetail = country => {
    const countryField = document.getElementById('country-detail');
    countryField.innerHTML = `
        <h3>${country.name.common}</h3>
        <img src="${country.flags.png}">
    `
}







loadCountry();