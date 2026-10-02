document.addEventListener("DOMContentLoaded", () => {
    const headerText = document.getElementById("headerText");
    const paragraphText = document.querySelector("#paragraphText");
    const changeColorBtn = document.getElementById("changeColorBtn");
    const changeTextBtn = document.getElementById("changeTextBtn");
    const addItemBtn = document.getElementById("addItemBtn");
    const qaList = document.querySelector("#qaList");
    const toggleListBtn = document.getElementById("toggleListBtn");

    const colors = ["#A3D9FF", "#FFB6C1", "#B19CD9", "#A0E7E5"];
    const messages = [
        "You're becomming an Automation Pro!",
        "Kepp pushing your limits ",
        "Every click is a step closer to mastery!"
    ];

    // Change background color
    changeColorBtn.addEventListener("click", () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });

    //Change paragraph text
    changeTextBtn.addEventListener("click", () => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        paragraphText.textContent = randomMessage;
    });

    // Add new list item
    addItemBtn.addEventListener("click", () => {
        const newItem = document.createElement("li");
        newItem.textContent = "New QA Skill Added!";
        qaList.appendChild(newItem);
    });

        // Toggle list visiblity -added this function
        toggleListBtn.addEventListener("click", () => {  
            if (qaList.style.display === "none") {
                qaList.style.display = "block";
            }   else {
                qaList.style.display = "none"
            }
    });
});
