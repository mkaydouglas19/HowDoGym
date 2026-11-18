function showSurvey() {

    document.getElementById("home").style.display =
        "none";

    document.getElementById("survey").style.display =
        "block";
}

let userGoal = "";

function chooseGoal(goal) {

    userGoal = goal;

    alert("Selected: " + goal);

}

function generateWorkout() {

    let workoutText = "";

    if(userGoal === "Muscle") {

        workoutText =
        `
        Bench Press 3x8<br>
        Shoulder Press 3x10<br>
        Tricep Pushdown 3x12
        `;
    }

    document.getElementById("survey").style.display =
        "none";

    document.getElementById("workout").style.display =
        "block";

    document.getElementById("workoutPlan").innerHTML =
        workoutText;
}

function saveWorkout() {

    let weight =
        document.getElementById("weight").value;

    let reps =
        document.getElementById("reps").value;

    alert(
        "Saved!\nWeight: " +
        weight +
        "\nReps: " +
        reps
    );
}