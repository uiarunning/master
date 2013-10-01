#import "helper_functions.js"
#import "login_functions.js"

//begin_logging
var testName = "*** Nike+ Running : Log In ***"
UIALogger.logStart(testName);

//begin_login
cleanLogin("yuppy@guppy.com", "Nike1234");

//sample_screen_capture
target.delay(5);
logMessage ("Taking Screen Capture");
captureScreen("login_screen_capture")

//end_logging
UIALogger.logPass(testName);