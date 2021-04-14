function oneAway(str1, str2) {
    const l1 = str1.length;
    const l2 = str2.length;
    const maxLength = l1 > l2 ? l1 : l2;
    let editsNeeded = 0
    let i = 0;
    let j = 0;
    while(i < l1 || j < l2) {
        if(str1[i] !== str2[j]) {
            editsNeeded++;
            if(l1 === l2) {
                i++;
                j++;
            } else if(l1 === maxLength) {
                i++;
            } else {
                j++;
            }
        } else {
            i++;
            j++;
        }
    }
    editsNeeded += Math.abs(l1 - l2) - 1;
    return editsNeeded <= 1;
}

console.log(oneAway("baac".split(""), "baa".split("")));
