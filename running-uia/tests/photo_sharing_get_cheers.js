#import "../screens/welcome_screen.js";
#import "../screens/webviews/choose_login.js";
#import "../screens/common/navigation_bar.js";
#import "../screens/main_menu.js";
#import "../screens/cheers.js";
#import "../screens/webviews/login_with_nikeplus.js";
#import "../screens/run_setup.js"

var target = UIATarget.localTarget();

//log in as "edwin@botomat.com; Passw0rd"
var a = on_welcome_screen();
if (on_welcome_screen()){
    touch_get_started_and_navigate_home()
}

//begin on logged out home page
open_menu();
if (logged_in()) {
    logout_user();
}

touch_login();
touch_login_with_nikeplus();
enter_username_and_password("edwin@botomat.com", "Passw0rd");
target.delay(3);

//user navigates to run setup
touch_run();
dismiss_cheers_if();

//user taps 'get cheers'
run_setup_get_cheers_button_tap();

//user enables facebook
get_cheers_facebook_button_tap();
target.delay(3);

//user adds a comment
get_cheers_add_comment();

//user tags location
get_cheers_tag_location_button_tap();
target.delay(3);
get_cheers_search_and_tag_location("starbucks");

//user searches for a friend and tags him/her
get_cheers_tag_friends_button_tap();
target.delay(3);
dismiss_learn_more_tag_friends();
target.delay(3);
get_cheers_search_and_tag_friend("weisenborn");

//user enables path
get_cheers_path_button_tap();

/*
to-do:
- tag friends: assert # friend(s) selected
- tag friends: remove all friends
*/