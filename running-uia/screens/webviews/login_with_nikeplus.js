
#import "../../util/util.js";
#import "../../util/keyboard.js";
#import "../common/navigation_bar.js";



function login_nikeplus_username_field(){
    return target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].textFields()[0];
}
function login_nikeplus_password_field(){
    return target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].secureTextFields()[0];
}
function login_nikeplus_forgot_password_link_tap(){
    
    UIATarget.localTarget().pushTimeout(20);
    return target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["FORGOT PASSWORD?, Forgot your password?"];
    UIATarget.localTarget().popTimeout();
}



function on_login_with_nikeplus_page(){
    
    //TODO
}

function enter_username_and_password(username, password){
    
    //enter username
    type_string(username, login_nikeplus_username_field());
    touch_done_keyboard()
    UIATarget.localTarget().delay(1);
    //UIATarget.localTarget().logElementTree();
    
    //enter password
    type_password(password, login_nikeplus_password_field());
    
    //press go
    screenshot("entered username and password");
    touch_enter_keyboard()
    
    screenshot("logged in homepage");
}

function touch_forgot_password_link(){
    
    login_nikeplus_forgot_password_link_tap();
    UIATarget.localTarget().delay(10);
}


