let getMeals = document.querySelector(".get-meal")
let side = document.querySelector(".categeory");
let sideArea = document.querySelector(".Area")
let mealName = document.querySelector(".dish-name")
let foodDisc = document.querySelector(".food-making-tips")
let video = document.querySelector(".video");
let ingred = document.getElementById("ingredients");

getMeals.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {

            

            // document.removeChild(ingred);
            document.querySelector(".bootom-vide").style.display = 'flex';

            document.querySelector(".dish-show-or-not").style.display='flex';
            console.log(res.meals.strIngredient1)
            console.log(res.length)
            createMeal(res.meals[0])
            // dateModified
            // :
            // null
            // idMeal
            // :
            // "53014"
            // strArea
            // :
            // "Italian"
            // strCategory
            // :
            // "Miscellaneous"
            // strCreativeCommonsConfirmed
            // :
            // null
            // strDrinkAlternate
            // :
            // null
            // strImageSource
            // :
            // null
            // strIngredient1
            // :
            // "Water"
            // strIngredient2
            // :
            // "Sugar"
            // strIngredient3
            // :
            // "Yeast"
            // strIngredient4
            // :
            // "Plain Flour"
            // strIngredient5
            // :
            // "Salt"
            // strIngredient6
            // :
            // "Olive Oil"
            // strIngredient7
            // :
            // "Passata"
            // strIngredient8
            // :
            // "Mozzarella"
            // strIngredient9
            // :
            // "Oregano"
            // strIngredient10
            // :
            // "Basil"
            // strIngredient11
            // :
            // "Black Pepper"
            // strIngredient12
            // :
            // ""
            // strIngredient13
            // :
            // ""
            // strIngredient14
            // :
            // ""
            // strIngredient15
            // :
            // ""
            // strIngredient16
            // :
            // ""
            // strIngredient17
            // :
            // ""
            // strIngredient18
            // :
            // ""
            // strIngredient19
            // :
            // ""
            // strIngredient20
            // :
            // ""
            // strInstructions
            // :
            // "1 Preheat the oven to 230°C.\r\n\r\n2 Add the sugar and crumble the fresh yeast into warm water.\r\n\r\n3 Allow the mixture to stand for 10 – 15 minutes in a warm place (we find a windowsill on a sunny day works best) until froth develops on the surface.\r\n\r\n4 Sift the flour and salt into a large mixing bowl, make a well in the middle and pour in the yeast mixture and olive oil.\r\n\r\n5 Lightly flour your hands, and slowly mix the ingredients together until they bind.\r\n\r\n6 Generously dust your surface with flour.\r\n\r\n7 Throw down the dough and begin kneading for 10 minutes until smooth, silky and soft.\r\n\r\n8 Place in a lightly oiled, non-stick baking tray (we use a round one, but any shape will do!)\r\n\r\n9 Spread the passata on top making sure you go to the edge.\r\n\r\n10 Evenly place the mozzarella (or other cheese) on top, season with the oregano and black pepper, then drizzle with a little olive oil.\r\n\r\n11 Cook in the oven for 10 – 12 minutes until the cheese slightly colours.\r\n\r\n12 When ready, place the basil leaf on top and tuck in!"
            // strMeal
            // :
            // "Pizza Express Margherita"
            // strMealThumb
            // :
            // "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg"
            // strMeasure1
            // :
            // "150ml"
            // strMeasure2
            // :
            // "1 tsp "
            // strMeasure3
            // :
            // "15g"
            // strMeasure4
            // :
            // "225g"
            // strMeasure5
            // :
            // "1 1/2 tsp "
            // strMeasure6
            // :
            // "Drizzle"
            // strMeasure7
            // :
            // "80g"
            // strMeasure8
            // :
            // "70g"
            // strMeasure9
            // :
            // "Peeled and Sliced"
            // strMeasure10
            // :
            // "Leaves"
            // strMeasure11
            // :
            // "Pinch"
            // strMeasure12
            // :
            // " "
            // strMeasure13
            // :
            // " "
            // strMeasure14
            // :
            // " "
            // strMeasure15
            // :
            // " "
            // strMeasure16
            // :
            // " "
            // strMeasure17
            // :
            // " "
            // strMeasure18
            // :
            // " "
            // strMeasure19
            // :
            // " "
            // strMeasure20
            // :
            // " "
            // strSource
            // :
            // "https://www.dailymail.co.uk/femail/food/article-8240361/Pizza-Express-release-secret-recipe-Margherita-Pizza-make-home.html"
            // strTags
            // :
            // null
            // strYoutube
            // :
            // "https://www.youtube.com/watch?v=Mt5lgUZRoUg"
      
      
      
           
            // let dishLocation = res.meals[0].strrArea;

            // let dishLocation=res.meals[0].strrArea;
            // createMeal(res.meals[0]);
        });


})

function createMeal(meals){
    const Ingredients=[];

    for (let i = 1; i <= 20; i++) {
        if (meals[`strIngredient${i}`]) {
            Ingredients.push(`${meals[`strIngredient${i}`]} - ${meals[`strMeasure${i}`]}`)
        } else {
            // Stop if no more ingredients
            break;
        }
    }

        function removeli(){
            while (ingred.firstChild) {
                ingred.removeChild(ingred.firstChild)
            }
        }

        removeli()
    function final(){

        document.querySelector(".food-making-tips").innerText=meals.strInstructions;
        document.querySelector(".video").src = src = `https://www.youtube.com/embed/${meals.strYoutube.slice(-11)}`;
        document.querySelector(".dish-name").innerText=meals.strMeal;
        // console.log(dishNa)
        sideArea.innerHTML=meals.strArea;
        document.querySelector(".categeory").innerText=meals.strCategory;
        document.querySelector(".dish-images").src=meals.strMealThumb;
        console.log("outer loop"+Ingredients)
        // Ingrdients.map((value, index, array) => {
        //     let li = document.createElement("li");
        //     // li.innerText=value.join('')
        //     // ingred.appendChild(li);
        //     ingred.appendChild(`<li>${value}</li>`).join('')

        // })
        Ingredients.forEach((value, index, array) => {
            let li=document.createElement("li");
            li.innerText=value;
            // console.log(value)
            // console.log("inner loop")

            ingred.appendChild(li);
        
        })
        // mealName.innerHTML=meals.str
    }

    final();
}

