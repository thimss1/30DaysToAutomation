

// Creating Arrays
console.log("🌟 PART 1: Let's create arrays!");

// Array 1: Test Users
let testUsers = ["qaUser1", "qaUser2", "adminUser"];
console.log("Our test users are:", testUsers);

// Array 2: Browsers
let browsers = ["chromium", "firefox", "webkit"];
console.log("Our browsers are:", browsers); 

// Array 3: Environments
let environments = ["staging", "uat", "production"]
console.log("Our staging environments are:", environments);

// Add more items to each array using push
testUsers.push("guestUser"); //Adding a new user
browsers.push("edge"); // Adding a new browser
environments.push("development");  // Adding a new environment

console.log("After adding more items:");
console.log("We now have",  testUsers.length, "test users");
console.log("We now have", browsers.length, "browsers");
console.log("We now have", environments.length, "environments");

// Find specific items
console.log("The first user is:", testUsers[0]); // 1st item
console.log("The second user is:", browsers[1]);  // 2nd item
console.log("The third user is:", environments[2]); // 3rd item

// Creating Objects
console.log("🌟 PART 2: Let's create user objects!");

// User 1 Object
let qaUser1 = {
    username: "qaUser1", //User names
    password: "test123",  //password
    role: "tester", //Job title
    isActive: true  //Is the user active
};

// User 2 Object
let qaUser2 = {
    username: "qaUser2", //User names
    password: "test456",  //password
    role: "tester", //Job title
    isActive: true  //Is the user active
};

// User 3 Object
let qaUser3 = {
    username: "adminUser", //User names
    password: "admin123",  //password
    role: "admin", //Job title
    isActive: false  //Is the user active
};


console.log("User 1 - Name:", qaUser1.username, "| Job:", qaUser1.role);
console.log("User 2 - Name:", qaUser2.username, "| Job:", qaUser2.role);
console.log("User 3 - Name:", qaUser3.username, "| Job:", qaUser3.role);

// check whether users are active
console.log("Is", qaUser1.username, "active?", qaUser1.isActive ? "YES! ✅" : "No, inactive ❌");
console.log("Is", qaUser2.username, "active?", qaUser2.isActive ? "YES! ✅" : "No, inactive ❌");
console.log("Is", qaUser3.username, "active?", qaUser3.isActive ? "YES! ✅" : "No, inactive ❌");

//Combine Arrays & Objects

console.log( "Part 3: Creating Master Test Configuration!");

// Master Test Configuration Object
let testConfig = {
    baseUrl: "https://demoblaze.com/",  //e-commerce site URL

// Array of supported browsers for testing
browsers: ["chromium", "firefox", "webkit"],

// Nested credentials object for user management
Credentials: {                          // Admin user account
    admin: { 
        username: "adminUser",
        password: "admin@123"
    },
    standardUsers: [qaUser1, qaUser2, qaUser3] // array of standard test users
}

};

// Access and print required data
console.log("Base URL:", testConfig.baseUrl);
console.log("Second browser:", testConfig.browsers[1]); 
console.log("Admin username:", testConfig.Credentials.admin.username);
console.log("First standard user:", testConfig.Credentials.standardUsers[0].username); //1st standard user from nested array

// Bonus Challenge

console.log("Bonus: Checking for Safari Browser!");

// Check if Safari Exists in Browser Array
if (!browsers.includes("safari")) {
    console.log("Safari not found! Adding to browsers array....");
    browsers.push("safari");
    console.log("Safari added! Updated browers:", browsers);
} else{
    console.log("Safari already exists in browsers array!");
}

console.log("Homework Assignment Complete! All requirements satified!");
