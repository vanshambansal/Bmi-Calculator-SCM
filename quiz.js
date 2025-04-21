document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bmiCategory = urlParams.get("category") || "Healthy weight";

    // ✅ Your full list of questions here...
    const questions = [
        // ✅ Shared questions for Severely Underweight & Underweight
        {
            question: "What is a recommended way to gain healthy weight?",
            options: [
                "Skip meals",
                "Eat more high-calorie, nutrient-rich foods",
                "Do intense cardio daily",
                "Drink sugary drinks frequently"
            ],
            correct: 1,
            bmiRange: "underweight"
        },
    ];
});