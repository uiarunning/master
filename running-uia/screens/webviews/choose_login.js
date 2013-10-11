#import "../../util/util.js";

function choose_login_screen_nikeplus_tap(){
    UIATarget.localTarget().pushTimeout(60);
    target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].tapWithOptions({tapOffset:{x:0.48, y:0.15}});
    UIATarget.localTarget().popTimeout();
}
function choose_login_screen_register_tap(){
    UIATarget.localTarget().pushTimeout(60);
    target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["SIGN UP FOR NIKE+, Don't have a Nike+ account yet?"].tap();
    UIATarget.localTarget().popTimeout();
}


function on_choose_login_page(){
    
    //TODO
}

function touch_login_with_nikeplus(){
    
    UIATarget.localTarget().delay(5);
    choose_login_screen_nikeplus_tap()
    screenshot("logging in with nikeplus");
}

function touch_login_with_facebook(){
    
    //TODO

}

function touch_register(){
    
    UIATarget.localTarget().delay(5);
    choose_login_screen_register_tap()
    screenshot("registering with nikeplus");
}