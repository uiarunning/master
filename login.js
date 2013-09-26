#import "vars.js"
#import "login_functions.js"

//begin_logging
var testName = "*** Nike+ Running : Log In : Test ***"
UIALogger.logStart(testName);

//sample_message
logMessage("Ya'll want this party started quickly, right?");

//login_credentials
var username = "edwin@botomat.com"; //enter the username you want to use
var password = "Passw0rd"; //enter the password

//begin_login
target.delay(3);
checkForGetStarted();

//sample_screen_capture
target.delay(5);
captureScreen("login")

//end_logging
UIALogger.logPass(testName);