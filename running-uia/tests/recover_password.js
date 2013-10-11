#import "../screens/welcome_screen.js";
#import "../screens/webviews/recover_password_screen.js";
#import "../screens/main_menu.js";
#import "../screens/common/navigation_bar.js";
#import "../screens/webviews/choose_login.js";
#import "../screens/webviews/login_with_nikeplus.js";
#import "../util/util.js";


var target = UIATarget.localTarget();

var testName = "Recover nikeplus password";
UIALogger.logStart(testName);

if (on_welcome_screen()){
    touch_get_started_and_navigate_home()
}

screenshot("start up screen");

//begin on logged out home page
open_menu()
if (logged_in()) {
    
    logout_user()
}

touch_login()
touch_login_with_nikeplus();
touch_forgot_password_link()
enter_email_to_recover_password("alana.hosick@nike.com")
touch_send_email();

if (got_password_sent_notice()){
    UIALogger.logPass(testName);
}
else {
    UIALogger.logFail(testName);
}
