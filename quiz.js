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
        {
            question: "Why is strength training beneficial for underweight individuals?",
            options: [
                "It helps burn extra calories",
                "It reduces muscle mass",
                "It helps build healthy muscle mass",
                "It’s not recommended at all"
            ],
            correct: 2,
            bmiRange: "underweight"
        },
        {
            question: "What nutrient is essential for muscle building and healthy weight gain?",
            options: [
                "Fiber",
                "Protein",
                "Caffeine",
                "Sodium"
            ],
            correct: 1,
            bmiRange: "underweight"
        },
        {
            question: "Which of the following can be a sign of being underweight?",
            options: [
                "High energy levels",
                "Strong immune system",
                "Fatigue and frequent illness",
                "None of the above"
            ],
            correct: 2,
            bmiRange: "underweight"
        },
        {
            question: "What should underweight individuals do before starting a new diet or routine?",
            options: [
                "Copy a friend’s diet",
                "Ignore professional advice",
                "Consult a healthcare professional",
                "Try extreme weight gain supplements"
            ],
            correct: 2,
            bmiRange: "underweight"
        },




        // ✅ Questions for Healthy Weight category
        {
            question: "What is an ideal way to maintain a healthy weight?",
            options: [
                "Skip meals occasionally",
                "Consume only fruits",
                "Balance between diet and regular exercise",
                "Avoid all fats completely"
            ],
            correct: 2,
            bmiRange: "normal"
        },
        {
            question: "How often should you engage in moderate physical activity weekly?",
            options: [
                "30 minutes every day",
                "150 minutes per week",
                "Once a week",
                "Every few months"
            ],
            correct: 1,
            bmiRange: "normal"
        },
        {
            question: "Which of these helps in tracking and maintaining a healthy weight?",
            options: [
                "BMI, balanced meals, and consistent routines",
                "Weighing yourself daily only",
                "Completely cutting out carbs",
                "Sleeping less and working out more"
            ],
            correct: 0,
            bmiRange: "normal"
        },
        {
            question: "Why is strength training important even for healthy weight individuals?",
            options: [
                "To improve muscle tone and metabolic health",
                "To lose more fat quickly",
                "It’s not necessary",
                "Only athletes need it"
            ],
            correct: 0,
            bmiRange: "normal"
        },
        {
            question: "What is a sign of overall healthy lifestyle maintenance?",
            options: [
                "Constant dieting",
                "Feeling energized, sleeping well, and being active",
                "Avoiding all social events",
                "Following fad diets"
            ],
            correct: 1,
            bmiRange: "normal"
        },




        // ✅ Questions for Overweight category
        {
            question: "What is the first recommended step for someone who is overweight?",
            options: [
                "Consult a healthcare provider",
                "Skip dinner daily",
                "Only drink water for a week",
                "Take weight loss pills"
            ],
            correct: 0,
            bmiRange: "overweight"
        },
        {
            question: "Which type of exercise is best to start with when overweight?",
            options: [
                "High-intensity sprinting",
                "Heavy weightlifting only",
                "Low-impact cardio like walking or swimming",
                "No exercise, just diet"
            ],
            correct: 2,
            bmiRange: "overweight"
        },
        {
            question: "What kind of diet is advisable for overweight individuals?",
            options: [
                "Very low-carb, no fats at all",
                "Balanced meals with vegetables, protein, and whole grains",
                "Only fruit-based smoothies",
                "Skip breakfast and lunch"
            ],
            correct: 1,
            bmiRange: "overweight"
        },
        {
            question: "What does regular physical activity help with?",
            options: [
                "Just weight loss",
                "Only muscle gain",
                "Improves metabolism, energy, and helps with weight loss",
                "Nothing, only diet works"
            ],
            correct: 2,
            bmiRange: "overweight"
        },
        
    ];


    // 🔀 Shuffle helper function
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const categoryQuestions = questions.filter(q => q.bmiRange === bmiCategory);
    const generalQuestions = questions.filter(q => q.bmiRange === "all").slice(0, 2);

    shuffle(categoryQuestions);
    shuffle(generalQuestions);

    const filteredQuestions = [...categoryQuestions.slice(0, 5), ...generalQuestions];
    shuffle(filteredQuestions);

    let currentQuestionIndex = 0;
    let score = 0;



    function displayQuestion(index) {
        const q = filteredQuestions[index];
        const questionElement = document.getElementById("question");
        const optionsElement = document.getElementById("options");
        const nextBtn = document.getElementById("next-btn");

        questionElement.innerText = q.question;
        optionsElement.innerHTML = "";
        nextBtn.disabled = true;

        const shuffledOptions = q.options.map((opt, i) => ({ opt, index: i }));
        shuffle(shuffledOptions);

        shuffledOptions.forEach(({ opt, index }) => {
            const btn = document.createElement("button");
            btn.innerText = opt;
            btn.classList.add("option");
            btn.addEventListener("click", () => {
                checkAnswer(index, q.correct);
                disableOptions();
                nextBtn.disabled = false;
                highlightAnswers(index, q.correct);
            });
            optionsElement.appendChild(btn);
        });
    }
    
    function checkAnswer(selected, correct) {
        if (selected === correct) score++;
    }

    function disableOptions() {
        const buttons = document.querySelectorAll(".option");
        buttons.forEach(btn => btn.disabled = true);
    }

    function highlightAnswers(selected, correct) {
        const buttons = document.querySelectorAll(".option");
        buttons.forEach((btn, i) => {
            const originalIndex = filteredQuestions[currentQuestionIndex].options.indexOf(btn.innerText);
            if (originalIndex === correct) {
                btn.style.backgroundColor = "green";
            } else if (originalIndex === selected) {
                btn.style.backgroundColor = "red";
            }
        });
    }


});


function displayResults() {

    const quizBox = document.getElementById("quiz-box");
    const quizResult = document.getElementById("quiz-result");
    const scoreElement = document.getElementById("score");
    const resultMessage = document.getElementById("result-message");
    const restartBtn = document.getElementById("restart-btn");

    quizBox.style.display = "none";
    quizResult.style.display = "block";

    scoreElement.innerText = `${score}/${filteredQuestions.length}`;
    resultMessage.innerText = score >= 5 ? "🔥 Excellent! You're health smart!" : score >= 3 ? "👍 Not bad! Keep learning." : "💡 Keep going! You can improve.";

    restartBtn.style.display = "inline-block";

}

document.getElementById("next-btn").addEventListener("click", () => {

    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);

    } 
    else {
        displayResults();

    }
}
);

document.querySelector(".btn-main").addEventListener("click", () => {

    window.close();

});

// 🔁 Restart button logic
document.getElementById("restart-btn").addEventListener("click", () => {

    window.location.reload();
    
});

displayQuestion(currentQuestionIndex);
