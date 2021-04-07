Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@AVIRENI-CHANDAN 
siddartha19
/
Coursera-HTML-CSS-and-JavaScript-for-Web-Developers
4
22
351
Code
Issues
Pull requests
6
Actions
Projects
Wiki
Security
Insights
Coursera-HTML-CSS-and-JavaScript-for-Web-Developers/Assignments/module-4/script.js /
@siddartha19
siddartha19 Add files via upload
Latest commit 2843c8e on Dec 27, 2018
 History
 1 contributor
49 lines (40 sloc)  1.2 KB
  
// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!
*/


(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();


© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
50 results found.
