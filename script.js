//Exercises 1 
checkNumber(9,5);
checkNumber(2,6);

function checkNumber(num1,num2){
    if(num1<num2){
        console.log(num1);
    }
    else {
        console.log(num2);
    }
    }

 //Exercises 2
 checkWords("wo","a","word3","hghjg");


function checkWords(word1,word2,word3,word4){
    if(word1.lenght>2){
        result1 = 1;
    }
    else if(word1.lenght<2){
        result1 = 0;
    }
    if(word2.lenght>2){
        result2 = 1;
    }
    else if(word2.lenght<2){
        result2 = 0;
    }
    if(word3.lenght>2){
        result3 = 1;
    }
    else if(word3.lenght<2){
        result3 = 0;
    }
    if(word4.lenght>2){
        result4 = 1;
    }
    else if(word4.lenght<2){
        result4 = 0;
        console.log(result1+result2+result3+result4);
    }
    }

    //Exercises 3 

    function checkA(){
        let check = document.getElementById("myInput").value;
        if(check.indexOf("A")==1){
             let bigA = check.indexOf("A");
             let smallA = "a";
             let res = check.replace(bigA,smallA);
            console.log(res);
         }
    }


    //Exercises 4

    
    checkNumber1(35);

    function checkNumber1(num){
        if(num>=0&&num%2==0){
            console.log("positive and Even");
        }
        else if(num<0&&num%2==0){
            console.log("Negativ and Even");
        }
        else if(num>0&&num>=0){
            console.log("Positive and Odd");
        }
        else{
            console.log("Negative and Odd");
        }
    }

    //Exercises 5 


    checkLetter("ABBA")

    function checkLetter(strin){
        let first = strin.charAt(0);
        let last = strin.lenght-1;
        if(first = last){
         let resul = strin.slice(1,strin.lenght-2);
          console.log(resul);
        }
    }


    //Exercises 6 

    checkSimbols("dja₪sk@jlk")
 
    function checkSimbols(string){
        if(string.indexOf("*")>=1){
        let star = string.indexOf("*");
        let res1 = string.slice(0,star);
        let res2 = string.slice(star+1,string.lenght);
            console.log(res1+res2);
        }
        else if(string.indexOf("@")>=1){
            console.log("*"+string+"*");
        }
        else if(string.indexOf("₪")>=1){
            console.log("new shekel");
        }
    }
