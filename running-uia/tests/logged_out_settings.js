#import "../screens/welcome_screen.js";
#import "../screens/settings.js";
#import "../screens/account.js";
#import "../screens/main_menu.js";
#import "../screens/common/navigation_bar.js";
#import "../util/util.js";

var target = UIATarget.localTarget();
var testName = "Logged out settings";
UIALogger.logStart(testName);

if (on_welcome_screen()){
    touch_get_started_and_navigate_home();
}

screenshot("start up screen");

//begin on logged out home page
open_menu();
if (logged_in()) {
    logout_user();
}
touch_settings();

settings_page_verify_profile_details();
settings_page_verify_share_settings();
settings_page_verify_run_countdown();
settings_page_verify_orientation();
settings_page_verify_auto_voice_feedback();
settings_page_verify_powersongs();
settings_page_verify_pause_run_for_calls();
settings_page_verify_show_color_level();
settings_page_verify_run_pause_indicator();
settings_page_verify_leaderboard_on_homescreen();
settings_page_verify_retire_a_shoe();
settings_page_verify_about_nikeplus();
settings_page_verify_tour_the_app();
settings_page_verify_support();
settings_page_verify_privacy_policy();

//UIATarget.localTarget().delay(5)
UIALogger.logPass(testName);