user_login = "yuppy@guppy.com"; // default username used when none is passed to cleanLogin function
user_password = "Nike1234"; // default username used when none is passed to cleanLogin function

// run through entire login process 
function cleanLogin(username, password){

	// check if we were passed custom login info, use defaults if not
	if (username && password){
		user_login = username;
		user_password = password;
	}

	//begin_login
	target.delay(3);
	if(checkForGetStartedScreen()){
		logIn(user_login, user_password);
	}
	else if (checkForLoginScreen()){
		logIn(user_login, user_password);	
	}
	else {
		logOut();
		logIn(user_login, user_password);
	}
}


// Check for get started screen
function checkForGetStartedScreen() {
	if (window.buttons()["TourTheApp"].checkIsValid())
		{
			window.buttons()[1].tap();
			target.delay(5);
			return true;
		}
	return false;
}

//check_for_login
function checkForLoginScreen() {
	navBarTap();
	target.delay(0.5);
	navSettingsTap();
	target.delay(0.5);
	if (window.tableViews()[1].buttons()["settings signin button"].checkIsValid()){
			window.tableViews()[1].buttons()["settings signin button"].tap();
			target.delay(3.5);
			return true;
		}
	logMessage ("You are currently logged in.");
	return false;
}

//logout
function logOut() {
	logMessage ("App will now log out.");
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
function logIn(uname, pw) {
	logMessage ("App will now log in.");
	window.scrollViews()[0].webViews()[0].tapWithOptions({tapOffset:{x:0.46, y:0.21}});
	target.delay(1);
	window.scrollViews()[0].webViews()[0].textFields()[0].tap();
	app.keyboard().typeString(uname);
	target.delay(1);
	window.scrollViews()[0].webViews()[0].secureTextFields()[0].tap();
	target.delay(1);
	app.keyboard().typeString(pw);
	target.delay(1);
	window.scrollViews()[0].webViews()[0].buttons()["Log in"].tap();
}
