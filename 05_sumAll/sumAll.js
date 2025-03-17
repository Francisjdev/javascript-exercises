const sumAll = function(start, end) {
   let result = 0
   if(start < 0 || end < 0 || Number.isInteger(end) ===false || Number.isInteger(start)=== false) return 'ERROR'
   if(start > end ){
    for(let i = start; i >= end; i--){
        result = result + i   
   }
   } else {
    for(let i = start; i <= end; i++){
        result = result + i
        
   }
   }
 
   return result
};

// Do not edit below this line
module.exports = sumAll;
