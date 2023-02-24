const loadData = (inputText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data.meals))
}
const displayData = (meals) => {
    const mealsContainer = document.getElementById("meals-container");
    mealsContainer.innerHTML = '';
    meals.forEach((meal) => {
        // console.log(meal)
        const mealDiv = document.createElement("div");
        mealDiv.className = 'w-full shadow-lg p-4 border-2 border-gray-200'
        mealDiv.innerHTML = `
            <figure><img src="${meal.strMealThumb}" alt="car!" /></figure>
              <div class="card-body flex items-center content-center">
                 <h2 class="card-title font-bold">${meal.strMeal}</h2>
                 <p>How to park your car at your garage?</p>
            </div>
        `
        mealsContainer.appendChild(mealDiv)

    })
}

const searchFood = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = '';
    console.log(inputText)
    loadData(inputText)
}
loadData("fish");