const sumAll = function(a, b) {
let sum = 0;
if(Math.sign(a) == -1 || Math.sign(b) == -1)
    {return "ERROR"}

else if(a < b && Number.isInteger(a) && Number.isInteger(b))
    {for(let i = a; i <= b; i++){sum += i}
}
else if(a > b && Number.isInteger(a) && Number.isInteger(b)) 
    {for(let i = b; i <= a; i++){sum += i}}

else{return "ERROR"};

return sum;
}

// Do not edit below this line
module.exports = sumAll;
