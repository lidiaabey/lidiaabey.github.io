"use strict";

// loading the navigation and footer
$(function () {
  $(".navclass").load("navigation.html");
});
$(function () {
  $(".footerclass").load("footer.html");
});

//declaring an array of images
let myImagesArray = [
  "Images/beluga/slideshow/p1.jpg",
  "Images/beluga/slideshow/p2.jpg",
  "Images/beluga/slideshow/p3.jpg",
  "Images/beluga/slideshow/p4.jpg",
  "Images/beluga/slideshow/p5.jpg",
  "Images/beluga/slideshow/p6.jpg",
  "Images/beluga/slideshow/p7.jpg",
  "Images/beluga/slideshow/p8.jpg",
  "Images/beluga/slideshow/p9.jpg",
  "Images/beluga/slideshow/p10.jpg",
];

//making an automatic slide to display the images
let ImageNumber = 0;
let difference = myImagesArray.length - 1;
let delay = 1500; //milliseconds
setInterval("ChangeImages(1)", delay);

function ChangeImages(direction) {
  ImageNumber = ImageNumber + direction;

  if (ImageNumber > difference) {
    ImageNumber = 0;
  }

  if (ImageNumber < 0) {
    ImageNumber = difference;
  }

  document.getElementById("slideshow").src = myImagesArray[ImageNumber];
}
