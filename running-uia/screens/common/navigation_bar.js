#import "../../util/util.js";

function touch_cancel(){
    
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(1);
    target.frontMostApp().navigationBar().leftButton().tap();//cancel
    UIATarget.localTarget().popTimeout();
}

function open_menu(){
    
    UIATarget.localTarget().delay(5);
    UIATarget.localTarget().pushTimeout(20);
	target.frontMostApp().navigationBar().leftButton().tap();//open menu
    UIATarget.localTarget().popTimeout();
}

function touch_logout(){
    
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().navigationBar().rightButton().tap();
    UIATarget.localTarget().popTimeout();
    screenshot("logging out");
}

function touch_run(){
    
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().navigationBar().elements()["common.navigation.button.run"].tap();
    UIATarget.localTarget().popTimeout();
}

function touch_done_left(){
    
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(1);
    target.frontMostApp().navigationBar().leftButton().tap();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(1);
}

function touch_done_right(){
    
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(1);
    target.frontMostApp().navigationBar().rightButton().tap();//done
    UIATarget.localTarget().popTimeout();
}

function touch_add(){
    
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(1);
    target.frontMostApp().navigationBar().rightButton().tap();//done
    UIATarget.localTarget().popTimeout();
}

function touch_back(){
    
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(1);
    target.frontMostApp().navigationBar().leftButton().tap();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(1);
}




