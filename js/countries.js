loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}


displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        console.log(country)
        const div = document.createElement('div');
        div.classList.add('user')   
        div.innerHTML = `
            <p>Name: ${country.name.common}</p>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onclick="getCountryDetail('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(div)
    })
}

getCountryDetail = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country code'+ code)
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data[0]))
}
displayCountry = country => {
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML = `
    <h2>Details: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}

loadCountries()

// <p>Capital: ${country.capital?.length ?? 'No Capital'}</p>