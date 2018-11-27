    
    
function loadRecipe(nut){
  let parent = document.querySelector(".recipe");
    parent.innerHTML = ''
  let recipeTitle = document.createElement('h1')
    recipeTitle.textContent = `${nut} nuts`

      fetch(``)
      .then(response => response.json())
      .then(data => {
        console.log('function', data.calories)
        let nutCalories = document.createElement('h4')
        nutCalories.textContent = `${data.calories} calories per nut`
        let nutWeight = document.createElement('h4')
        nutWeight.textContent = `${data.totalWeight} grams per nut`
        parent.appendChild(recipeTitle)
        parent.appendChild(nutCalories)
        parent.appendChild(nutWeight)
    })  
}
