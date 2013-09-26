#import "vars.js"
#import "login_functions.js"

//begin_logging
var testName = "*** Nike+ Running : Start A Run ***"
UIALogger.logStart(testName);

//sample_message
logMessage("Ya'll want this party started quickly, right?");

//login_credentials
var username = "yuppy@guppy.com"; //enter the username you want to use
var password = "Nike1234"; //enter the password

//begin_login
target.delay(3);
checkForGetStarted();

//
target.delay(3);
navBarTap();
target.delay(3);
navHomeTap();
target.delay(3);
startRunTap();