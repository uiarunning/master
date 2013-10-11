#import "../screens/welcome_screen.js";
#import "../screens/settings.js";
#import "../screens/account.js";
#import "../screens/main_menu.js";
#import "../screens/common/navigation_bar.js";

//starts and ends at the main menu
function logout_user(){
    
    touch_settings();
    touch_user_button();
    
    //logging out
    touch_logout();
    touch_disconnect_nikeplus();
    
    //will be at get started
    touch_get_started_and_navigate_home();
    open_menu();
}

//starts and ends at home
function logout_user_home(){
    
        open_menu();
        touch_settings();
        touch_user_button();
        
        //logging out
        touch_logout();
        touch_disconnect_nikeplus();
        
        //will be at get started
        touch_get_started_and_navigate_home();
}

//starts at home page
function logout_and_finish(){
    
    open_menu()
    touch_settings()
    touch_user_button()
    
    //logging out
    touch_logout();
    touch_disconnect_nikeplus();
}

//begin on logged out home page, end on logged in home page
function login_nikeplus_user(email, password){
    
    open_menu()
    if (logged_in()) {
        
        logout_user()
    }
    
    touch_login()
    touch_login_with_nikeplus();
    enter_username_and_password(email, password);
    UIATarget.localTarget().delay(5)
}

function register_nikeplus_user(){

    open_menu()
    if (logged_in()) {
    
        logout_user()
    }

    touch_login()
    touch_register();
    var user1 = enter_registration_information();
    UIATarget.localTarget().delay(5);
    return user1
}






