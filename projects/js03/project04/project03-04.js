
/* JavaScript 7th Edition
   Chapter 3
   Hands-on Project 3-4
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""];
let stars = [5, 2, 1, 4];

let reviewDates = [
   "11/18/2024",
   "11/17/2024",
   "11/15/2024",
   "11/10/2024"
];

let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography.",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market."
];

let reviewTitles = [
   "My Favorite Workout Game",
   "Poor Choreography",
   "Buggy with Poor Tech Support",
   "Nice Improvement"
];

let article = document.querySelector("article");

for (let i = 0; i < reviewers.length; i++) {

   let table = document.createElement("table");

   if (reviewType[i] === "P") {
      table.className = "prime";
   } else if (reviewType[i] === "N") {
      table.className = "new";
   }

   let caption = document.createElement("caption");
   caption.textContent = reviewTitles[i];
   table.appendChild(caption);

   let row1 = table.insertRow();
   row1.innerHTML = "<th>By</th><td>" + reviewers[i] + "</td>";

   let row2 = table.insertRow();
   row2.innerHTML = "<th>Review Date</th><td>" + reviewDates[i] + "</td>";

   let row3 = table.insertRow();
   row3.innerHTML = "<th>Rating</th><td>" + "★".repeat(stars[i]) + "</td>";

   let row4 = table.insertRow();
   let reviewCell = row4.insertCell();
   reviewCell.colSpan = 2;
   reviewCell.textContent = reviews[i];

   article.appendChild(table);
}


