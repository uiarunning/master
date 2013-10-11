
#import "../screens/welcome_screen.js";
#import "../screens/settings.js";
#import "../screens/account.js";
#import "../screens/main_menu.js";
#import "../screens/common/navigation_bar.js";
#import "../screens/webviews/choose_login.js";
#import "../screens/webviews/login_with_nikeplus.js";
#import "../util/util.js";

var target = UIATarget.localTarget();
var testName = "Simple login and logout";
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
enter_username_and_password("testy@nikeqa.com", "Password1");
open_menu();
touch_settings();
touch_user_button()

//logging out
touch_logout();
touch_disconnect_nikeplus();

UIALogger.logPass(testName);