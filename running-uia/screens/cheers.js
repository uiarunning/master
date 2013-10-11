#import "common/navigation_bar.js";

var target = UIATarget.localTarget();

//buttons_and_taps
function run_setup_get_cheers_button(){
	return target.frontMostApp().mainWindow().tableViews()[1].cells()["runsetup.section1.button.cheers"];
}

function run_setup_get_cheers_button_tap(){
	UIATarget.localTarget().pushTimeout(20);
	run_setup_get_cheers_button().tap();
	UIATarget.localTarget().popTimeout();
}

function get_cheers_facebook_button(){
	return target.frontMostApp().mainWindow().buttons()["sharerun.section1.button.facebook"];
}

function get_cheers_facebook_button_tap(){
	if (target.frontMostApp().mainWindow().images()["tristate_disabled_facebook"].checkIsValid()) {
		UIALogger.logMessage("Facebook sharing is disabled.");
		UIATarget.localTarget().pushTimeout(20);
		get_cheers_facebook_button().tap();
		UIATarget.localTarget().popTimeout();
		UIALogger.logMessage("Facebook sharing is now enabled.");
	}
	else {
		UIALogger.logMessage("Facebook sharing is enabled.");
	}
}

function get_cheers_path_button(){
	return target.frontMostApp().mainWindow().buttons()["sharerun.section1.button.path"];
}

function get_cheers_path_button_tap(){
	if (target.frontMostApp().mainWindow().images()["tristate_disabled_path"].checkIsValid()) {
		UIALogger.logMessage("Path sharing is disabled.");
		UIATarget.localTarget().pushTimeout(20);
		get_cheers_path_button().tap();
		UIATarget.localTarget().popTimeout();
		UIALogger.logMessage("Path sharing is now enabled.");
	}
	else {
		UIALogger.logMessage("Path sharing is enabled.");
	}
}

function get_cheers_add_comment(){
	target.frontMostApp().mainWindow().textViews()["running.setup.cheers.messagetextview"].tap();
	target.delay(1);
	target.frontMostApp().keyboard().typeString("This is a test message.\n");
}

function get_cheers_tag_location_button(){
	return target.frontMostApp().mainWindow().buttons()[7];
}

function get_cheers_tag_location_button_tap(){
	UIATarget.localTarget().pushTimeout(20);
	get_cheers_tag_location_button().tap();
	UIATarget.localTarget().popTimeout();
}

function get_cheers_tag_friends_button(){
	return target.frontMostApp().mainWindow().buttons()[8];
}

function get_cheers_tag_friends_button_tap(){
	UIATarget.localTarget().pushTimeout(20);
	get_cheers_tag_friends_button().tap();
	UIATarget.localTarget().popTimeout();
}

//methods
function get_cheers_search_and_tag_location(location){
	target.frontMostApp().mainWindow().tableViews()["Empty list"].searchBars()[0].tap();	
	target.frontMostApp().keyboard().typeString(location);
	target.frontMostApp().keyboard().typeString("\n");
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[0].tap();
}

function get_cheers_search_and_tag_friend(buddy){
	target.frontMostApp().mainWindow().searchBars()[0].tap();
	target.frontMostApp().keyboard().typeString(buddy);
	target.frontMostApp().keyboard().typeString("\n");
	//target.frontMostApp().mainWindow().tableViews()["Empty list"].cells().withPredicate(buddy).tap(); <-- can't get this to work. someone give it a shot.
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[0].tap();
	target.frontMostApp().navigationBar().buttons()["Done"].tap();
}

function learn_more_tag_friends_screen(){
	if (target.frontMostApp().mainWindow().buttons()["tag friends close"].checkIsValid()){
		(target.frontMostApp().mainWindow().buttons()["tag friends close"]).tap;
		}
	else {
		get_cheers_search_and_tag_friend(buddy);
		}
}

function dismiss_learn_more_tag_friends(){
    var learn_more_tag_friends = target.frontMostApp().mainWindow().buttons()["tag friends close"];
    if (learn_more_tag_friends.isValid()){
        UIALogger.logStart("dismissing learn_more_tag_friends");
		target.frontMostApp().mainWindow().buttons()["tag friends close"].tap();
		UIALogger.logPass("dismissing learn_more_tag_friends");
		get_cheers_tag_friends_button_tap();
	}
}
