
#import "../screens/welcome_screen.js";
#import "../screens/settings.js";
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
var testName = "Search, request, and accept a friend";
UIALogger.logStart(testName);

if (on_welcome_screen()){
    touch_get_started_and_navigate_home();
}
screenshot("start up screen");


// begin on logged out home page
// register two users for the test
user1 = register_nikeplus_user();
UIALogger.logStart("registered user 1: " + user1.username );
screenshot("user1");
logout_user_home();

user2 = register_nikeplus_user();
UIALogger.logStart("registered user 2: " + user2.username );
screenshot("user2")
open_menu();


// user two navigates to the friends page and searches for user 1
touch_friends();

var user_found = search_for_friend(user1);
if (user_found) {
    UIALogger.logStart("user found");
} else {
    UIALogger.logFail(testName + " ERROR - user not found");
}


// user two adds user 1 and logs out
var added = add_friend(user1);
if (added) {
    UIALogger.logStart("user added");
} else {
    UIALogger.logFail(testName + " ERROR - user not added");
}
screenshot("some screenshot");
touch_done_right();
open_menu();
touch_home();
logout_user_home();


// user one logs in and accepts the friend request
open_menu();
touch_login();
touch_login_with_nikeplus();
enter_username_and_password(user1.email, "Password1");
open_menu();
accept_friend();

// logging out
open_menu()
touch_settings();
settings_page_users_button_tap()
touch_logout();
screenshot("screenshot");
touch_disconnect_nikeplus();


UIALogger.logPass(testName);





