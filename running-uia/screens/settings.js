#import "../util/util.js";
#import "../util/alert.js";


function settings_page_users_button_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].tapWithOptions({tapOffset:{x:0.93, y:0.10}});
    UIATarget.localTarget().popTimeout();
}
function settings_page_profile_details_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Profile Details"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Profile Details"].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_share_settings_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Share Settings"].scrollToVisible();
    UIATarget.localTarget().popTimeout()
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Share Settings"].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_privacy_settings_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["settings.section1.button.privacysettings"].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_run_countdown_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].groups()["While Running"].elements()["While Running"].scrollToVisible();
    UIATarget.localTarget().popTimeout()
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].elements()[9].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_orientation_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].elements()[10].scrollToVisible();
    UIATarget.localTarget().popTimeout()
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].elements()[10].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_auto_voice_feedback_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].groups()["While Running"].elements()["While Running"].scrollToVisible();
    UIATarget.localTarget().popTimeout()
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Auto Voice Feedback"].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_powersongs_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Powersongs"].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_pause_run_for_calls_toggle_on(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Pause Run for Calls"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Pause Run for Calls"].switches()["Pause Run for Calls"].setValue(1);
    UIATarget.localTarget().popTimeout();
}
function settings_page_pause_run_for_calls_toggle_off(){
    UIATarget.localTarget().pushTimeout(20);
   target.frontMostApp().mainWindow().tableViews()[1].cells()["Pause Run for Calls"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Pause Run for Calls"].switches()["Pause Run for Calls"].setValue(0);
    UIATarget.localTarget().popTimeout();
}
function settings_page_music_tied_to_run_controls_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Music Tied to Run Controls"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Music Tied to Run Controls"].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_show_color_level_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Show Level Color"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Show Level Color"].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_run_pause_indicator_toggle_on(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Use run pause indicator"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Use run pause indicator"].switches()["Use run pause indicator"].setValue(0);
    UIATarget.localTarget().popTimeout();
}
function settings_page_run_pause_indicator_toggle_off(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Use run pause indicator"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Use run pause indicator"].switches()["Use run pause indicator"].setValue(0);
    UIATarget.localTarget().popTimeout();
}
function settings_page_run_reminder_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Run Reminder"].staticTexts()["Run Reminder"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Run Reminder"].staticTexts()["Run Reminder"].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_leaderboard_on_homescreen_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Leaderboard on Home Screen"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Leaderboard on Home Screen"].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_retire_a_shoe_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Retire a Shoe"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Retire a Shoe"].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_about_nikeplus_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["About Nike+"].staticTexts()["About Nike+"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["About Nike+"].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_tour_the_app_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Tour the App"].staticTexts()["Tour the App"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Tour the App"].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_support_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Support"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Support"].tap();
    UIATarget.localTarget().popTimeout();
}
function settings_page_privacy_policy_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Privacy Policy"].scrollToVisible();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["Privacy Policy"].tap();
    UIATarget.localTarget().popTimeout();
}


function touch_user_button(){
    
    UIATarget.localTarget().captureScreenWithName("logged in settings");
    settings_page_users_button_tap();
    screenshot("account screen");
}
function on_settings_screen(){
    
	//TODO
}

//TODO - add verification for screen change
function settings_page_verify_profile_details(){
    settings_page_profile_details_tap();
    touch_back();
}
function settings_page_verify_share_settings(){
    settings_page_share_settings_tap();
    touch_back();
}
function settings_page_verify_run_countdown(){
    settings_page_run_countdown_tap();
    touch_back();
}
function settings_page_verify_orientation(){
    settings_page_orientation_tap();
    touch_back();
}
function settings_page_verify_auto_voice_feedback(){
    settings_page_auto_voice_feedback_tap();
    touch_back();
}
function settings_page_verify_powersongs(){
    settings_page_powersongs_tap();
    touch_back();
}
function settings_page_verify_pause_run_for_calls(){
    settings_page_pause_run_for_calls_toggle_on();
    settings_page_pause_run_for_calls_toggle_off();
}
function settings_page_verify_show_color_level(){
    settings_page_show_color_level_tap();
}
function settings_page_verify_run_pause_indicator(){
    settings_page_run_pause_indicator_toggle_on();
    settings_page_run_pause_indicator_toggle_off();
}
function settings_page_verify_leaderboard_on_homescreen(){
    settings_page_leaderboard_on_homescreen_tap();
}
function settings_page_verify_run_reminder(){
    settings_page_run_reminder_tap();
    target.frontMostApp().toolbar().buttons()["Close"].tap();
}
function settings_page_verify_retire_a_shoe(){
    settings_page_retire_a_shoe_tap();
    touch_back();
}
function settings_page_verify_about_nikeplus(){
    settings_page_about_nikeplus_tap();
    touch_back();
}
function settings_page_verify_tour_the_app(){
    settings_page_tour_the_app_tap();
    touch_back();
}
function settings_page_verify_support(){
    settings_page_support_tap();
    touch_back();
}
function settings_page_verify_privacy_policy(){
    settings_page_privacy_policy_tap();
    touch_back();
}







