$(document).ready(function() {

  $("#entry-form").submit(function(event) {
    debugger;
  var side1 = parseInt($("#side1").val());
  var side2 = parseInt($("#side2").val());
  var side3 = parseInt($("#side3").val());

  if (side1 && side2 && side3) {
    // all fields in the form have a value which is a number
    if (side1 + side2 >= side3) {
        alert("1 - The side lengths entered are not a triangle!");
      }
      else if (side1 + side3 >= side2) {
        alert("2 - The side lengths entered are not a triangle!");
      }
      else if (side2 + side3 >= side1) {
        alert("3 - The side lengths entered are not a triangle!");
      }
      else if (side1 === side2 && side2 === side3) {
        alert("This is an equilateral triangle!");
      }
      else if (side1 === side2 || side1 === side3 || side2 === side3) {
        alert("This is an isosceles triangle!");
      }
    else {
      alert("This is a scalene triangle!");
    }
  }
  else {
    //prompt user to enter numbers
    alert("Please enter a number in each field.");
    console.log("something is broken");
    }

  event.preventDefault();
  });
});
