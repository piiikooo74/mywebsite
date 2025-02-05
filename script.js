let count = 0;

function response(choice) {
    const questionText = document.getElementById("questionText");
    const choices = document.getElementById("choices");
    const result = document.getElementById("result");
    const heart = document.getElementById("heart");
    const btnTo = document.getElementById("btnTo");
    const btnDont = document.getElementById("btnDont");

    // Handle the choice response
    if (choice === "dont") {
        result.innerHTML = "Let's get things right.";
        result.style.opacity = "1"; // Show result text
    } else if (choice === "to") {
        result.innerHTML = "I knew you would say that! This website is a gift for you ❤️";
        result.style.opacity = "1"; // Show result text
    }

    // Increment repetition count
    count++;

    // After 3 repetitions, modify the question and buttons
    if (count >= 3) {
        setTimeout(() => {
            btnDont.style.display = "none"; // Hide "I Don't" button
            heart.style.display = "block"; // Show heart icon
            btnTo.classList.add("enlarged"); // Enlarge "Me Too" button
            questionText.innerHTML = "Let's make things right, Lyna!";
        }, 1000);
    }

    // Reset for next round after a small delay
    setTimeout(() => {
        if (count < 3) {
            result.style.opacity = "0"; // Hide result text
            btnTo.classList.remove("enlarged"); // Reset "Me Too" button size
            btnDont.style.display = "inline-block"; // Show "I Don't" button again
            heart.style.display = "none"; // Hide heart
            questionText.innerHTML = "Lyna, I miss you...";
        }
    }, 2000);
}
