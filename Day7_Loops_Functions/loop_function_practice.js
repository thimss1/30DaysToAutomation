const features = ["Login", "Signup", "Checkout"];

function testFeature(feature) {
  console.log(`🔍 Starting ${feature} test...`);

  let passed = false;
  let attempt = 0;

  while (!passed && attempt < 3) {
    console.log(`Attempt ${attempt + 1} for ${feature}`);
    attempt++;
    passed = Math.random() > 0.5;
  }

  console.log(passed ? `✅ ${feature} passed` : `❌ ${feature} failed after retries`);
  console.log("---------");
}

features.forEach(testFeature);