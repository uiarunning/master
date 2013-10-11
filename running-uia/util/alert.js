

UIATarget.onAlert = function onAlert(alert) {
    var title = alert.name();
    
    // add a warning to the log for each alert encountered
    UIALogger.logWarning("Alert with title '" + title + "' encountered!");
    UIATarget.localTarget().captureScreenWithName("alert_");
    
    UIATarget.localTarget().delay(1)
    if (title == "You need to be logged into Nike. Log in now?"){
    
        UIATarget.localTarget().pushTimeout(20);
        target.frontMostApp().alert().cancelButton().tap();
        UIATarget.localTarget().popTimeout();
        
        return true;
    }else{
        return false;
    }
}