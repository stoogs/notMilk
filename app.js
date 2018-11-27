
    function loadRecipe(nut){

    let parent = document.querySelector(".recipe");
    parent.innerHTML = ''
    let recipeTitle = document.createElement('h1')
    recipeTitle.textContent = `${nut} nuts`
    let nutCalories = document.createElement('h4')
    nutCalories.textContent = `8 calories per nut`
    parent.appendChild(recipeTitle)
    parent.appendChild(nutCalories)
    console.log('hey')

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(data => {
        passData(data)
    });



    function passData(data){
      console.log('function', data)
    }


}