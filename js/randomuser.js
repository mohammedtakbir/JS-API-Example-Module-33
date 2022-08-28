loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}
displayUsers = (users) => {
    const usersContainer = document.getElementById('users-container');
    for(const user of users){
        console.log(user)
        const div = document.createElement('div');
        div.classList.add('user')
        div.innerHTML = `
            <h3>User Name:  ${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <p>Email: ${user.email}</p>
            <p>User Location: ${user.location.city}, ${user.location.country}</p>
        `;
        usersContainer.appendChild(div)
    }
} 
loadUsers()