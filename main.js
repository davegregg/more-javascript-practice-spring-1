// Weekday morning announcer
let announceMorning = function (name) { // "   deLancey" ➡️ "Delancey"
    let weekday = new Date().toLocaleDateString(undefined, { weekday: "long" })
    let trimmedName = name.trim()
    let capitalizedFirstChar = trimmedName[0].toLocaleUpperCase()
    let lowercasedRemainder = trimmedName.slice(1).toLocaleLowerCase()

    let capitalizedName = capitalizedFirstChar + lowercasedRemainder

    return "Good morning, " 
        + capitalizedName 
        + ". It is now " 
        + weekday 
        + "!";
}

let result = announceMorning("   deLancey")
console.assert(result === "Good morning, Delancey. It is now Tuesday!", result)

// EARLY IN THE TOPIC SESSION 👇

// let username = "gwaltney"

// let lastIndex = username.length - 1
// console.log(username[lastIndex])

// 0 1 2 3 4 5 6 7 8 9
// a m t w 2 5 1 1

// "index" or "position"
// 0 1 2 3 4 5 6 7 8 9
// d n i c e




// 0 1 2
// w o w 