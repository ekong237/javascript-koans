var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      var productsICanEat = [];

      var hasNoMushrooms = function(ingredient){
        return ingredient !== 'mushrooms'; 
      }

      var canEat = products.filter(function(pizza,i){ 
        return (pizza.ingredients.every(hasNoMushrooms) && (pizza.containsNuts === false)); 
                                                      
      });

      productsICanEat=canEat;
      /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
        /* try chaining range() and reduce() */

    var sum =_.range(1,1000).reduce(function(add, el){
      return (el % 3 === 0 || el % 5 === 0) ? add+el : add;         
    },0)


    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    
    //var ingredientCount = { "{ingredient name}": 0 };

    //for each pizza get ingredients arr
    //flatten array of array of ingredients
    //reduce to sum of ingredient
    var getIngredients = function(pizza){
      return pizza.ingredients;
    };
    var countIngredients = function(count, ingredient){
      return (ingredient === ingredientName) ? ++count : count;
    }

    var ingredientName = 'mushrooms';
    var ingredientCount[ingredientName] = _products.chain()
                                              .map(getIngredients)
                                              .flatten()
                                              .reduce(countIngredients,0);

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(2);
  });


  it("should find the largest prime factor of a composite number", function () {
    //divide by smallest prime number, push prime in array, keep dividing until number isn't even, then increase divisor
    //456/2 = 228/2 = 114/2 = 57 (increase)/3 = 19 (increase) /19 = 1 [2,2,2,3,19]

    function largestPrimeFactor(n){
      var factors = [];
      var divisor = 2;
      while (n>2){
        if (n % divisor === 0){
          factors.push(divisor);
          n = n/divisor;
        } else {
          divisor++;
        }
      }
      return factors[factors.length-1];
    }

    expect(largestPrimeFactor(456)).toBe(19);
    expect(largestPrimeFactor(77)).toBe(11);
    expect(largestPrimeFactor(189)).toBe(7);

  });


  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    function largestPalin(num1,num2){
      var productSplit = (num1*num2).toString().split('');
      for(var i = productSplit.length; i > 1 ; i--){
        var part = productSplit.slice(0,i);
        var rev = productSplit.slice(0,i).reverse();
        console.log(part, rev);
        
        if (part.join('') === rev.join('')){
          return Number(part.join(''));
        
        }
      }
    }
    expect(largestPalin()).toBe(906609);

  });

});

/*
  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

  });
*/

