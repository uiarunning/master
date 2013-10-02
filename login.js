#import "helper_functions.js"
#import "login_functions.js"

//begin_logging
var testName = "*** Nike+ Running : Log In ***"
UIALogger.logStart(testName);

//begin_login
cleanLogin("edwin@botomat.com", "Passw0rd");

//sample_screen_capture
target.delay(5);
logMessage ("Taking Screen Capture");
captureScreen("login_screen_capture")

//navigate_to_settings
navBarTap();
navSettingsTap();
window.tableViews()[1].tapWithOptions({tapOffset:{x:0.92, y:0.08}});

//verify_email
function verifyEmail() {
	if (window.tableViews()[2].staticTexts()[user_login].checkIsValid()) {
		UIALogger.logPass(testName);
	}
	else {
		UIALogger.logFail(testName);
	}
}

verifyEmail();