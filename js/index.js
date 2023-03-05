/*FOREACH*/

// const myArr=[1,2,3,4,5];
// let i = 0;

// function myFunc(array,callback){
//     for(let i = 0;i<array.length;i++){
//        callback(array[i]);
//     }
// }

// function arrLog(item){
//     console.log(item);
// }

// myFunc(myArr,arrLog);

/*EVERY*/
// const everyArr=[1,2,3,4,5];
// let i=0;

// console.log(everyFunc(everyArr,evenNum))

// function everyFunc(array,callback){
//      for(i;i<array.length;i++){
       
//         if(callback(array[i])){
//             return false;
//         }
        
//      }
//      return true;
// }

// function evenNum(item){
//    if(item%3===0){
//     return false;
//    }
//    else{
//     return true;
//    }
// }

/*SOME*/
// let someArr=[1,1,1,1,5];
// let i=0;

// function someFunc(arr,callback){
//     for(i; i<arr.length; i++){
//       if(callback(arr[i])){
//         return true;
//       }
//     }
//     return false;
// }


// function evenNum(item){
//    if(item%3===0){
//      return true;
//    }
//    else{
//     return false;
//    }
// }

// console.log(someFunc(someArr,evenNum));


//MAP

// const mapArr=[55,2,3,4,5];
// let i=0;
// let newArr=[];
// function mapFunc(arr,callback){
//      for(i;i<arr.length; i++){
//         callback(arr[i]);
//      }
//        return newArr;
//     }

// function doubleValue(item){
//   newArr.push(item*2);
  
// }

// console.log(mapFunc(mapArr,doubleValue));


//FILTER

// const filterArr=[10,12,23,5,6];
// let i=0;
// let newArr=[];

// function filterFunc(arr,callback){
//     for(i;i<arr.length;i++){
//         callback(arr[i]);
//     }
//     return newArr;
// }

// function ableToDrinkForCaucasians(childAge){
//   if(childAge>5){
//     newArr.push(childAge);
//     console.log("Definitely can drink alcohol")
//   }
// }
// console.log(filterFunc(filterArr,ableToDrinkForCaucasians));


//INDEXOF

// const indexOfArr=[1,2,3,4,5];
// let i =0;

// function indexOfFunc(arr,callback){
//      for(i;i<arr.length; i++){
//         if(callback(arr[i])){
//           return i;
//         }
//      }
//      return -1;

// }

// function findIndex(item){
//   if(item===4){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

// console.log(indexOfFunc(indexOfArr,findIndex));



// // FIND

// const findArr=[1,2,3,4,5];
// let i =0;
 
// function findFunc(arr,callback){
//   for(i; i<arr.length; i++){
//      if(callback(arr[i])){
//       return arr[i];
//      }
//   }
//   return -1;
// }

// function findValue(item){
//   if(item%2===0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(findFunc(findArr,findValue));

