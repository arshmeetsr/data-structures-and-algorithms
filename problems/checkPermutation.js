function checkPermutation(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    const map = new Map();
    for(let s of str1) {
        let count = 0;
        if(map.has(s)) count = map.get(s);
        count++;
        map.set(s, count);
    }
    
    for(let s of str2) {
        if(!map.has(s)) {
            return false;
        }

        let count = map.get(s);
        count--;
        map.set(s, count);
        if(count == 0) map.delete(s);
    }
    return map.size === 0;
}

function checkPermutationSort(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    return str1.sort().join("") === str2.sort().join("");
}

console.log(checkPermutation("cab".split(""), "bac".split("")))
console.log(checkPermutationSort("cab".split(""), "bac".split("")))