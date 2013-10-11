#import "../util/util.js";

function on_run_screen(){
    
	//TODO
}

function pause_run(){
    
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().buttons()["runinprogress.section1.button.pause"].tap();
    UIATarget.localTarget().popTimeout();
    
    screenshot("run paused");
}

function end_run(){
    
    UIATarget.localTarget().delay(5);
    target.dragFromToForDuration({x:33.50, y:458.50}, {x:281.50, y:479.50}, 0.6);
    
    screenshot("run ended");
}

function dismiss_weak_gps_if(){
    
    UIATarget.localTarget().delay(3);
    var weak_gps = target.frontMostApp().mainWindow().buttons()["continueRunButton"];
    
    if (weak_gps.isValid()){
        target.frontMostApp().mainWindow().buttons()["continueRunButton"].tap();
    }
}