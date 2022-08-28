loadMeals = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}
displayMeal = meals => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100 bg">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        foodContainer.appendChild(mealDiv);
    })
}
searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchInput = searchField.value;
    searchField.value = '';
    loadMeals(searchInput)
}
loadMealDetail = loadMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${loadMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showMealDetail(data.meals[0]))
}
showMealDetail = meal => {
    const mealDetail = document.getElementById('meal-detail');
    mealDetail.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body border border-0">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
        </div>
    `;
    mealDetail.appendChild(div)
    console.log(meal)
}



loadMeals('')

