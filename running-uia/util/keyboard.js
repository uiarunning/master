

function type_string(string, field){
    
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(0.2);
    field.tap();
    UIATarget.localTarget().popTimeout();

    UIATarget.localTarget().delay(0.5);
    for (var i = 0; i < string.length; i++){
        var character = string.charAt(i);
        UIATarget.localTarget().delay(0.1);
        target.frontMostApp().keyboard().typeString(character);
    }
    UIATarget.localTarget().delay(1);
    if (field.value() != string){
        delete_field(field);
        type_string(string, field)
    }
    
}

function type_password(string, field){
    
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(0.2);
    field.tap();
    UIATarget.localTarget().popTimeout();
    
    UIATarget.localTarget().delay(0.5);
    for (var i = 0; i < string.length; i++){
        var character = string.charAt(i);
        UIATarget.localTarget().delay(0.1);
        target.frontMostApp().keyboard().typeString(character);
    }

}

function delete_field(field){
    
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(2);
    field.tap();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(2);
    target.frontMostApp().keyboard().keys()["Delete"].touchAndHold(2.7);
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(2);
}

function touch_done_keyboard(){
    
    target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
}

function touch_enter_keyboard(){
    target.frontMostApp().keyboard().typeString("\n");
}