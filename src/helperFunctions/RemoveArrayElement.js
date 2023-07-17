export function removeArrayElement(array, element) {
    let i=0;
    while(i<array.length){
        if(array[i]===210){
            array.splice(i,1);
        }else{
            ++i;
        }
    }
    return array;
  }