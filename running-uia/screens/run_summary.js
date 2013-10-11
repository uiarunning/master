#import "../util/util.js";

function on_run_summary_screen(){
    
	//TODO
}

function dismiss_achievement_if(){
    
    UIATarget.localTarget().delay(2);
    var achievement = target.frontMostApp().mainWindow().buttons()["achievements close button"];
    if (achievement.isValid()){
        UIALogger.logStart("dismissing achievement");
		target.frontMostApp().mainWindow().buttons()["achievements close button"].tap();
	}
    screenshot("achievement dismissed");
}

function end_run(){
    
    
    UIATarget.localTarget().delay(5);
    target.dragFromToForDuration({x:33.50, y:458.50}, {x:281.50, y:479.50}, 0.6);
    
    screenshot("run ended");
}

