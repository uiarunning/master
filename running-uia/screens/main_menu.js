#import "common/navigation_bar.js";

function main_menu_friend_request_button_tap(){
    UIATarget.localTarget().delay(5);
    target.frontMostApp().mainWindow().tableViews()["Empty list"].staticTexts()[1].tapWithOptions({tapOffset:{x:0.71, y:0.74}});
    UIATarget.localTarget().delay(5);
}

function on_main_menu(){
    
	//TODO
}

//TODO - not working
function logged_in(){
    
    UIATarget.localTarget().delay(3);
    var value = (target.frontMostApp().mainWindow().elements()["home.section1.value.distance"].value());
    var cell = target.frontMostApp().mainWindow().elements().withName("Login or Sign Up");
    
    UIALogger.logMessage(value);
    
    if (cell.isValid()) {
        UIALogger.logMessage("already logged in.");
        return true
    }
    else {
        UIALogger.logMessage("not logged in");
        return false
    }
}

function touch_profile(){
    
    UIATarget.localTarget().delay(3)
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().elements()["profileTrayCell"].tapWithOptions({tapOffset:{x:0.26, y:0.56}});
    UIATarget.localTarget().popTimeout();
}

function touch_login(){
    
    UIATarget.localTarget().delay(3)
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().elements()["profileTrayCell"].tapWithOptions({tapOffset:{x:0.26, y:0.56}});
    UIATarget.localTarget().popTimeout();
    
    screenshot("login page");
}


function touch_home(){
    
    UIATarget.localTarget().delay(1)
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[0].cells()["menu.section1.button.home"].tap();
    UIATarget.localTarget().popTimeout();
}

function touch_activity(){
    
    //TODO
}

function touch_friends(){
    
    UIATarget.localTarget().delay(10)
    UIATarget.localTarget().pushTimeout(20);
 target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["menu.section1.button.friends"].tapWithOptions({tapOffset:{x:0.98, y:0.96}});    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(3)
    
    var element = target.frontMostApp().mainWindow().staticTexts()["You have no saved runs."];
    UIATarget.localTarget().logElementTree();
    //this button can navigate to the activity page
    while (element.isValid()){
        open_menu()
        UIATarget.localTarget().delay(1)
        UIATarget.localTarget().pushTimeout(20);
        target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["menu.section1.button.friends"].tapWithOptions({tapOffset:{x:0.98, y:0.96}});    UIATarget.localTarget().popTimeout();
        UIATarget.localTarget().delay(1)

        }
}

function touch_challenges(){
    
    //TODO
}

function touch_settings(){
    
    UIATarget.localTarget().delay(3)
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["menu.section1.settings"].tap();
    UIATarget.localTarget().popTimeout();
}




