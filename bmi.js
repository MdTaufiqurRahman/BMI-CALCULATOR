function BMI(){
    //get feet & inch
    let feet =document.querySelector(".feet").value;
    let inch=document.querySelector(".inch").value;
    //add feet+inch
    let metre =feet+"."+inch;
    //convert feet to metre
    let height=metre/3.2808;
    //Get weight
    let weight=document.querySelector(".kg").value;
    //BMI calculation
    let bmi=weight/Math.pow(height,2);
     //BMI showing in P tag
    if(bmi<18.5){
        document.querySelector("p").innerHTML="Your BMI is : "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Under Weight";
    }
    else if(bmi>=18.5 && bmi<=24.9){
        document.querySelector("p").innerHTML="Your BMI is : "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Normal";
    }

    else if(bmi>=25 && bmi<=29.9){
        document.querySelector("p").innerHTML="Your BMI is : "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Over Weight";
    }
    else if(bmi>=30){
        document.querySelector("p").innerHTML="Your BMI is : "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Obese";
    }
}
//calculated button
document.querySelector(".btn").addEventListener("click",BMI);