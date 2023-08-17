//question num 01 
var studentNames = [];
studentNames.push("John");
studentNames.push("Mary");
console.log(studentNames);

// //question num 02


// //question numm 03
var string=["sandeela","ayesha","iqra","dua"];
console.log(string);

// //question num 04
var number=[1,2,3,4,5,6];
console.log(number);

// //question num 05
var boolArray = [true, false, true, false];
console.log(boolArray);

// //question num 06
var mix=[4,5,6,"sandeela","ayesha",false, true];
console.log(mix);

// //question num 07
var qualifications=["SSC<br>"+"HSC<br>"+"BCS<br>"+"BS<br>"+"BCOM<br>"+"MS<br>"+"M. Phil<br>"+"PhD<br>"];
document.write("<h2>Qualifications in Pakistan</h2>");
document.write(qualifications);

//question num 08
var student=["sandeela","Ayesha","Iqra"];
var marks=[400,390,387];
var total_mark=500;
var percentge;
percentge=(marks[0]*100)/total_mark;
document.write("Score of " + student[0] + " is " + marks[0] + " Percentge: " +percentge +"%");
percentge=(marks[1]*100)/total_mark;
document.write("<br>Score of " + student[1] + " is " + marks[1]+ " Percentge: " +percentge +"%");
percentge=(marks[2]*100)/total_mark;
document.write("<br>Score of " + student[2] + " is " + marks[2] +" Percentge: " +percentge +"%");

// //question num 09
var color=["Green<br>"+"Red<br>"+"Blue<br>"+"Black<br>"+"Yellow<br>"+"Pink<br>"+"White<br>"+"Purpel<br>"];
document.write("<h2>Color Name</h2>");
document.write(color);
var add=prompt("Wants to add to the beginning of the Array");
color.unshift(add+"<br>");
document.write("<br> add to the begininng<br> Updated array:<br> " + color);

var add=prompt("Wants to add to the end of the Array");
color.push(add+"<br>");
// Display the updated array in the browser using document.write()
document.write("<br>add to the end of the array <br>Updated array: <br>" + color+"<br>");


//////question num 10
const score = ["88", "78", "98", "72"];
score.sort();
alert(score);

//question num 11
var cities = ["New York" , "London" , "Tokyo" , "Paris"  , "Sydney" , "Mumbai"];

 //Create an empty array to hold selected cities
var selectedCities = [];

// Copy 3 elements from cities array to selectedCities array
selectedCities = cities.slice(1 , 4);

// Display both arrays
document.write("<h2>Cities:</h2> " + cities + "<br> <h2>Selected cities:</h2> " + selectedCities);

// //question num 12
var arr = ["This ", "is ", "my ", "cat"];
var joinarry = arr.join('');
document.write("<h2>Array</h2> " + arr + "<h2>String</h2> " + joinarry+"<br><br>");



//question num 13
// var fifoArray = [];

// Add values to the array using the push() method
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("MonitOr");
document.write("DeVice <br>" + fifoArray);
// Access the values in the order in which they were stored using the shift() method
document.write("<br><br>OUT: <br>" + fifoArray.shift(0, 1)); // Output: "value1"
document.write("<br>OUT: <br> " + fifoArray.shift(1, 2)); // Output: "value2"
document.write("<br>OUT: <br>" + fifoArray.shift(2, 3));
document.write("<br>OUT: <br>" + fifoArray.shift(3, 4));


// //question num 14
var fifoArray = [];

// Add values to the array using the push() method
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("MonitOr");
document.write("<br><br>DeVice <br>" + fifoArray);
// Access the values in the order in which they were stored using the shift() method
document.write("<br><br>OUT: <br>" + fifoArray.pop(0, 1)); // Output: "value1"
document.write("<br>OUT: <br> " + fifoArray.pop(1, 2)); // Output: "value2"
document.write("<br>OUT: <br>" + fifoArray.pop(2, 3));
document.write("<br>OUT: <br>" + fifoArray.pop(3, 4));


// ///question num 15
// Define an array of phone manufacturers
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Use document.write() to create a dropdown/select menu
document.write("<br><br><select>");
for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option value=" + manufacturers[i] + ">" + manufacturers[i] + "</option>");
}
document.write("</select>");