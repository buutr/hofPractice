// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var results = [];

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      results.push(number);
    };
  });
  return results.length;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  var filteredArr = _.filter(fruits, function(fruit){
    if (fruit === targetFruit) {
      return fruit;
    };
  });

  return filteredArr
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var fruitsSameLetter = _.filter(fruits, function(fruit){
    if(fruit[0] === letter) {
      return fruit
    }
  });
  return fruitsSameLetter

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var hasCookieType = _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert;
    };
  });
  return hasCookieType;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var pricesArr = [];
  _.each(products, function(product, index, collection) {
    pricesArr.push(Number(product.price.slice(1)));
  })

  var returnVal = _.reduce(pricesArr, function(accum, product) {
    return accum + product;
  });

  return returnVal;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var dessertTypes = [];
  var returnObj = {};
  _.each(desserts, function(dessert, index, collection) {
    dessertTypes.push(dessert['type']);
  });

  _.reduce(dessertTypes, function(accum, type) {
    returnObj[accum] = 1;
    if(!returnObj[type]) {
      returnObj[type] = 1;
    } else {
      returnObj[type]++;
    };
  });
  return returnObj;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

  var titleArr = _.reduce(movies, function(newArr, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      newArr.push(movie.title);
    }
    return newArr;
  }, []);
  return titleArr;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

  var canWatch = _.reduce(movies, function(accum, movie) {
    if (movie.runtime <= timeLimit) {
      accum = true;
    };
    return accum;
  }, false);

  return canWatch;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var capitalFruits = _.map(fruits, function(fruit, index, collection) {
    return fruit.toUpperCase();
  });
  return capitalFruits;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var glutenFreeArr = _.map(desserts, function(dessert, index, collection) {
    if (dessert.ingredients.includes('flour')) {
      dessert = {};
      dessert[name] = dessert.name;
      dessert['glutenFree'] = true
      return dessert;
    } else {
      dessert = {};
      dessert[name] = dessert.name;
      dessert['glutenFree'] = false;
      return dessert;
    }
  })
  return glutenFreeArr;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var salesPriceArr = _.map(groceries, function(item, index, collections) {
    var sale = ((item.price.slice(1)) * (1 - coupon)).toString();
    var roundedSale = sale.slice(0, sale.indexOf('.') + 3);
    var grocery = {};

    grocery['id'] = item.id;
    grocery['product'] = item.product;
    grocery['price'] = item.price;
    grocery['salePrice'] = '$' + roundedSale;
    return grocery;
  })
  return salesPriceArr;
};
