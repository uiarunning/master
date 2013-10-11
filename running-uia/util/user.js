#import "util.js";

function User(){
    
    this.firstname = randomStringCaps(8);
    this.lastname = randomStringCaps(8);
    this.username = randomString(25);
    this.email = this.username + "@nikeqa.com";
    
}
