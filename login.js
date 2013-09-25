#import "vars.js"

//begin_logging
var testName = "*** Nike+ Running : Log In : Test ***"
UIALogger.logStart(testName);

//sample_message
logMessage("Ya'll want this party started quickly, right?");

//begin_login
target.delay(3);
checkForGetStarted();

//check_for_get_started
function checkForGetStarted() {
	if (window.buttons()["TourTheApp"].checkIsValid())
		{
			window.buttons()[1].tap();
			target.delay(5);
			logIn();
		}
	else
		{
			checkForLogin();
		}
}

//check_for_login
function checkForLogin() {
	navBarTap();
	target.delay(0.5);
	navSettingsTap();
	target.delay(0.5);
	if (window.tableViews()[1].buttons()["settings signin button"].checkIsValid())
		{
			window.tableViews()[1].buttons()["settings signin button"].tap();
			target.delay(3.5);
			logIn();
		}
	else
		{
			logOut();
			logIn();
		}
}

//logout
function logOut() {
	window.tableViews()[1].tapWithOptions({tapOffset:{x:0.93, y:0.08}});
	target.delay(0.5);
	app.navigationBar().buttons()["account.navigation.button.logout"].tap();
	target.delay(1);
	app.actionSheet().buttons()["Disconnect Nike+"].tap();
	target.delay(1.5);
	window.buttons()[1].tap();
	target.delay(3.5);

}

//login
function logIn() {
	window.scrollViews()[0].webViews()[0].tapWithOptions({tapOffset:{x:0.46, y:0.21}});
	target.delay(1);
	window.scrollViews()[0].webViews()[0].textFields()[0].tap();
	app.keyboard().typeString("edwin@botomat.com");
	target.delay(1);
	window.scrollViews()[0].webViews()[0].secureTextFields()[0].tap();
	target.delay(1);
	app.keyboard().typeString("Passw0rd");
	target.delay(1);
	window.scrollViews()[0].webViews()[0].buttons()["Log in"].tap();
}

//sample_screen_capture
target.delay(5);
captureScreen("login")

//end_logging
UIALogger.logPass(testName);







