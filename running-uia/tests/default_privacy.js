
#import "../screens/welcome_screen.js";
#import "../screens/settings.js";
#import "../screens/privacy_settings.js";
#import "../screens/friends.js";
#import "../screens/account.js";
#import "../screens/main_menu.js";
#import "../screens/common/navigation_bar.js";
#import "../screens/webviews/choose_login.js";
#import "../screens/webviews/login_with_nikeplus.js";
#import "../screens/webviews/register_with_nikeplus.js";
#import "../util/util.js";
#import "../util/User.js";
#import "../util/complex_actions.js";

var target = UIATarget.localTarget();
var testName = "Default Privacy";
var pass = false;
UIALogger.logStart(testName);

if (on_welcome_screen()){
    touch_get_started_and_navigate_home();
}
screenshot("start up screen");


// begin on logged out home page
// register user 1
user1 = register_nikeplus_user();
UIALogger.logStart("registered user 1: " + user1.username );
screenshot("user1");

open_menu();

touch_settings();
UIATarget.localTarget().delay(3);

settings_page_privacy_settings_tap()

UIATarget.localTarget().delay(3);

//confirm new user has privacy set to default
privacy_is_default = confirm_privacy_is_set_to_default();
if (!privacy_is_default){
	UIALogger.logFail(testName);
}
touch_back();
logout_user_home();

//register user 2
user2 = register_nikeplus_user();
UIALogger.logStart("registered user 2: " + user2.username );
screenshot("user2");
open_menu();

// user two navigates to the friends page and searches for user 1
touch_friends();

//confirm user 2 can search for user 1 (a social user)
var user1_found = search_for_friend(user1);
if (user1_found) {
    UIALogger.logStart("user found");
} else {
    pass = false;
    UIALogger.logFail(testName + " ERROR - user not found");
}
screenshot("some screenshot");
touch_done_right();
open_menu();

touch_settings();

settings_page_privacy_settings_tap();

//user 2 sets privacy to private
privacy_settings_me_only_tap();

touch_back();
logout_user_home();

open_menu();
touch_login();
touch_login_with_nikeplus();

//user 1 logs in
enter_username_and_password(user1.email, "Password1");
open_menu();

// user one searches for user 2
touch_friends();

var user2_found = search_for_friend(user2);
if (user2_found) {
    pass = false;
	UIALogger.logFail(testName + " ERROR - private user found");  
} else {
    UIALogger.logStart("user not found");
}

touch_done_right();
open_menu();
touch_home();
logout_user_home();

if(pass){
    UIALogger.logPass(testName);
}else{
    UIALogger.logFail(testName);
}

UIATarget.onAlert = function onAlert(alert) {
    var title = alert.name();
    
    // add a warning to the log for each alert encountered
    UIALogger.logWarning("Alert with title '" + title + "' encountered!");
    UIATarget.localTarget().captureScreenWithName("alert_" + title);
    
    UIATarget.localTarget().delay(1)
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().alert().buttons()["OK"].tap();
    UIATarget.localTarget().popTimeout();
 
    return false;
  
}





