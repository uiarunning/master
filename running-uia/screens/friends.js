#import "common/navigation_bar.js";

var target = UIATarget.localTarget();


// BUTTONS AND TAPS //

function friends_screen_zero_friends_button(){
    return target.frontMostApp().mainWindow().elements()["FIND & INVITE FRIENDS"];
}
function friends_screen_zero_friends_button_tap(){
    UIATarget.localTarget().pushTimeout(20);
    friends_screen_zero_friends_button().tap();
    UIATarget.localTarget().popTimeout();
}
function friends_screen_nikeplus_tab(){
    return target.frontMostApp().mainWindow().buttons()["friends nikeplus inactive"];
}
function friends_screen_nikeplus_tab_tap(){
    UIATarget.localTarget().pushTimeout(20);
    friends_screen_nikeplus_tab().tap();
    UIATarget.localTarget().popTimeout();
}
function friends_screen_search_friends_searchbar(){
    return target.frontMostApp().mainWindow().searchBars()[0];
}
function friends_screen_search_friends_searchbar_tap(){
    UIATarget.localTarget().pushTimeout(20);
    friends_screen_search_friends_searchbar().tap();
    UIATarget.localTarget().popTimeout();
}
function friends_screen_first_friend_results_cell(){
    return target.frontMostApp().mainWindow().tableViews()[0].cells()[0];
}
function friends_screen_first_friend_results_cell_tap(){
    UIATarget.localTarget().pushTimeout(20);
    friends_screen_first_friend_results_cell().tap();
    UIATarget.localTarget().popTimeout();
}
function friends_screen_friend_requested_button(){
    return target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[0].buttons()["REQUESTED"];
}
function friends_screen_accept_friend_button_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()["ADD MORE FRIENDS, Pull down to refresh..., Last Updated ... "].tableViews()["Empty list"].tapWithOptions({tapOffset:{x:0.79, y:0.64}});
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(2);
}
//TODO - not working
function friends_screen_slide_delete(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()[0].dragInsideWithOptions({startOffset:{x:0.95, y:0.50}, endOffset:{x:0.30, y:0.50},duration:1})
    UIATarget.localTarget().popTimeout();
}
function friends_screen_delete_tab_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()[1].cells()[0].buttons()["Delete"].tap();
    UIATarget.localTarget().popTimeout();
    UIATarget.localTarget().delay(5);
}
function friend_request_button_on_menu_tap(){
    UIATarget.localTarget().pushTimeout(20);
    target.frontMostApp().mainWindow().tableViews()["Empty list"].staticTexts()[1].tapWithOptions({tapOffset:{x:0.71, y:0.74}});
    UIATarget.localTarget().popTimeout();
}

// METHODS //

function on_friends_screen(){
    
	//TODO
}
                                                                      
function confirm_not_already_friends_with(name){
    
    if (zero_friends_button.isValid()){
        UIALogger.logStart("this user is starting without friends");
    }else if (no_results_found_add_friends_text.isValid()){
        UIALogger.logStart("this user is starting without friends");
    } else{
        delete_friend(name);
    }
}

function search_for_friend(user){
    
    var search_success = false;
    
    if (friends_screen_zero_friends_button().isValid()){
        UIALogger.logStart("this user is starting without friends");
        friends_screen_zero_friends_button_tap();
    }
    UIATarget.localTarget().delay(5);
    
    if(friends_screen_nikeplus_tab().isValid()){
        UIALogger.logStart("selecting nikeplus tab");
        friends_screen_nikeplus_tab_tap()
    }
                           
    friends_screen_search_friends_searchbar_tap();
    type_string(user.email, friends_screen_search_friends_searchbar());
    touch_enter_keyboard();
    
    if (friends_screen_first_friend_results_cell().isValid()){
        search_success = true;
        UIALogger.logStart("search success");
    }
    return search_success;
}

function add_friend(user){
    
    var request_success = false;
    
    friends_screen_first_friend_results_cell_tap()
    touch_add();
    touch_back();
    
    if (friends_screen_friend_requested_button().isValid()){
        request_success = true;
        UIALogger.logStart("friend has been requested");
    }
    return request_success;
}

function accept_friend(){
    
    friend_request_button_on_menu_tap();
    friends_screen_zero_friends_button().tap();
    UIATarget.localTarget().delay(5);
    touch_done_right();
    friends_screen_accept_friend_button_tap();

}
//TODO
function delete_friend(){
    
    friends_screen_slide_delete();
    friends_screen_delete_tab_tap();
}
                                                                      
function delete_all_friends(){
        //TODO
}
