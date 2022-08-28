loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

displayUsers = users => {
    const usersContainer = document.getElementById('users-container');
    users.forEach(user => {
        console.log(user)
        const usersDiv = document.createElement('div');
        usersDiv.classList.add('user')
        usersDiv.innerHTML = `
            <img src="${user.picture.thumbnail}">
            <h3>User Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <h5>Email: ${user.email}</h5>
            <h5>User Location: ${user.location.city}, ${user.location.country}</h5>
        `;
        usersContainer.appendChild(usersDiv);
    })
}

loadUsers();