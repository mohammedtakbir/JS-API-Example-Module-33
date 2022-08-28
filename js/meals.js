loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
displayMeals = (meals) => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 190)}</p>
            </div>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
    })
}


searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchInput = searchField.value;
    searchField.value = '';
    loadMeals(searchInput)
}

loadMealDetail = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showMealDetail(data.meals[0]))
}
showMealDetail = (meal) => {
    console.log(meal)
    const mealDetail = document.getElementById('meal-detail');
    mealDetail.innerHTML = ''
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
            the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetail.appendChild(div)
}

loadMeals('')
