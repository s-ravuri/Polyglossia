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

const teluguDependentVowels = [
    { char: 'ి', roman: 'i' },
    { char: 'ీ', roman: 'ii' },
    { char: 'ు', roman: 'u' },
    { char: 'ూ', roman: 'uu' },
   
   // { char: 'ృ', roman: 'r̥' },
    //{ char: 'ౄ', roman: 'r̥̄' },
    { char: 'ె', roman: 'e' },
    { char: 'ే', roman: 'ee' },
    { char: 'ై', roman: 'ai' },
    { char: 'ొ', roman: 'o' },
    { char: 'ో', roman: 'oo' },
    { char: 'ౌ', roman: 'au' }
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

const hiraganaVowels = [
    { char: 'あ', roman: 'a' },
    { char: 'い', roman: 'i' },
    { char: 'う', roman: 'u' },
    { char: 'え', roman: 'e' },
    { char: 'お', roman: 'o' }
];

const hiraganaConsonants = [
    { char: 'か', roman: 'ka' },
    { char: 'き', roman: 'ki' },
    { char: 'く', roman: 'ku' },
    { char: 'け', roman: 'ke' },
    { char: 'こ', roman: 'ko' },
    { char: 'さ', roman: 'sa' },
    { char: 'し', roman: 'shi' },
    { char: 'す', roman: 'su' },
    { char: 'せ', roman: 'se' },
    { char: 'そ', roman: 'so' },
    { char: 'た', roman: 'ta' },
    { char: 'ち', roman: 'chi' },
    { char: 'つ', roman: 'tsu' },
    { char: 'て', roman: 'te' },
    { char: 'と', roman: 'to' },
    { char: 'な', roman: 'na' },
    { char: 'に', roman: 'ni' },
    { char: 'ぬ', roman: 'nu' },
    { char: 'ね', roman: 'ne' },
    { char: 'の', roman: 'no' },
    { char: 'は', roman: 'ha' },
    { char: 'ひ', roman: 'hi' },
    { char: 'ふ', roman: 'fu' },
    { char: 'へ', roman: 'he' },
    { char: 'ほ', roman: 'ho' },
    { char: 'ま', roman: 'ma' },
    { char: 'み', roman: 'mi' },
    { char: 'む', roman: 'mu' },
    { char: 'め', roman: 'me' },
    { char: 'も', roman: 'mo' },
    { char: 'や', roman: 'ya' },
    { char: 'ゆ', roman: 'yu' },
    { char: 'よ', roman: 'yo' },
    { char: 'ら', roman: 'ra' },
    { char: 'り', roman: 'ri' },
    { char: 'る', roman: 'ru' },
    { char: 'れ', roman: 're' },
    { char: 'ろ', roman: 'ro' },
    { char: 'わ', roman: 'wa' },
    { char: 'を', roman: 'wo' },
    { char: 'ん', roman: 'n' }
];

const hiraganaCombinations = [
    { char: 'きゃ', roman: 'kya' },
    { char: 'きゅ', roman: 'kyu' },
    { char: 'きょ', roman: 'kyo' },
    { char: 'しゃ', roman: 'sha' },
    { char: 'しゅ', roman: 'shu' },
    { char: 'しょ', roman: 'sho' },
    { char: 'ちゃ', roman: 'cha' },
    { char: 'ちゅ', roman: 'chu' },
    { char: 'ちょ', roman: 'cho' },
    { char: 'にゃ', roman: 'nya' },
    { char: 'にゅ', roman: 'nyu' },
    { char: 'にょ', roman: 'nyo' },
    { char: 'ひゃ', roman: 'hya' },
    { char: 'ひゅ', roman: 'hyu' },
    { char: 'ひょ', roman: 'hyo' },
    { char: 'みゃ', roman: 'mya' },
    { char: 'みゅ', roman: 'myu' },
    { char: 'みょ', roman: 'myo' },
    { char: 'りゃ', roman: 'rya' },
    { char: 'りゅ', roman: 'ryu' },
    { char: 'りょ', roman: 'ryo' }
];

const katakanaVowels = [
    { char: 'ア', roman: 'a' },
    { char: 'イ', roman: 'i' },
    { char: 'ウ', roman: 'u' },
    { char: 'エ', roman: 'e' },
    { char: 'オ', roman: 'o' }
];

const katakanaConsonants = [
    { char: 'カ', roman: 'ka' },
    { char: 'キ', roman: 'ki' },
    { char: 'ク', roman: 'ku' },
    { char: 'ケ', roman: 'ke' },
    { char: 'コ', roman: 'ko' },
    { char: 'サ', roman: 'sa' },
    { char: 'シ', roman: 'shi' },
    { char: 'ス', roman: 'su' },
    { char: 'セ', roman: 'se' },
    { char: 'ソ', roman: 'so' },
    { char: 'タ', roman: 'ta' },
    { char: 'チ', roman: 'chi' },
    { char: 'ツ', roman: 'tsu' },
    { char: 'テ', roman: 'te' },
    { char: 'ト', roman: 'to' },
    { char: 'ナ', roman: 'na' },
    { char: 'ニ', roman: 'ni' },
    { char: 'ヌ', roman: 'nu' },
    { char: 'ネ', roman: 'ne' },
    { char: 'ノ', roman: 'no' },
    { char: 'ハ', roman: 'ha' },
    { char: 'ヒ', roman: 'hi' },
    { char: 'フ', roman: 'fu' },
    { char: 'ヘ', roman: 'he' },
    { char: 'ホ', roman: 'ho' },
    { char: 'マ', roman: 'ma' },
    { char: 'ミ', roman: 'mi' },
    { char: 'ム', roman: 'mu' },
    { char: 'メ', roman: 'me' },
    { char: 'モ', roman: 'mo' },
    { char: 'ヤ', roman: 'ya' },
    { char: 'ユ', roman: 'yu' },
    { char: 'ヨ', roman: 'yo' },
    { char: 'ラ', roman: 'ra' },
    { char: 'リ', roman: 'ri' },
    { char: 'ル', roman: 'ru' },
    { char: 'レ', roman: 're' },
    { char: 'ロ', roman: 'ro' },
    { char: 'ワ', roman: 'wa' },
    { char: 'ヲ', roman: 'wo' },
    { char: 'ン', roman: 'n' }
];

const katakanaCombinations = [
    { char: 'キャ', roman: 'kya' },
    { char: 'キュ', roman: 'kyu' },
    { char: 'キョ', roman: 'kyo' },
    { char: 'シャ', roman: 'sha' },
    { char: 'シュ', roman: 'shu' },
    { char: 'ショ', roman: 'sho' },
    { char: 'チャ', roman: 'cha' },
    { char: 'チュ', roman: 'chu' },
    { char: 'チョ', roman: 'cho' },
    { char: 'ニャ', roman: 'nya' },
    { char: 'ニュ', roman: 'nyu' },
    { char: 'ニョ', roman: 'nyo' },
    { char: 'ヒャ', roman: 'hya' },
    { char: 'ヒュ', roman: 'hyu' },
    { char: 'ヒョ', roman: 'hyo' },
    { char: 'ミャ', roman: 'mya' },
    { char: 'ミュ', roman: 'myu' },
    { char: 'ミョ', roman: 'myo' },
    { char: 'リャ', roman: 'rya' },
    { char: 'リュ', roman: 'ryu' },
    { char: 'リョ', roman: 'ryo' }
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
    const combinationsCheckbox = document.getElementById('telugu-combinations');
    const practiceArea = document.getElementById('practice-area');
    const options = document.getElementById('options');
    const timeLimitInput = document.getElementById('time-limit');
    const languageSelect = document.getElementById('language-select');
    const languageButton = document.getElementById('language-button');
    const teluguOptions = document.getElementById('telugu-options');
    const arabicOptions = document.getElementById('arabic-options');
    const hiraganaOptions = document.getElementById('hiragana-options');
    const katakanaOptions = document.getElementById('katakana-options');

    const hiraganaVowelsCheckbox = document.getElementById('hiragana-vowels');
    const hiraganaConsonantsCheckbox = document.getElementById('hiragana-consonants');
    const hiraganaCombinationsCheckbox = document.getElementById('hiragana-combinations');
    const katakanaVowelsCheckbox = document.getElementById('katakana-vowels');
    const katakanaConsonantsCheckbox = document.getElementById('katakana-consonants');
    const katakanaCombinationsCheckbox = document.getElementById('katakana-combinations');

    languageButton.addEventListener('click', () => {
        selectedLanguage = languageSelect.value;
        teluguOptions.style.display = 'none';
        arabicOptions.style.display = 'none';
        hiraganaOptions.style.display = 'none';
        katakanaOptions.style.display = 'none';

        if (selectedLanguage === 'telugu') {
            teluguOptions.style.display = 'block';
        } else if (selectedLanguage === 'arabic') {
            arabicOptions.style.display = 'block';
        } else if (selectedLanguage === 'hiragana') {
            hiraganaOptions.style.display = 'block';
        } else if (selectedLanguage === 'katakana') {
            katakanaOptions.style.display = 'block';
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
        feedback.className = correct ? 'correct' : 'incorrect';

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
            if (combinationsCheckbox.checked) {
                characters = characters.concat(generateTeluguCombinations(teluguConsonants, teluguDependentVowels));
            }
        } else if (selectedLanguage === 'arabic') {
            characters = characters.concat(arabicConsonants);
        } else if (selectedLanguage === 'hiragana') {
            if (hiraganaVowelsCheckbox.checked) {
                characters = characters.concat(hiraganaVowels);
            }
            if (hiraganaConsonantsCheckbox.checked) {
                characters = characters.concat(hiraganaConsonants);
            }
            if (hiraganaCombinationsCheckbox.checked) {
                characters = characters.concat(hiraganaCombinations);
            }
        } else if (selectedLanguage === 'katakana') {
            if (katakanaVowelsCheckbox.checked) {
                characters = characters.concat(katakanaVowels);
            }
            if (katakanaConsonantsCheckbox.checked) {
                characters = characters.concat(katakanaConsonants);
            }
            if (katakanaCombinationsCheckbox.checked) {
                characters = characters.concat(katakanaCombinations);
            }
        }

        console.log('Selected characters:', characters); // Log the selected characters

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

function generateTeluguCombinations(consonants, vowels) {
    const combinations = [];
    consonants.forEach(consonant => {
        const baseRoman = consonant.roman.slice(0, -1); // Remove the "a" at the end
        vowels.forEach(vowel => {
            combinations.push({
                char: consonant.char + vowel.char,
                roman: baseRoman + vowel.roman
            });
        });
    });
    return combinations;
}
