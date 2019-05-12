  
//Exercises 1


let mat = [[1,2,3],[4,5,6],[7,8,9,10]];
let sum1 = 0;
let counter = 0;
for(row=0;row<mat.length;row++){
    for(col = 0;col<mat[row].length;col++){
        sum1+=mat[row][col];
        counter++;
        console.log(sum1/counter);
    }
   }
//Exercises2 
let arry = [2,5,8,9,4,2];

let checkNumbers = (arry) => {
    let count = [0,0,0,0,0,0,0,0,0,0];
    for(i=0;i<arry.length; i++){
        if(arry[i]>="0"&&arry[i]<="9"){
            count[arry[i]-48]++;
        }
    }
    let max = count[0];
    let index = 0;
    for(i=0;i<count.length;i++){
         if(count[i]>max){
             max = count[i];
             index = i;
         }
         console.log(count);
    }
  return  index;
  }
  checkNumbers(arry);
 //Exercises 3 
 let ary1 = [2,4,5,9,7,9,5,2,6];
 let ary2 = [4,2,5,8,4,8,7,9];

 let doubleNumbers = (ary1,ary2)=>{
     let result =[];
     for(i=0;i<ary1.length;i++){
         for(j=0;j<ary2.length;j++){
             if(i==j){
                 result.push(i);
             }
         }

     }
 }

 console.log(doubleNumbers(ary1,ary2));
 //Exercises 4






//Exercises 5 

  let matr = [["S","dadA","klA"],["fjL","dsQ","WEr"],["mnJ","bjbH","MkJ","MlK"]];
console.log(matr.length);
 let primeLetter = (matr)=>{
  let letterCounter = 0;
  for(row=0; row<matr.length; row++){
      for(col = 0; col<matr[row].length; col++){
          if(matr[i]>="A"&&matr[i]<="Z"){
               letterCounter++;
          }
          console.log(letterCounter);
      }
     }
    }
    primeLetter();
     //Exercises 7
     let quadMat =[[2,3,4,5,6,7,5,5,4],[2,3,4,5,6,7,5,5,4],[2,3,4,5,6,7,5,5,4],[2,3,4,5,6,7,5,5,4],[2,3,4,5,6,7,5,5,4],[2,3,4,5,6,7,5,5,4],[2,3,4,5,6,7,5,5,4],[2,3,4,5,6,7,5,5,4],[2,3,4,5,6,7,5,5,4]];
     let func = (quadMat) =>{
       for(row=0; row<quadMat.length; row++){

       }  

     }
 