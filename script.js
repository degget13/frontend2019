//Exercises 1
let checkPassport = () => {
    let valueOfInput = document.getElementById("myInput").value;
    for(index = 0; index<=valueOfInput.lenght-1;index++){
        if(valueOfInput.lenght<=8&&valueOfInput.charAt(index<="9")){
            console.log("YES");
        }
        else{
            console.log("NO");
        }
        
    }

}


//Exercises 2 

let checkNumber = (number) => {
    for(i=2;i<number;i++){
        if(number%i==0){
            return false;
        }
        else{
            return true;
        }
    }
}

console.log(checkNumber(7));
console.log(checkNumber(15));
console.log(checkNumber(26));
console.log(checkNumber(3));


//Exercises 3 
funcArCase("asasA");

function funcArCase (str){
    let space = " ";
    for(i = 0; i<str.lenght; i++){
        if(str.charAt(i)>="A"&&str.charAt(i)<="Z"){
            let newStr = str.replace(str.charAt(i),space + charAt(i));
            console.log(newStr);
        }
        
        else{
            console.log(str);
        }
    }
}


//exercises 6


let Square = () => {

    let size = 6;
    let str = "";
    for(i=0;i<size;i++){
        str+="*";
    }
    str+="\n";
    for(j=0;j<size-2;j++){
        str+="*";
        for(b=0;b<size-2;b++){
            str+=" ";
        }
        str+="*";
        str+="\n";
    }
    

    for(i=0;i<size;i++){
        str+="*";
    }

    console.log(str);
}

Square();


//Exercises 5


let checkString = (first,second) => {
  let counter = 0;
  if(first.lenght<second.lenght){
      for(ind=1;ind<=second.lenght;ind++){
           counter++;
      }
      console.log("Second string biggest"+ counter);
  }
  else if(first.lenght>second.lenght){
      for(ind =1;ind<=first.lenght;ind++){
        counter++;
      }
      console.log("First string biggest"+ counter);
  }
}

checkString ("ad","dasdsads")


//Exercises 4 
let inside = prompt("put the numbers");
let biggest = charAt[0];
for(i=0; i<inside.length&&i>0; i++){
    if(inside.charAt[i]>biggest){
        biggest = inside.charAt[i];
    }
}
console.log(biggest);