#import "vars.js"
#import "login_functions.js"

//begin_logging
var testName = "*** Nike+ Running : Start A Run ***"
UIALogger.logStart(testName);

//sample_message
logMessage("Ya'll want this party started quickly, right?");

//login_credentials
var username = "edwin@botomat.com"; //enter the username you want to use
var password = "Passw0rd"; //enter the password

//begin_login
target.delay(3);
//checkForGetStarted();

//
target.delay(3);
navBarTap();
target.delay(3);
navHomeTap();
target.delay(3);
startRunTap();