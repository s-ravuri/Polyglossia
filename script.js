// Function to shuffle the characters array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Arrays of Telugu characters and their Roman alphabet equivalents
const teluguVowels = [
    { char: 'అ', roman: 'a' },
    { char: 'ఆ', roman: 'aa' },
    { char: 'ఇ', roman: 'i' },
    { char: 'ఈ', roman: 'ii' },
    { char: 'ఉ', roman: 'u' },
    { char: 'ఊ', roman: 'uu' },
    { char: 'ఎ', roman: 'e' },
    { char: 'ఏ', roman: 'ee' },
    { char: 'ఐ', roman: 'ai' },
    { char: 'ఒ', roman: 'o' },
    { char: 'ఓ', roman: 'oo' },
    { char: 'ఔ', roman: 'au' }
];

const teluguConsonants = [
    { char: 'క', roman: 'ka' },
    { char: 'గ', roman: 'ga' },
    { char: 'ఙ', roman: 'nga' },
    { char: 'చ', roman: 'cha' },
    { char: 'జ', roman: 'ja' },
    { char: 'ఞ', roman: 'nya' },
    { char: 'ట', roman: 'ta' },
    { char: 'డ', roman: 'da' },
    { char: 'ణ', roman: 'na' },
    { char: 'త', roman: 'ta' },
    { char: 'ద', roman: 'da' },
    { char: 'న', roman: 'na' },
    { char: 'ప', roman: 'pa' },
    { char: 'బ', roman: 'ba' },
    { char: 'మ', roman: 'ma' },
    { char: 'య', roman: 'ya' },
    { char: 'ర', roman: 'ra' },
    { char: 'ల', roman: 'la' },
    { char: 'వ', roman: 'va' },
    { char: 'శ', roman: 'sha' },
    { char: 'స', roman: 'sa' },
    { char: 'హ', roman: 'ha' },
    { char: 'ళ', roman: 'La' },
    { char: 'క్ష', roman: 'ksha' },
    { char: 'ఱ', roman: 'rra' }
];

const teluguStressedConsonants = [
    { char: 'ఖ', roman: 'Ka' },
    { char: 'ఘ', roman: 'Ga' },
    { char: 'ఛ', roman: 'Cha' },
    { char: 'ఝ', roman: 'Ja' },
    { char: 'ఠ', roman: 'Ta' },
    { char: 'ఢ', roman: 'Da' },
    { char: 'థ', roman: 'Ta' },
    { char: 'ధ', roman: 'Da' },
    { char: 'ఫ', roman: 'Pa' },
    { char: 'భ', roman: 'Ba' },
    { char: 'ష', roman: 'Sha' }
];

// Arrays of Arabic characters and their Roman alphabet equivalents
const arabicConsonants = [
    { char: 'ا', roman: 'a' },
    { char: 'ب', roman: 'b' },
    { char: 'ت', roman: 't' },
    { char: 'ث', roman: 'th' },
    { char: 'ج', roman: 'j' },
    { char: 'ح', roman: 'h' },
    { char: 'خ', roman: 'kh' },
    { char: 'د', roman: 'd' },
    { char: 'ذ', roman: 'dh' },
    { char: 'ر', roman: 'r' },
    { char: 'ز', roman: 'z' },
    { char: 'س', roman: 's' },
    { char: 'ش', roman: 'sh' },
    { char: 'ص', roman: 's' },
    { char: 'ض', roman: 'd' },
    { char: 'ط', roman: 't' },
    { char: 'ظ', roman: 'dh' },
    { char: 'ع', roman: '‘' },
    { char: 'غ', roman: 'gh' },
    { char: 'ف', roman: 'f' },
    { char: 'ق', roman: 'q' },
    { char: 'ك', roman: 'k' },
    { char: 'ل', roman: 'l' },
    { char: 'م', roman: 'm' },
    { char: 'ن', roman: 'n' },
    { char: 'ه', roman: 'h' },
    { char: 'ء', roman: '’' }
];

let characters = [];
let currentCharacterIndex = 0;
let score = 0;
let timeLeft;
let timer;
let timerStarted = false;
let selectedLanguage = 'telugu';

document.addEventListener('DOMContentLoaded', () => {
    const characterDisplay = document.getElementById('character-display');
    const inputAnswer = document.getElementById('input-answer');
    const submitAnswer = document.getElementById('submit-answer');
    const feedback = document.getElementById('feedback');
    const scoreDisplay = document.getElementById('score');
    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('start-button');
    const vowelsCheckbox = document.getElementById('telugu-vowels');
    const consonantsCheckbox = document.getElementById('telugu-consonants');
    const stressedConsonantsCheckbox = document.getElementById('telugu-stressed-consonants');
    const practiceArea = document.getElementById('practice-area');
    const options = document.getElementById('options');
    const timeLimitInput = document.getElementById('time-limit');
    const languageSelect = document.getElementById('language-select');
    const languageButton = document.getElementById('language-button');
    const teluguOptions = document.getElementById('telugu-options');
    const arabicOptions = document.getElementById('arabic-options');

    languageButton.addEventListener('click', () => {
        selectedLanguage = languageSelect.value;
        if (selectedLanguage === 'telugu') {
            teluguOptions.style.display = 'block';
            arabicOptions.style.display = 'none';
        } else if (selectedLanguage === 'arabic') {
            arabicOptions.style.display = 'block';
            teluguOptions.style.display = 'none';
        }
        document.getElementById('language-selection').style.display = 'none';
        options.style.display = 'block';
    });

    function displayCharacter() {
        characterDisplay.textContent = characters[currentCharacterIndex].char;
    }

    function updateScore(correct) {
        if (correct) {
            score++;
        } else {
            score--;
        }
        scoreDisplay.textContent = `Score: ${score}`;
    }

    function checkAnswer() {
        if (!timerStarted) {
            startTimer();
            timerStarted = true;
        }
        const userAnswer = inputAnswer.value.trim().toLowerCase();
        const correct = userAnswer === characters[currentCharacterIndex].roman;
        updateScore(correct);
        feedback.textContent = correct ? 'Correct!' : `Incorrect! The correct answer is ${characters[currentCharacterIndex].roman}. Try to remember this for next time.`;
        feedback.style.color = correct ? 'green' : 'red';

        inputAnswer.value = '';
        currentCharacterIndex = (currentCharacterIndex + 1) % characters.length;
        displayCharacter();
    }

    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Time Left: ${timeLeft}`;
            if (timeLeft === 0) {
                clearInterval(timer);
                alert(`Time's up! Your score is ${score}.`);
            }
        }, 1000);
    }

    startButton.addEventListener('click', () => {
        characters = [];
        if (selectedLanguage === 'telugu') {
            if (vowelsCheckbox.checked) {
                characters = characters.concat(teluguVowels);
            }
            if (consonantsCheckbox.checked) {
                characters = characters.concat(teluguConsonants);
            }
            if (stressedConsonantsCheckbox.checked) {
                characters = characters.concat(teluguStressedConsonants);
            }
        } else if (selectedLanguage === 'arabic') {
            characters = characters.concat(arabicConsonants);
        }

        if (characters.length === 0) {
            alert('Please select at least one group to practice.');
            return;
        }

        let time = parseInt(timeLimitInput.value, 10);
        if (isNaN(time) || time <= 0) {
            time = 600; // Default to 600 seconds if input is invalid
        }
        timeLeft = time;
        timerDisplay.textContent = `Time Left: ${timeLeft}`;
        shuffleArray(characters);
        options.style.display = 'none';
        practiceArea.style.display = 'block';
        displayCharacter();
    });

    submitAnswer.addEventListener('click', checkAnswer);
    inputAnswer.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });
});
