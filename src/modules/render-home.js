function renderHomePage(){

    //main div
    const container = document.querySelector(".container");

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    mainDiv.classList.add("home-section");
    container.appendChild(mainDiv);

    //Title section
    const trainNowDiv = document.createElement("div");
    trainNowDiv.classList.add("train-now-section");
    mainDiv.appendChild(trainNowDiv);

    const trainNowTitle = document.createElement("h2");
    trainNowTitle.textContent = "Ready to train?";
    trainNowDiv.appendChild(trainNowTitle);

    const TrainNowDescription = document.createElement("p");
    TrainNowDescription.textContent = "Choose a routine and take another step toward your goal.";
    TrainNowDescription.classList.add("bigger");
    trainNowDiv.appendChild(TrainNowDescription);

    const TrainNowMotivation = document.createElement("p");
    trainNowDiv.appendChild(TrainNowMotivation);
    const TrainNowMotivationEm = document.createElement("em");
    TrainNowMotivationEm.textContent= "One workout at a time. Stay consistent and keep moving forward.";
    TrainNowMotivation.appendChild(TrainNowMotivationEm);

    //Routines section
    const routinesSectionDiv = document.createElement("div");
    routinesSectionDiv.classList.add("routines-section");
    mainDiv.appendChild(routinesSectionDiv);

    const routinesSectionTitle = document.createElement("h2");
    routinesSectionTitle.textContent = "Your Workout Programs";
    routinesSectionTitle.classList.add("card-title");
    routinesSectionDiv.appendChild(routinesSectionTitle);

    const routineCardsDiv = document.createElement("div");
    routineCardsDiv.classList.add("routine-cards");
    routinesSectionDiv.appendChild(routineCardsDiv);

    //Add routine card push
    const routineCardDiv = document.createElement("div");
    routineCardDiv.classList.add("routine-card");
    routineCardsDiv.appendChild(routineCardDiv);

    const routineCardTitle = document.createElement("h5");
    routineCardTitle.textContent = "Push";
    routineCardTitle.classList.add("routine-card-title");
    routineCardDiv.append(routineCardTitle);

    const exercisesAmount = document.createElement("p");
    exercisesAmount.textContent = "6 exercises";
    routineCardDiv.appendChild(exercisesAmount);

    const lastWorkoutDate = document.createElement("p");
    lastWorkoutDate.textContent = "Last : July 15,2026";
    routineCardDiv.appendChild(lastWorkoutDate);

    const startProgramBtn = document.createElement("button");
    startProgramBtn.classList.add("start-program-btn");
    startProgramBtn.textContent = "Start program";
    routineCardDiv.append(startProgramBtn);

    //Add routine card ADD
    const addRoutineCardDiv = document.createElement("div");
    addRoutineCardDiv.classList.add("routine-card");
    routineCardsDiv.appendChild(addRoutineCardDiv);

    const addRoutineCardTitle = document.createElement("h5");
    addRoutineCardTitle.textContent = "New program";
    addRoutineCardTitle.classList.add("routine-card-title");
    addRoutineCardDiv.appendChild(addRoutineCardTitle);

    const addRoutineBtn = document.createElement("button");
    addRoutineBtn.classList.add("new-program-btn");
    addRoutineBtn.innerHTML = '<svg class="new-program-btn-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>';
    addRoutineCardDiv.appendChild(addRoutineBtn);

    //Weight section
    const weightSectionDiv = document.createElement("div");
    weightSectionDiv.classList.add("weight-section");
    mainDiv.appendChild(weightSectionDiv);

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = "Weight";
    weightSectionDiv.appendChild(cardTitle);

    //Current weight card
    const currentWeightCardDiv = document.createElement("div");
    currentWeightCardDiv.classList.add("current-weight-card");
    weightSectionDiv.appendChild(currentWeightCardDiv);

    const currentWeightTitle = document.createElement("p");
    currentWeightTitle.textContent = "Current Weight";
    currentWeightCardDiv.appendChild(currentWeightTitle);

    const currentWeight = document.createElement("p");
    currentWeight.classList.add("current-weight");
    currentWeight.textContent = "87.6 kg";                        //edit dynamically
    currentWeightCardDiv.appendChild(currentWeight);

    const lastLoggedDate = document.createElement("p");
    lastLoggedDate.textContent = "17.07.2026";                    //edit dynamically
    currentWeightCardDiv.appendChild(lastLoggedDate);

    const updateCurrentWeightBtn = document.createElement("button");
    updateCurrentWeightBtn.classList.add("log-weight-btn");
    updateCurrentWeightBtn.textContent = "Log weight";
    currentWeightCardDiv.appendChild(updateCurrentWeightBtn);

    //Previous weight
    const previousWeight = document.createElement("p");
    previousWeight.textContent = "93 kg on 04.04.2026";            //edit dynamically
    weightSectionDiv.appendChild(previousWeight);

    //Recent Workouts section
    const recentWorkoutsSectionDiv = document.createElement("div");
    recentWorkoutsSectionDiv.classList.add("recent-workouts-section");
    mainDiv.appendChild(recentWorkoutsSectionDiv);

    const recentWorkoutsSectionTitle = document.createElement("h4");
    recentWorkoutsSectionTitle.classList.add("card-title");
    recentWorkoutsSectionTitle.textContent = "Most recent Workouts";
    recentWorkoutsSectionDiv.appendChild(recentWorkoutsSectionTitle);

    //Recent Workouts Cards
    const recentWorkoutCard = document.createElement("div");
    recentWorkoutCard.classList.add("recent-workout-card");
    recentWorkoutsSectionDiv.appendChild(recentWorkoutCard);

    const recentWorkoutTitle = document.createElement("h5");
    recentWorkoutTitle.classList.add("bigger");
    recentWorkoutTitle.textContent = "Push";                           //edit dynamically
    recentWorkoutCard.appendChild(recentWorkoutTitle);

    const exercisesAmountText = document.createElement("p");
    exercisesAmountText.textContent = "6 exercises";                   //edit dynamically
    recentWorkoutCard.appendChild(exercisesAmountText);

    const mostRecentWorkoutDate = document.createElement("p");
    mostRecentWorkoutDate.textContent = "21.07.2026";
    recentWorkoutCard.appendChild(mostRecentWorkoutDate);

    const viewAllWorkoutsBtn = document.createElement("button");
    viewAllWorkoutsBtn.classList.add("log-weight-btn");
    viewAllWorkoutsBtn.textContent = "View all Workouts";
    recentWorkoutsSectionDiv.appendChild(viewAllWorkoutsBtn);

    //summary Section
    const summarySectionDiv = document.createElement("div");
    summarySectionDiv.classList.add("summary-section");
    mainDiv.appendChild(summarySectionDiv);

    const summarySectionTitle = document.createElement("h4");
    summarySectionTitle.textContent = "Summary";
    summarySectionTitle.classList.add("card-title");
    summarySectionDiv.appendChild(summarySectionTitle);

    const workoutAmountSummaryDiv = document.createElement("div");
    workoutAmountSummaryDiv.classList.add("summary-card");
    summarySectionDiv.appendChild(workoutAmountSummaryDiv);

    const workoutAmountText = document.createElement("h5");
    workoutAmountText.textContent = "Total Workouts";
    workoutAmountSummaryDiv.appendChild(workoutAmountText);

    const workoutAmount = document.createElement("h5");
    workoutAmount.textContent = "46";
    workoutAmount.classList.add("bigger");
    workoutAmountSummaryDiv.appendChild(workoutAmount);

    const weightSummaryDiv = document.createElement("div");
    weightSummaryDiv.classList.add("summary-card");
    summarySectionDiv.appendChild(weightSummaryDiv);

    const weightSummaryText = document.createElement("h5");
    weightSummaryText.textContent = "Weight Difference";
    weightSummaryDiv.appendChild(weightSummaryText);

    const weightDifference = document.createElement("h5");
    weightDifference.textContent = "- 5.4 kg";
    weightDifference.classList.add("bigger");
    weightSummaryDiv.appendChild(weightDifference);
};

export default renderHomePage();