document.addEventListener('DOMContentLoaded', function() {
  
})

  let loadRecipe = function(){
    let nut = 'hazelnut'
    let parent = document.querySelector(".recipe");
    let recipeTitle = document.createElement('h1')
    recipeTitle.textContent = `${nut} recipe`
    parent.appendChild(recipeTitle)
}