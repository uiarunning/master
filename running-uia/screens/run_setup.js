#import "../util/util.js";

function on_run_setup_screen(){
    
	//TODO
}

function select_outdoor(){
    
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()["runsetup.section1.button.location"].tap();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().buttons()["location.section1.button.outdoor"].tap();
    UIATarget.localTarget().popTimeout();
    
    screenshot("outdoor run selected");
}

function dismiss_cheers_if(){
    
    UIATarget.localTarget().delay(2);
    var cheers_button = target.frontMostApp().mainWindow().buttons()["popup.getcheers.button.continue"];
    
    if (cheers_button.isValid()){
        UIALogger.logStart("dismissing cheers");
		target.frontMostApp().mainWindow().buttons()["popup.getcheers.button.continue"].tap();
	}
}

function touch_begin_run(){
    
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().buttons()["runsetup.section1.button.beginrun"].tap();
    UIATarget.localTarget().popTimeout();

    
}