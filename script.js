
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

    
    // Update the progress bar and its color based on BMI range
    const progressBar = document.getElementById("bmiProgress");

    let progressValue = 0;
    let progressClass = '';

    if (bmi < 18.5) {
        progressValue = 25;
        progressClass = "bmi-progress-underweight";
        document.getElementById("bmi-meaning").innerText = "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        progressValue = 50;
        progressClass = "bmi-progress-normal";
        document.getElementById("bmi-meaning").innerText = "Your BMI is normal.";
    } else if (bmi >= 25 && bmi < 29.9) {
        progressValue = 75;
        progressClass = "bmi-progress-overweight";
        document.getElementById("bmi-meaning").innerText = "You are overweight.";
    } else {
        progressValue = 100;
        progressClass = "bmi-progress-obese";
        document.getElementById("bmi-meaning").innerText = "You are obese.";
    }
    // Delay progress animation by 1 second
    setTimeout(() => {
        gsap.to(progressBar, {
            duration: 1,
            value: progressValue,
            ease: "power2.out",
        });
        progressBar.className = `progress-bar ${progressClass}`;
    }, 500); // 1000ms = 1 second
     // Show the result section
     document.getElementById("result-section").style.display = "block";
     document.getElementById("result-section").scrollIntoView({ behavior: "smooth" });
 
}