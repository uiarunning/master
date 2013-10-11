
var target = UIATarget.localTarget();

target.frontMostApp().navigationBar().leftButton().tap();
target.frontMostApp().mainWindow().elements()["profileTrayCell"].tapWithOptions({tapOffset:{x:0.44, y:0.61}});
UIATarget.localTarget().delay(5);
target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].tapWithOptions({tapOffset:{x:0.31, y:0.25}});
UIATarget.localTarget().delay(5);
target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["FORGOT PASSWORD?, Forgot your password?"].tap();
UIATarget.localTarget().delay(5);
target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].textFields()[1].tap();

target.frontMostApp().keyboard().typeString("alana.hosick@nike.com");

target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].buttons()["Send Email"].tap();
