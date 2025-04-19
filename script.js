
gsap.from(".bmi-wrapper", {
    duration: 1.5,
    opacity: 0,
    scale: 0.95,
    ease: "elastic.out(1, 0.75)",
});

document.querySelector("button.btn-primary").addEventListener("mouseenter", (e) => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.1,
        boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.5)",
    });
});

document.querySelector("button.btn-primary").addEventListener("mouseleave", (e) => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        boxShadow: "none", // Reset the box-shadow too
    });
});

gsap.registerPlugin(ScrollToPlugin);


document.getElementById("bmi-form").addEventListener("submit", (e) => {
    e.preventDefault();
    calculateBMI();
    animateResults();


});

document.getElementById("bmi-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop default form submission

    const unit = document.getElementById("weight-unit").value.trim();
    const age = document.getElementById("age").value.trim();
    const weight = document.getElementById("weight").value.trim();
    const height = document.getElementById("height").value.trim();

    if (!unit || !age || !weight || !height) {
        alert("Please fill out all fields before calculating BMI.");
        return;
    }

    calculateBMI(); // Now safely call the original function
    
});

// Function to calculate BMI
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const unit = document.getElementById("weight-unit").value;
    let bmi;

    if (unit === "kg") {
        bmi = weight / (height * height);
    } else {
        bmi = (weight / (height * height)) * 703;
    }

    // Update the BMI result display
    document.getElementById("bmiValue").innerText = bmi.toFixed(1);

    // Display BMI meaning
    displayBMIMeaning(bmi);

