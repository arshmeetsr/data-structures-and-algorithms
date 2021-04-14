function palindromePermutation(str) {
    str = str.join("").replace(" ", "").toLowerCase().split("");

    const map = new Map();
    for(let s of str) {
        let currentCount = 0;
        if(map.has(s)) {
            currentCount = map.get(s);
        }
        map.set(s, ++currentCount);
    }
    const values = Array.from(map.values());
    let = oddValues = values.filter(v => v % 2 !== 0);
    return oddValues <= 1;
}

console.log(palindromePermutation("1".split("")));
