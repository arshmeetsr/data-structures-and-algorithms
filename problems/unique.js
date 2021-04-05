function unique(str) {
    const map = new Set();
    for(let s of str) {
        if(map.has(s)) {
            return false;
        }
        map.add(s);
    }
    return true;
}

function uniqueSort(str) {
    for(let i = 1; i <= str.length; i++) {
        if(str[i] === str[i-1]) {
            return false;
        }
    }
    return true;
}

console.log(unique("abc".split("")));
console.log(uniqueSort("abc".split("")));
