//  Day 8 Coding Challeng: Filter Active Users & Validate Environments


// Step 1: Define Test Users - Objects Inside Arrays

let testUsers = [
{username: "qaUser1", role: "tester", isActive: true },
{username: "qaUser2", role: "tester", isActive: false },
{username: "adminUser", role: "admin", isActive: true },
{username: "viewUser", role: "viewer", isActive: false },

];

console.log("Step 1: User Test defined!");

// Step 2: Create Test Configuration Object

let testConfig = {

    baseUrl: "https://demoblaze.com",
    browsers:["chromium", "firefox", "webkit"],
    environments: ["staging", "uat", "production"],
    defaultEnv: "staging"

};


console.log("Step 2: Test Configuration Created!");

// Step 3: Display Active Users Only!

console.log("Step 3: Active Test Users!");

for (let i = 0; i < testUsers.length; i++) {
    if (testUsers[i].isActive) {
        console.log(`Active User: ${testUsers[i].username} (Role: ${testUsers[i].role})`);
    }

}


// Step 4: Conditional Environment Check

console.log("Step 4: Environment Safety Check!");

if (testConfig.defaultEnv === "production") {
    console.log("You are running tests in production!");
} else {
    console.log("Safe to run tests in staginh or UAT environment!");
}

// Step 5: Loop Through Browsers

console.log("Step 5: Browser Test Runs:");

for (let i = 0; i < testConfig.browsers.length; i++) {
    console.log(`Running test on: ${testConfig.browsers[i]}`);

}

// Step 6: Summary Method
console.log("Step 6: Test Configuration Summary")

// Add summary method to testConfig
testConfig.summary = function() {
    // Count active users
    let activeCount = 0;
    for (let i = 0; i < testUsers.length; i++) {
        if(testUsers[i].isActive) {
            activeCount++;
        }
    }


console.log(`Base URL: ${this.baseUrl}`);
console.log(`Environments Available: ${this.environments.join(", ")}`);
console.log(`Total Active Users: ${activeCount}`);
};

// Call the summary method
testConfig.summary();

console.log("You Successfully Completed Day 8 Challenge!");







