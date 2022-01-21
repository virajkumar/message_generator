let part1 = ['Hi there! ', 'Do you know that ', 'Welcome to the Jungle! '];
let part2 = ['tigers ', 'elephants ', 'bees '];
let part3 = ['are fun to watch.', 'are important to the ecosystem.', 'live among other animals.'];
let randNums = []

for (let i = 0; i < 3; i++) {
    randNums.push(Math.floor(Math.random() * 3));
}

let randomSentence = part1[randNums[0]] + part2[randNums[1]] + part3[randNums[2]];
console.log(randomSentence);