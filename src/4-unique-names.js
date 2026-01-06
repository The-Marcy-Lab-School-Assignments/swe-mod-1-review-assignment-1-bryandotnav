const uniqueNames = (names) => {
    const dupe = [];
    const output = []
    for(let i = 0; i < names.length; i++) {
        const lowercased = names[i].toLowerCase();
        if(!dupe.includes(lowercased)) {
            dupe.push(lowercased)
            output.push(names[i])
        }
    }
    return output;
}

console.log(uniqueNames(["Maya", "Carlos", "maya", "sarah", "CARLOS"]));
// ["Maya", "Carlos", "sarah"]

console.log(uniqueNames(["ALEX", "Alex", "alex", "AlEx"]));
// ["ALEX"]
