
#import "../screens/welcome_screen.js";
#import "../screens/run_setup.js";
#import "../screens/run_screen.js";
#import "../screens/run_summary.js";
#import "../screens/settings.js";
#import "../screens/account.js";
#import "../screens/main_menu.js";
#import "../screens/common/navigation_bar.js";
#import "../screens/webviews/choose_login.js";
#import "../screens/webviews/login_with_nikeplus.js";
#import "../util/util.js";
#import "../util/complex_actions.js";

var target = UIATarget.localTarget();
var testName = "Simple outdoor run";
UIALogger.logStart(testName);

var a = on_welcome_screen();
if (on_welcome_screen()){
    touch_get_started_and_navigate_home()
}

screenshot("start up screen");

//begin on logged out home page
open_menu();
if (logged_in()) {
    logout_user();
}

touch_login();
touch_login_with_nikeplus();
enter_username_and_password("testyrunner@nikeqa.com", "Password1");

//setup and begin run
touch_run();
dismiss_cheers_if();
select_outdoor();
dismiss_cheers_if();
dismiss_weak_gps_if();
touch_begin_run();
dismiss_weak_gps_if();

//run
UIATarget.localTarget().delay(30);//length of run

//end run
pause_run();
end_run();

dismiss_achievement_if();
dismiss_achievement_if();

touch_done_left();

logout_and_finish();
UIALogger.logPass(testName);


