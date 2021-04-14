function stringRotation(str1, str2) {
    if(!str1 || !str2) {
        throw new Error("Invalid strings");
    }
    if(str1.length !== str2.length) {
        return false;
    }
    str2 = str2.concat(str2);
    return str2.includes(str1);
}

console.log(stringRotation("waterbottle", "bottlewater"));
