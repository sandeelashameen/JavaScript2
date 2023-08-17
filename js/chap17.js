// //question num 03
for(i=1;i<=10;i++){
    document.write(i+"<br>");
}

//question num 04
var table = prompt("Enter a number to show its multiplication of table ");
var length=prompt("Enter length multiplication of table")
multi=0;
for(i=1;i<=length;i++)
{
var multi= i*table; 
document.write("<br>" +table + "*" +i+ "=" +multi);
}
document.write("<br>");

//question num 05
// Define an array of fruits
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Use a for loop to iterate over each item in the array
for (var i = 0; i < fruits.length; i++) {
  // Print the current item to the console
  document.write("<br>"+fruits[i]+"<br>");
  document.write ( "Element at index " +i +" is "+ fruits[i]);
}

//question num 06
var num = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15' ]
document.write("<br><br>Counting<br>"+num);
num.reverse();
document.write("<br><br>"+"reverse counting<br>"+num);
document.write("<br><br>Even numbers:<br>");
for (var i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(i+",");
  }
}

// Print all the odd numbers between 1 and 20
document.write("<br><br>Odd numbers:<br>");
for (var i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    document.write(i+",");
  }
}
var Series= "2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k";
document.write("<br><br>Series<br>"+Series);



/////question num 07
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search=A.filter(search=A);
var search=prompt("any num");
var ind= A.indexOf(search);
{
    if(ind==-1){
        alert("cookies is  NOT availabe at the ");
    }
    else
    alert("cookies is availabe at the "+ ind + " in your bakery");
}

///question num 08
var A = [24, 53, 78, 91, 12];

// Assume the first number in the array is the smallest
var largest = A[0];

// Use a for loop to iterate over each item in the array
for (var i = 1; i < A.length; i++) {
  // If the current number is smaller than the current smallest,
  // update the smallest variable to the current number
  if (A[i] > largest) {
    largest = A[i];
  }
}
document.write("<br><br>Array Element <br>"+A);
// Print the smallest number to the console
document.write("<br><br>The largest number in the array is:<br> " + largest);

//question num 09
var A = [24, 53, 78, 91, 12];

// Assume the first number in the array is the smallest
var smallest = A[0];

// Use a for loop to iterate over each item in the array
for (var s = 1; s < A.length; s++) {
  // If the current number is smaller than the current smallest,
  // update the smallest variable to the current number
  if (A[s] < smallest) {
    smallest = A[s];
  }
}
document.write("<br><br>Array Element <br>"+A);
// Print the smallest number to the console
document.write("<br><br>The smallest number in the array is:<br> " + smallest);

// ////question num 10
document.write("<br><br>multiples of 5")
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      document.write("<br>"+i +" , ");
    }
  }