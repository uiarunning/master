#import "../../util/util.js";

function on_recover_password_screen(){
    
	//TODO
}

function enter_email_to_recover_password(email){
    
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(2);
   target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].textFields()[1].tap();
    target.frontMostApp().keyboard().typeString(email);
    UIATarget.localTarget().popTimeout();
}

function touch_send_email(){
    
    target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].buttons()["Send Email"].tap();
}

function got_password_sent_notice(){
    
    UIATarget.localTarget().delay(5);
    var password_sent_notice = target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].staticTexts()["We've sent you an email with instructions on how to reset your password. Click the back link above to try to log in again."];
    
    screenshot("password recovery notice")
    
	if (password_sent_notice.isValid()){
        UIALogger.logStart("password sent");
		return true;
	}
	else
        UIALogger.logStart("password not sent");
    return false;
}