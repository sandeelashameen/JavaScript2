 
//  //     Question num 01;
var city = prompt('Enter a City Name');
if (city == "karachi" || city == "KARACHI" || city =="Karachi") {
     alert("“Welcome to city of lights”");
   }
// //       Question num 02;
   var gender = prompt('Enter a your gender');
   if (gender == "Male" || gender == "male" || gender =="MALE") {
        alert("“Good Morning Sir..”");
      }
      else if(gender=="Female" || gender == "female" || gender =="FEMALE")
      {
      alert("“Good Morning Ma’am..”");
      }

    
// //      Question num 03;     
      var signal = prompt('Enter a color of road traffic signal');
   if (signal == "red" || signal == "RED" || signal =="Red") {
        alert("“Must Stop!..”");
      }
      else if(signal =="Yellow" ||signal == "yellow" || signal =="YELLOW")
      {
      alert("“Ready To Move..”");
      }
      else if(signal =="Green" ||signal == "green" || signal =="GREEN")
      {
      alert("“Move Now..”");
      }


// //    Question num 04;       
var fuel= prompt("Enter a remaining fuel in you'r car in liters");
if (fuel <= "0.25litres" ) {
    alert("“Please refill the fuel in your car”");
  }

//   Question num 05;
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}

if(c === 14)
{
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost)
{
alert("The cost equals");
}

if (true)
{
alert("True");
}
if (false)
{
alert(False);
}

if("car" < "cat")
{
   alert("car is smaller than cat");
}

//Question num 06
var total=300,optained,percentage;
var optained1=+prompt("Enter a Subject one Marks.");
var optained2=+prompt("Enter a Subject two Marks.");
var optained3=+prompt("Enter a Subject third Marks.");
document.write("<h2>Marks Sheet</h2>")
document.write("Total Marks. " + total);
optained=optained1+optained2+optained3;
document.write("<br>Optained Marks is " +optained);
percentage=(optained*100)/total;
document.write("<br>percentage is " +percentage);
if(percentage>=80)
{
   document.write("<br>Grade:A1");
   document.write("<br> Remarks: Excellent");
}
else if(percentage>=70)
{
   document.write("<br>Grade:A");
   document.write("<br> Remarks: Good");
}
else if(percentage>=60)
{
   document.write("<br>Grade:B");
   document.write("<br> Remarks: You need to improve");
}
else if(percentage<60)
{
   document.write("<br>Grade:fail");
   document.write("<br> Remarks: Sorry");
}


//QUESTION nuum 07;
var num=8;
var guess=prompt("Guess the secret number..");
if(guess==num)
{
   alert("“Bingo! Correct answer”.");
}
else if(guess==num+1 || guess==num-1)
{
   alert("“Close enough to the correct answer”..");
}
else{
   alert("Try again..");
}

//Question num 08;
var num=3;
if(num==3)
{
   document.write("<br>Divisible by 3...");
}
else {
   document.write("<br>Not Divisible by 3...<br>")
}

//Question num 09;
var Num = prompt('Enter a Number');
if(Num%2==0)
{
   document.write("<br>Num is Even");
}
else {
   document.write("<br>Num is Odd");
}

//Question num 10;
var T = prompt('Enter a temperature');
if (T > 40) 
{
 alert("“It is too hot outside..”");
}
else if(T > 30)
{
alert("“The Weather today is Normal..”");
}
else if(T > 20)
{
alert("“Today’s Weather is cool..”");
}
else if(T > 10)
{
alert("“OMG! Today’s weather is so Cool..”");
}

//Question num 11;
var A = +prompt('Enter a First number');
var B = +prompt('Enter a Second number');
var Operation = prompt('Enter a Operation( either +, -, * or / ):');
var result
if(Operation== '+')
{
result = A+B;
alert("RESULT.." + (result));
}
else if( Operation== '-')
{
   result = A-B;
   alert("RESULT.." + (result));
}
else if(Operation=='*')
{
   result = A*B;
   alert("RESULT.." + (result));
}
else if(Operation=='/')
{
   result = A/B;
   alert("RESULT.." + (result));
}
else if(Operation=='%')
{
   result = A%B;
   alert("RESULT.." + (result));
}