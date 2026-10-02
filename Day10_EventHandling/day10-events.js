console.log("🎯 JavaScript file loaded!");

const clickBox = document.getElementById('click-box');
const hoverBox = document.getElementById('hover-box');
const resetBtn = document.getElementById('reset-btn');
const simulateBtn = document.getElementById('simulate-btn');
const eventLog = document.getElementById('event-log');
const usernameInput = document.getElementById('username-input');
const submitBtn = document.getElementById('submit-btn');
const clickSound = document.getElementById('click-sound');


function log(message) {
    const line = document.createElement('div');
    line.textContent = message;
    eventLog.appendChild(line);
    eventLog.scrollTop = eventLog.scrollHeight;
}

let clickCount = 0;

// ✅ Click event with bounce animation
clickBox.addEventListener('click', () => {
    clickCount++;
    console.log("🎯 Click - triggering bounce");

    clickBox.classList.remove('bounce-effect', 'clicked');

    requestAnimationFrame(() => {
        clickBox.classList.add('bounce-effect', 'clicked');
        clickBox.textContent = `Clicked ${clickCount} times!`;
        log(`Clicked the box (${clickCount})`);
    });

    setTimeout(() => {
        clickBox.classList.remove('bounce-effect');
    }, 600);
});

// ✅ Double-click event with bounce animation
clickBox.addEventListener('dblclick', () => {
    console.log("🎯 Double-click - triggering bounce");

    clickBox.classList.remove('bounce-effect');

    requestAnimationFrame(() => {
        clickBox.classList.add('bounce-effect');
        log('Double-clicked! Box turned blue');
    });

    setTimeout(() => {
        clickBox.classList.remove('bounce-effect');
    }, 600);
});

// ✅ Hover events
hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.backgroundColor = '#fff3cd';
    hoverBox.textContent = 'Mouse is hovering!';
    log('Mouse entered the hover box');
});

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.backgroundColor = '';
    hoverBox.textContent = 'Hover over me! (Practice requirement)';
    log('Mouse left the hover box');
});

// ✅ Global keydown logging
document.addEventListener('keydown', (event) => {
    log(`Key pressed: ${event.key}`);
});

// ✅ Username typing log
usernameInput.addEventListener('keydown', (event) => {
    log(`Typing username: Key "${event.key}" pressed`);
});

// ✅ Submit button
submitBtn.addEventListener('click', () => {
    log('Form Submitted!');
});

// ✅ Enter key submits form
usernameInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        log('Form Submitted with Enter Key!');
    }
});

// ✅ Reset button
resetBtn.addEventListener('click', () => {
    clickCount = 0;
    clickBox.classList.remove('clicked', 'bounce-effect');
    clickBox.textContent = 'Click me! (Practice requirement)';
    clickBox.style.backgroundColor = '';
    clickBox.style.color = '';
    hoverBox.style.backgroundColor = '';
    hoverBox.textContent = 'Hover over me! (Practice requirement)';
    eventLog.innerHTML = '';
    log('All reset!');
});

// ✅ Simulate automation
simulateBtn.addEventListener('click', () => {
    log('Simulating actions...');
    clickBox.click();
    const enter = new MouseEvent('mouseenter', { bubbles: true });
    const leave = new MouseEvent('mouseleave', { bubbles: true });
    hoverBox.dispatchEvent(enter);
    setTimeout(() => hoverBox.dispatchEvent(leave), 800);
});
