// Function to simulate Resume Analysis
const fileInput = document.getElementById('file-input');
const uploadArea = document.getElementById('upload-area');
const loadingArea = document.getElementById('loading-area');
const resultArea = document.getElementById('result-area');
const scoreNumber = document.getElementById('score-number');
const scoreProgress = document.getElementById('score-progress');

// Dummy Data for Simulation
const dummyData = {
    score: 87,
    strengths: [
        "Strong Action Verbs",
        "Clear Education Timeline",
        "Quantifiable Achievements",
        "Good Formatting"
    ],
    weaknesses: [
        "Missing LinkedIn URL",
        "Summary could be more specific",
        "Add more technical keywords"
    ],
    skills: ["JavaScript", "React", "Python", "UI/UX", "Figma", "Node.js", "Team Leadership"]
};

// Handle File Selection
fileInput.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        startAnalysis();
    }
});

function startAnalysis() {
    // 1. Hide Upload, Show Loading
    uploadArea.classList.add('hidden');
    loadingArea.classList.remove('hidden');

    // 2. Simulate AI Processing Delay (2.5 seconds)
    setTimeout(() => {
        loadingArea.classList.add('hidden');
        showResults();
    }, 2500);
}

function showResults() {
    resultArea.classList.remove('hidden');
    
    // Populate Data
    populateList('strengths-list', dummyData.strengths);
    populateList('weakness-list', dummyData.weaknesses);
    populateTags('skills-list', dummyData.skills);

    // Animate Score
    animateScore(dummyData.score);
}

function populateList(elementId, items) {
    const list = document.getElementById(elementId);
    list.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

function populateTags(elementId, tags) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    tags.forEach(tag => {
        const span = document.createElement('span');
        span.textContent = tag;
        container.appendChild(span);
    });
}

function animateScore(targetScore) {
    let currentScore = 0;
    const interval = setInterval(() => {
        if (currentScore >= targetScore) {
            clearInterval(interval);
        } else {
            currentScore++;
            scoreNumber.textContent = currentScore;
        }
    }, 20);

    // Calculate Stroke Offset for SVG Circle (440 is the circumference)
    // Offset = 440 - (440 * score / 100)
    const offset = 440 - (440 * targetScore / 100);
    scoreProgress.style.strokeDashoffset = offset;
}

function resetAnalyzer() {
    resultArea.classList.add('hidden');
    uploadArea.classList.remove('hidden');
    fileInput.value = ''; // Clear file input
    scoreProgress.style.strokeDashoffset = 440; // Reset circle
    scoreNumber.textContent = 0;
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});