function urlify(str) {
    let spaces = 0;
    for(let s of str) {
        if(s === " ") spaces++;
    }
    const newLength = str.length + spaces * 2;
    let key = newLength - 1;
    for(let i = str.length - 1; i >=0; i--) {
        if(str[i] === " ") {
            str[key--] = "0";
            str[key--] = "2";
            str[key--] = "%";
        } else {
            str[key] = str[i];
            key--;
        }
    }
    return str.join("");
}

console.log(urlify("hello world".split("")));

