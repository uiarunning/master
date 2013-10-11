#import "../util/util.js";
//#import "../util/alert.js";



function privacy_settings_learn_more_social_button_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].tapWithOptions({tapOffset:{x:0.64, y:0.56}});
    UIATarget.localTarget().popTimeout();
}
function privacy_settings_friends_social_title(){
    return target.frontMostApp().mainWindow().scrollViews()[0].staticTexts()["FRIENDS (SOCIAL)"];
}
function privacy_settings_close_settings_detail_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().buttons()["profile close button"].tap();
    UIATarget.localTarget().popTimeout();
}
function privacy_settings_me_only_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["privacysettings.section1.button.meonly"].tap();
    UIATarget.localTarget().popTimeout();
}
function confirm_privacy_is_set_to_default(){
  
    var confirmation = false;
    privacy_settings_learn_more_social_button_tap()
    if (privacy_settings_friends_social_title().isValid()){
        confirmation = true;
    }
    privacy_settings_close_settings_detail_tap();
    return confirmation;
}







