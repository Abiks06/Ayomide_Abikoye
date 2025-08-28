async function searchRecipe() {
  const query = document.getElementById("searchInput").value;
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const data = await res.json();
  const results = document.getElementById("results");
  results.innerHTML = "";

  if (data.meals) {
    data.meals.forEach(meal => {
      results.innerHTML += `
        <div class="recipe">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <h3>${meal.strMeal}</h3>
          <p>${meal.strArea} | ${meal.strCategory}</p>
          <a href="${meal.strSource || meal.strYoutube}" target="_blank">View Recipe</a>
        </div>
      `;
    });
  } else {
    results.innerHTML = "<p>No recipes found 😢</p>";
  }
}

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("darkModeToggle");
  btn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
