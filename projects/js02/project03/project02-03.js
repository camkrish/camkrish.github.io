/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: 
      Date:   

      Filename: project02-03.js
 */
"use strict";

window.addEventListener("load", function() {
   document.getElementById("square").addEventListener("mouseover", function() {
      document.getElementById("feedback").textContent = "You are hovering over the square.";
   });

   document.getElementById("triangle").addEventListener("mouseover", function() {
      document.getElementById("feedback").textContent = "You are hovering over the triangle.";
   });

   document.getElementById("circle").addEventListener("mouseover", function() {
      document.getElementById("feedback").textContent = "You are hovering over the circle.";
   });
});