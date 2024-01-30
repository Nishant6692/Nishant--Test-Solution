let number = 8046957321;
 const numberArray = number.toString().split(""); 
for (let i = 1; i < numberArray.length; i++) {
     for (let j = 0; j < i ; j++) {
        
         if(parseInt(numberArray[i]) < parseInt(numberArray[j]) )
        {
            let x =  parseInt(numberArray[i])
            numberArray[i] = parseInt( numberArray[j])
             numberArray[j] = x
        }
        console.log(numberArray);
        
     }
    
    
}


