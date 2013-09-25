var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

//alert_handler
UIATarget.onAlert = function onAlert(alert) {
	var title = alert.name();
	UIALogger.logWarning("*** Alert with title '" + title + "' encountered. ***");
	return false;
}

//log_message_settings
var logMessage = function (message) {
	UIALogger.logMessage("*** " + message + " ***");
}

//screen_capture_settings
var ssCounter = 000;
var padNumber = function (num) {
	return ('00' + num).substr(-3);
}
var captureScreen = function (filename) {
	target.captureScreenWithName(padNumber(ssCounter) + "-" + filename);
	ssCounter++;
}

//navigation_bar_buttons
var navBarTap = function () {
	app.navigationBar().buttons()["common.navigation.button.menu"].tap();
}

var navSettingsTap = function () {
	app.mainWindow().tableViews()["Empty list"].cells()["menu.section1.settings"].tap();
}