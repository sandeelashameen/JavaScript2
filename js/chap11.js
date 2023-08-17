// //  Question num 01

var num=prompt("Enter any number or character");
var code = num.charCodeAt(0);
if(code>= 48 && code<= 57)
{
    alert("The input character is a number..");
}
else if (code>= 65 && code<= 90) {
  alert("The input character is an uppercase letter.");
}
else if (code >= 97 &&  code<= 122) {
    alert("The input character is a lowercase letter.");
}

// //  Question num 02
var num1=prompt("Enter a 1st number");
var num2=prompt("Enter a 2nd number");
if(num1>num2)
{
    alert("The larger num is: " +num1);
}
else if (num2>num1) {
  alert("The larger num is: " +num2);
}
else if (num1==num2) {
    alert("The num are equal: " +num1);
}

// // Question  03
var q3=prompt("Enter a number..");
if(q3>0)
{
  alert("The num is positive..");
}
else if (q3<0) {
  alert("The num is negative..");
}
else if (q3==q3) {
    alert("The num is zero..");
}

// Question num 04
var vowel = prompt("Enter a Character..");
if (vowel == "a" || vowel == "A" || vowel == "e" || vowel == "E" || vowel == "I" || vowel == "i" || vowel == "O" || vowel == "o" || vowel == "U" || vowel == "u") 
{
  alert("It's a vowel..");
}
else {
  alert("It's not a vowel..");
}

//Question num 05
var Password= prompt("Enter a Password..");
var pass=123456;
if(Password==pass)
{
  alert("“Correct! The password you entered matches the original password”..");
}
else if(Password==null || Password==""){
  alert("“ Please enter your password”");
}
else
{
  alert("“Incorrect password”..");
}

// // Question num 06
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

// Question num 07
var time=prompt("Enter time");
if(time==12){
    alert("its pm" );
}
time=time-12
{
    alert("its am")
}

