const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

  const forEach = minions.forEach(name => {
    console.log(name + "? Here!")
  });

  
  const capitalizedMinions = minions.map((minions) => {
    if (minions === 'kevin') {
        return minions
    } else {
        return minions.charAt(0).toUpperCase() + minions.slice(1);
        
    }
})

console.log(capitalizedMinions)


const actuallyCapitalizedMinions = capitalizedMinions.filter((minions) => {
   return minions.charAt(0) === minions.charAt(0).toUpperCase();
})

console.log(actuallyCapitalizedMinions)


const everyCap = actuallyCapitalizedMinions.every((minions) => {
    return minions.charAt(0) === minions.charAt(0).toUpperCase()
})

console.log(everyCap)


const uncapitalizedMinion = capitalizedMinions.find((minions) => {
    return minions.charAt(0) != minions.charAt(0).toUpperCase()
})

console.log(uncapitalizedMinion)


const index = capitalizedMinions.findIndex((minions) => {
    return minions.charAt(0) != minions.charAt(0).toUpperCase()
})
console.log(index)


capitalizedMinions[1] = capitalizedMinions[1].charAt(0).toUpperCase() + capitalizedMinions[1].slice(1)


const forReal = capitalizedMinions.every((minions) => {
    return minions.charAt(0) === minions.charAt(0).toUpperCase()
})

console.log(forReal)


const minionNameLength = capitalizedMinions.map((minions) => {
    return minions.length
})

const sum = minionNameLength.reduce ((acc, minions) => {
    return acc + minions
}, 0)

console.log(minionNameLength)
console.log(sum)

const aboveSix = capitalizedMinions.some((minions) => {
    return minions.length >=6
})
console.log(aboveSix)

const aboveSeven = capitalizedMinions.some((minions) => {
    return minions.length >=7
})
console.log(aboveSeven)

const comparedMinions = capitalizedMinions.sort((currentMinion, nextMinion) => {
    currentValue = currentMinion.length;
    nextValue = nextMinion.length;
    return currentValue - nextValue
})

console.log(comparedMinions)
