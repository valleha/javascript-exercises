const reverseString = function(str) {
    const splitStr = str.split("");
    const reverse = splitStr.reverse();
    const joined = reverse.join("");
    return joined

};

// Do not edit below this line
module.exports = reverseString;
