$(document).ready(function() {
  $("#entry-form").submit(function(event) {
  var side1 = parseInt("#side1").val();
  var side2 = parseInt("#side2").val();
  var side3 = parseInt("#side3").val();

  if (side1 && side2 && side3) {
    } else if (side1 + side2 >= side3) {
      alert("The side lengths entered are not a triangle!");
    }
    else if (side1 + side3 >= side2) {
      alert("The side lengths entered are not a triangle!");
    }
    else if (side2 + side3 >= side1) {
      alert("The side lengths entered are not a triangle!");
    }
    else if (side1 === side2 === side3) {
      alert("This is an equilateral triangle!")
    }
    else if (side1 === side2 || side1 === side3 || side2 === side3) {
      alert("This is an isosceles triangle!")
    }
    else { 
      console.log("something is broken");
      alert("This is a scalene triangle!")
    }

  event.preventDefault();
  });
});
