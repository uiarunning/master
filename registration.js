#import "helper_functions.js"
#import "login_functions.js"

// to-do
// verify that we're logged in on the home screen and verify registration info (first and last name, screenname, email)
// eliminate use of x-y coordinates for picker
// use array of real zipcodes (randomized)


var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();


var d = new Date();
var n = d.getTime();

var screenname = "testy" + n; // default username used when none is passed to Register function
var newemail = "test" + n + "@nikeqa.com"; // default username used when none is passed to Register function
var zipcode = "10018"; //just using this variable in case we want to make zip dynamic
var fname = "TesterWill"; //just using this variable in case we want to make firstname dynamic
var lname = "McTestingville"; //just using this variable in case we want to make lastname dynamic
var fullname = fname + " " + lname;


//verify_email
function verifyNewUser() {
	UIALogger.logMessage("in method.");
	if (window.tableViews()[1].staticTexts()[newemail].checkIsValid()) {
		UIALogger.logMessage("passed first if.");
		UIALogger.logPass(testName + "Level 1 only");
		if (window.tableViews()[1].staticTexts()[fullname].checkIsValid()) {
			UIALogger.logPass(testName + "Full name");
		} else {
		UIALogger.logFail(testName + "Failed at full name");	
		} // end name/email check	
	} else {
		UIALogger.logMessage("Failed in method level 1.");
		UIALogger.logFail(testName);
	}
}
	
// run through entire login process

	//begin_logging
	var testName = "*** Nike+ Running : Register ***"
	UIALogger.logStart(testName);
    
	//begin_Register
	target.delay(3);
	if(checkForGetStartedScreen()){
        Register();
	}
	else if (checkForLoginScreen()){
        Register();
	}
	else {
		logOut();
		Register();
	}
    
	//sample_screen_capture
	target.delay(5);
	captureScreen("Register")
    
	//end_logging
	UIALogger.logPass(testName);


//Register
function Register() {
	
	//clicks signup button on login page
	target.delay(3);
	window.scrollViews()[0].webViews()[0].links()["SIGN UP FOR NIKE+, Don't have a Nike+ account yet?"].tap();
	target.delay(1);
	
	//enters first name, last name on registration
	window.scrollViews()[0].webViews()[0].textFields().firstWithPredicate("value like 'First Name'").tap();
	app.keyboard().typeString(fname);
	UIALogger.logMessage("Entered firstname: " + fname);
	target.delay(1);
	window.scrollViews()[0].webViews()[0].textFields().firstWithPredicate("value like 'Last Name'").tap();
	target.delay(1);
	app.keyboard().typeString(lname);
	UIALogger.logMessage("Entered lastname: " + lname);
	target.delay(1);
	
	//enters email and username on registration
	window.scrollViews()[0].webViews()[0].textFields().firstWithPredicate("value like 'Email Address'").tap();
	target.delay(1);
	app.keyboard().typeString(newemail);
	UIALogger.logMessage("Entered email: " + newemail);
	target.delay(1);
	window.scrollViews()[0].webViews()[0].textFields().firstWithPredicate("value like 'Screen Name'").tap();
	target.delay(1)
	app.keyboard().typeString(screenname);
	UIALogger.logMessage("Entered screen name: " + screenname);
	
	//enters Nike1234 as password
	target.delay(1);
	window.scrollViews()[0].webViews()[0].secureTextFields()[0].tap();
	target.delay(1);
	app.keyboard().typeString("Nike1234");
	target.delay(1);
	window.scrollViews()[0].webViews()[0].secureTextFields()[1].tap();
	target.delay(1);
	app.keyboard().typeString("Nike1234");
	UIALogger.logMessage("Entered password Nike1234");
	target.delay(1);
	
	//add zip code
	window.scrollViews()[0].webViews()[0].textFields().firstWithPredicate("value like 'Enter Zip Code'").tap();
	target.delay(1);
	app.keyboard().typeString(zipcode);
	UIALogger.logMessage("Entered zipcode: " + zipcode);
	target.delay(1);
	
	//Choose Country
	window.scrollViews()[0].webViews()[0].elements().firstWithPredicate("value like 'Country'").tap();
	target.delay(1);
	target.frontMostApp().windows()[1].pickers()[0].wheels().firstWithPredicate("value like 'Country. 1 of 244'").tapWithOptions({tapOffset:{x:0.45, y:0.61}});
	target.delay(1);
	UIALogger.logMessage("Entered country: United States");
	target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
	target.delay(1);
	
	//Choose Gender
	target.delay(1);
	window.scrollViews()[0].webViews()[0].elements().firstWithPredicate("value like 'Gender'").tap();
	target.delay(1);
	target.frontMostApp().windows()[1].pickers()[0].wheels()[0].tapWithOptions({tapOffset:{x:0.45, y:0.61}});
	UIALogger.logMessage("Entered gender: Male");
	target.delay(1);
	target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
	target.delay(1);
	
	window.scrollViews()[0].webViews()[0].buttons()["Sign up"].tap();
	target.delay(7);
	
	target.frontMostApp().mainWindow().tableViews()[1].tap();
		
	verifyNewUser(); 
	
	UIALogger.logMessage("Account created with following e-mail: " + newemail);
}
