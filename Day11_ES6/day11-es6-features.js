
// a function that takes a test name and prints a message when it starts and ends.
const runTest = (testName) => {
console.log(`🧪 Start test: ${testName}`);
console.log(`✅ Test Completed: ${testName}`);
};

//report if test passed or failed 
const reportStatus = (testName, status) => {
console.log(`${testName} Status: ${status}`);
};
    
// List of tests we are running
const tests = ["Login", "Search", "Logout"];

// For each test in list, do these commands
tests.forEach(test => {
runTest(test); //run test
reportStatus(test, "✅ PASSED"); // confirms pass or fail
});

// Set up users and environments
let user = "Sydney"; // user
let env = "Staging"; // environment
let totalTests = 5; // amount of tests we have
let browser = "Chromium"; // browser

// variables to use
console.log(`Running ${totalTests} tests for ${user} in the ${env} environment.`);

console.log (`Executing all ${totalTests} test cases in ${browser} on ${env} environment`);

// extracting values from an object
const config = {
    baseURL: "https://demo.guru99.com/",
    timeout: 3000,
    retries: 2,
    browser: "Firefox"
};

const { browser: congfigBrowser, timeout } = config;

console.log(`Browser: ${congfigBrowser}, Timeout: ${timeout}ms`);


// spread operator, merge 2 arrays of test cases and 1 custom item
const uiTests = ["Login Test", "Profile Update Test"];
const apiTests = ["API Response Test", "Token Validation Test"];
const securityTests = ["Auth Bypass Test", "Data Encryption Test"];

const masterSuite = [...uiTests, ...apiTests, ...securityTests, "Final Report Generation"];

console.log("Master Suite:", masterSuite);

console.log("---");

// Task 5 Default Parameters
function executeTest(testName = "Unnamed Test", browser = "Chromium", timeout = 5000) {
    console.log(`Running ${testName} on ${browser} with ${timeout}ms timeout`);
}


console.log("Task 5 - Default Parameter:");
executeTest(); //uses all defaults
executeTest("Login Flow", "Firefox");
executeTest("Checkout Process", "Safari", 10000);

console.log("---");

// Task 6: Enhanced Object Literals
console.log("Task 6 - Enhanced Object Literals:");
const username = "qauser";
const password = "test@user123"

const credentials = {
    username,
    password,
    //added login method using enhanced syntax
    login() {
        console.log(`User ${this.username} logged in successfully!`);
},  
    // added logout 
    logout() {
        console.log(`User ${this.username} logged out successfully!`);
    }
};
 
console.log("Credentials object:", credentials);
credentials.login();
credentials.logout();


console.log("---");

// Part 3: Combined Challenge - ES6 Test Runner
console.log("Part 3: ES6 Test Runner - Combined Challenge");
console.log("=============================================")

// enhanced object literals for configuration
const testRunnerConfig = {
    user: "qaUser",
    environment: "Production",
    defaultBrowser: "Firefox",
    defaultTimeout: 10000
};
// destructuring to pull configurations
const {user: runnerUser, environment: runnerEnv, defaultBrowser: runnerBrowser, defaultTimeout: runnerTimeout} = testRunnerConfig;

// combine test suites
const smokeTest = ["Homepage Load", "User Login", "Basic Search"];
const regressionTests = ["Checkout Flow", "User Profile", "Payment Processing"];
const allTestCases = [...smokeTest, ...regressionTests, ...securityTests];
const totalTestCount = allTestCases.length;

// arrow function for defining actions
const startTestSession = (user, browser = runnerBrowser, timeout = runnerTimeout) => {
    console.log(`Starting test session for ${user} in ${browser} on ${runnerEnv}` );
};

const runTestCase = (testCase, browser = runnerBrowser, timeout = runnerTimeout)  =>{
    console.log(`Running ${testCase} (Browser: ${browser}, Timeout: ${timeout}ms)`);
}
const generateTestReport = (testsRun, testsPassed) =>{
    const passPercentage = ((testsPassed / testsRun) * 100).toFixed(1);
    return `Test Report: ${testsPassed}/${testsRun} test passed (${passPercentage}%)`;
};

// enhanced object literals for  user management
const testUser = {
    username: "sydney_tester",
    role: "QA Engineer",
    department: "Testing",
    
    // methods using enhanced syntax
    beginTesting() {
        console.log(` ${this.username} ${this.role}) begins testing session`);
    },

    completeTesting(testsCompleted) {  // ← Fixed parameter name and added )
        console.log(`${this.username} completed ${testsCompleted} tests`); 
    }
};

// Run ES6 Test Runner
console.log("\n Test Session Starting...");

// using our arrow function
startTestSession(runnerUser, runnerBrowser, runnerEnv);

// using enhanced object literals method
testUser.beginTesting();

console.log(`\n Executing ${totalTestCount} TEST CASES:`);
console.log("-----------------------------------------------------")

//simulate running all test
let testsPassed = 0;
allTestCases.forEach((testCase, index) => {
const passed = Math.random() > 0.3; // 70% chance of passing
runTestCase(testCase);

if (passed) {
    console.log(`    ✅ ${testCase}  - PASSED`);
    testsPassed++;
} else {
    console.log(`    ❌ ${testCase}  - FAILED`);                                    
}

});

console.log("\n" + generateTestReport(totalTestCount, testsPassed));

// using enhanced object literals methods again
testUser.completeTesting(totalTestCount);

// Final summary using template literals and destructuring
const { username: finalUser, role } = testUser;
console.log(`\n ES6 Test Runner Complete! Thank you ${finalUser} (${role})!`);

console.log("\n============================================================");
console.log(" All Tasks Completed! Ready for Github!");
