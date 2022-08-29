const loadUserFetch = () => {
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
}
const loadUserAsync = async() => {
    const url = 'https://randomuser.me/api/?gender=female';
    const res = await fetch(url)
    const data = await res.json();
    displayUser(data.results[0])
}


const displayUser = users => {
    console.log(users)
}