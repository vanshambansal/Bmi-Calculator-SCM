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



    
});