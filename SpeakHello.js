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
Coursera-HTML-CSS-and-JavaScript-for-Web-Developers/Assignments/module-4/SpeakHello.js /
@siddartha19
siddartha19 Add files via upload
Latest commit 2843c8e on Dec 27, 2018
 History
 1 contributor
32 lines (22 sloc)  974 Bytes
  
// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.


// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;


(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

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
