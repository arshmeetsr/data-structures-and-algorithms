function stringCompression(str) {
    const compressedString = [];
    let count = 1;
    for(let i = 1; i <= str.length; i++) {
        if(str[i] === str[i - 1]) {
            count++;
        } else {
            compressedString.push(str[i - 1]);
            compressedString.push(count);
            count = 1;
        }
    }
    return compressedString.length > str.length ? str.join('') : compressedString.join('');
}

console.log(stringCompression("geooooorgeeeeeee".split("")));
