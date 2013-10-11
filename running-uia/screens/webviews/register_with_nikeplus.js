#import "../../util/util.js";
#import "../../util/User.js";
#import "../common/navigation_bar.js";


function reg_nikeplus_firstname_field(){
    return target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].textFields()[0];
}
function reg_nikeplus_lastname_field(){
    return target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].textFields()[1];
}
function reg_nikeplus_email_field(){
    return target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].textFields()[2];
}
function reg_nikeplus_username_field(){
    return target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].textFields()[3];
}
function reg_nikeplus_password1_field(){
    return target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].secureTextFields()[0];
}
function reg_nikeplus_password2_field(){
    return target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].secureTextFields()[1];
}
function reg_nikeplus_zip_field(){
    return target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].textFields()[4];
}
function reg_nikeplus_country_field(){
    return target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].elements().firstWithPredicate("value like 'Country'");
}
function reg_nikeplus_usa_choice(){
    return target.frontMostApp().windows()[1].pickers()[0].wheels()[0];
}
function reg_nikeplus_gender_field(){
    return target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].elements().firstWithPredicate("value like 'Gender'");
}
function reg_nikeplus_male_choice(){
    return target.frontMostApp().windows()[1].pickers()[0].wheels()[0];
}
function reg_nikeplus_signup_button(){
    return target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].buttons()["Sign up"];
}

function on_register_with_nikeplus_page(){
    
    //TODO
}

function enter_registration_information(){
    
    var registered_user = new User();
    var username = registered_user.username;
    var email = registered_user.email;
    var firstname = registered_user.firstname;
    var lastname = registered_user.lastname;
    
    UIATarget.localTarget().delay(0.5);
    
    //enter name
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(0.5);
    reg_nikeplus_firstname_field().tap();
    
    UIATarget.localTarget().popTimeout();
    target.frontMostApp().keyboard().typeString(firstname);
    
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(0.5);
    reg_nikeplus_lastname_field().tap();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(0.5);
    target.frontMostApp().keyboard().typeString(lastname);

    target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
    
    //enter email
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(1);
    reg_nikeplus_email_field().tap();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(1);
    target.frontMostApp().keyboard().typeString(email);
    target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
                                                
    //enter username
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(0.5);
    reg_nikeplus_username_field().tap()
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(0.5);
    target.frontMostApp().keyboard().typeString(username);
    target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
    
     screenshot("random username and email entered");
    
    //enter password
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(2);
    reg_nikeplus_password1_field().tap();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(2);
    target.frontMostApp().keyboard().typeString("Password1");
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(2);
                                                
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(2);
    reg_nikeplus_password2_field().tap();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(2);
    target.frontMostApp().keyboard().typeString("Password1");
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(2);
                                                
    target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
                                                
                                                
    //enter zip
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(0.5);
    reg_nikeplus_zip_field().tap();
    UIATarget.localTarget().popTimeout();
    target.frontMostApp().keyboard().typeString("15044");
    target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();

    //enter country
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(1);
    reg_nikeplus_country_field().tapWithOptions({tapOffset:{x:0.33, y:0.61}});
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(1);
    reg_nikeplus_usa_choice().tapWithOptions({tapOffset:{x:0.45, y:0.61}});
    UIATarget.localTarget().delay(1);
    target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
                                                
    //enter gender
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(1);
    reg_nikeplus_gender_field().tapWithOptions({tapOffset:{x:0.54, y:0.76}});
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(3);
    reg_nikeplus_male_choice().tapWithOptions({tapOffset:{x:0.51, y:0.62}});
    UIATarget.localTarget().delay(1);
    target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
                                            
                                                
    //press sign up
    touch_sign_up();
    screenshot("logged in homepage");
    
    return registered_user;

}

function touch_sign_up(){
    
    UIATarget.localTarget().pushTimeout(20);
    UIATarget.localTarget().delay(2);
    //target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].buttons()["Sign up"].tap();
    reg_nikeplus_signup_button().tap();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(5);
}


