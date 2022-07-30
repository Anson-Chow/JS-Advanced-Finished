// Q1. Show rating
// Given a rating, display a star (*) for each full rating and a full stop (.) for each half rating.

function showRating(rating){
    let ratings = ""
    for (let i = 0; i < Math.floor(rating); i++){
        ratings += "*"
        if (i !== Math.floor(rating) - 1){
            ratings += " "
        }
    
    }
    if (!Number.isInteger(rating)){
        ratings += " ."
    }
    return ratings
}

console.log(showRating(3.5))

// Q2. Sort by the lowest to highest price
// Given an array of numbers, return the prices sorted by low to high

function sortLowToHigh(numbers){
    return numbers.sort((a,b) => a - b);

}

console.log(sortLowToHigh([20, 40, 10, 50, 100, 2000, 60]))

// Q3. Sort by highest to lowest price
// Given an array of obejcts, return the prices sorted by high to low

function sortHighToLow (numbers){
    return numbers.sort((a,b) => {
        return b.price - a.price
    })
}

console.log(
    sortHighToLow([
        {id:1, price:50},
        {id:2, price:0},
        {id:3, price:500},
    ]))


// Q4. Promises
// The Async Await Episode I Promised 
// Async Await JavaScript ES7 
// Async JS Crash Course - Callbacks, Promises, Async Await 


// Q5. Find all the posts by a single user
// Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts
// by any given user ID (in this case ID = 4)

async function postsByUser (userId){

    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts")

    const result = await promise.json()

    const posts = result.filter(element => element.userId === userId)

    console.log(posts)

}

postsByUser(4)


// Q6. First 6 Incomplete Tools
// Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete 
// todo's from the result

async function firstSixIncomplete(userId){

const promise = await fetch ("https://jsonplaceholder.typicode.com/todos")

const result = await promise.json()

const incompleteTasks = result.filter (elem => !elem.completed).slice(0,6)

console.log (incompleteTasks)

}

firstSixIncomplete(6)