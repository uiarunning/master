#import "../util/util.js";


function on_account_screen(){
    
	//TODO
}

function touch_disconnect_nikeplus(){
    
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().actionSheet().buttons()["Disconnect Nike+"].tap();
    UIATarget.localTarget().popTimeout();
    
    screenshot("logging out");
}