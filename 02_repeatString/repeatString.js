const repeatString = function(word,count) {
    let result =''
    if (count < 0){
        return 'ERROR'
    } 
    for(let i = 0; i < count; i++){
        result += word
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
