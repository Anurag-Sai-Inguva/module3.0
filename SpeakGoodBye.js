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
Coursera-HTML-CSS-and-JavaScript-for-Web-Developers/Assignments/module-4/SpeakGoodBye.js /
@siddartha19
siddartha19 Add files via upload
Latest commit 2843c8e on Dec 27, 2018
 History
 1 contributor
34 lines (22 sloc)  992 Bytes
  
// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.


// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2


// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;


(function(window) {
	var speakWord = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);
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
