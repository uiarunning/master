#import "common/navigation_bar.js";
#import "main_menu.js";

function welcome_screen_get_started_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().buttons()[1].tap();
    UIATarget.localTarget().popTimeout();
}

function on_welcome_screen(){
    
	var welcome_screen = target.frontMostApp().mainWindow().staticTexts()["WELCOME TO"]
    
	if (welcome_screen.isValid()){
        UIALogger.logStart("on welcome screen");
		return true;
	}
	else
        UIALogger.logStart("not on welcome screen");
        return false;
}

function touch_get_started_and_navigate_home(){
    
    welcome_screen_get_started_tap();
    touch_cancel()
    open_menu()
    touch_home()
}

function navigate_home_if_on_welcome_screen(){
    if (on_welcome_screen()){
        touch_get_started_and_navigate_home();
    }
}