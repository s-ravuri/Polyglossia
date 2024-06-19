
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Arrays of Telugu characters and their Roman alphabet equivalents
const teluguVowels = [
    { char: 'అ', roman: ['a'] },
    { char: 'ఆ', roman: ['aa'] },
    { char: 'ఇ', roman: ['i'] },
    { char: 'ఈ', roman: ['ii'] },
    { char: 'ఉ', roman: ['u'] },
    { char: 'ఊ', roman: ['uu'] },
    { char: 'ఎ', roman: ['e'] },
    { char: 'ఏ', roman: ['ee'] },
    { char: 'ఐ', roman: ['ai'] },
    { char: 'ఒ', roman: ['o'] },
    { char: 'ఓ', roman: ['oo'] },
    { char: 'ఔ', roman: ['au'] }
];
const teluguConsonants = [
    { char: 'క', roman: ['ka'] },
    { char: 'గ', roman: ['ga'] },
    { char: 'ఙ', roman: ['gna'] },
    { char: 'చ', roman: ['cha'] },
    { char: 'జ', roman: ['ja'] },
    { char: 'ఞ', roman: ['nya'] },
    { char: 'ట', roman: ['ta'] },
    { char: 'డ', roman: ['da'] },
    { char: 'ణ', roman: ['na'] },
    { char: 'త', roman: ['tha'] },
    { char: 'ద', roman: ['dha'] },
    { char: 'న', roman: ['na'] },
    { char: 'ప', roman: ['pa'] },
    { char: 'బ', roman: ['ba'] },
    { char: 'మ', roman: ['ma'] },
    { char: 'య', roman: ['ya'] },
    { char: 'ర', roman: ['ra'] },
    { char: 'ల', roman: ['la'] },
    { char: 'వ', roman: ['va'] },
    { char: 'శ', roman: ['sha'] },
    { char: 'స', roman: ['sa'] },
    { char: 'హ', roman: ['ha'] },
    { char: 'ళ', roman: ['la'] },
    { char: 'క్ష', roman: ['ksha'] },
    { char: 'ఱ', roman: ['rra'] }
];
const teluguStressedConsonants = [
    { char: 'ఖ', roman: ['Ka'] },
    { char: 'ఘ', roman: ['Ga'] },
    { char: 'ఛ', roman: ['Cha'] },
    { char: 'ఝ', roman: ['Ja'] },
    { char: 'ఠ', roman: ['Ta'] },
    { char: 'ఢ', roman: ['Da'] },
    { char: 'థ', roman: ['Tha'] },
    { char: 'ధ', roman: ['Dha'] },
    { char: 'ఫ', roman: ['Pa'] },
    { char: 'భ', roman: ['Ba'] },
    
    { char: 'ష', roman: ['Sha'] }
];
const teluguDependentVowels = [
    { char: 'ా', roman: ['aa'] },
    { char: 'ి', roman: ['i'] },
    { char: 'ీ', roman: ['ii'] },
    { char: 'ు', roman: ['u'] },
    { char: 'ూ', roman: ['uu'] },
    { char: 'ె', roman: ['e'] },
    { char: 'ే', roman: ['ee'] },
    { char: 'ై', roman: ['ai'] },
    { char: 'ొ', roman: ['o'] },
    { char: 'ో', roman: ['oo'] },
    { char: 'ౌ', roman: ['au'] }
];


// Arrays of Arabic characters and their Roman alphabet equivalents
const arabicConsonants = [
    { char: 'ا', roman: ['a'] },
    { char: 'ب', roman: ['b'] },
    { char: 'ت', roman: ['t'] },
    { char: 'ث', roman: ['th'] },
    { char: 'ج', roman: ['j'] },
    { char: 'ح', roman: ['h'] },
    { char: 'خ', roman: ['kh'] },
    { char: 'د', roman: ['d'] },
    { char: 'ذ', roman: ['dh'] },
    { char: 'ر', roman: ['r'] },
    { char: 'ز', roman: ['z'] },
    { char: 'س', roman: ['s'] },
    { char: 'ش', roman: ['sh'] },
    { char: 'ص', roman: ['s'] },
    { char: 'ض', roman: ['d'] },
    { char: 'ط', roman: ['t'] },
    { char: 'ظ', roman: ['dh'] },
    { char: 'ع', roman: ['‘'] },
    { char: 'غ', roman: ['gh'] },
    { char: 'ف', roman: ['f'] },
    { char: 'ق', roman: ['q'] },
    { char: 'ك', roman: ['k'] },
    { char: 'ل', roman: ['l'] },
    { char: 'م', roman: ['m'] },
    { char: 'ن', roman: ['n'] },
    { char: 'ه', roman: ['h'] },
    { char: 'ء', roman: ['’'] }
];


// Arrays of Hiragana characters and their Roman alphabet equivalents
const hiraganaVowels = [
    { char: 'あ', roman: ['a'] },
    { char: 'い', roman: ['i'] },
    { char: 'う', roman: ['u'] },
    { char: 'え', roman: ['e'] },
    { char: 'お', roman: ['o'] }
];

const hiraganaConsonants = [
    { char: 'か', roman: ['ka'] },
    { char: 'き', roman: ['ki'] },
    { char: 'く', roman: ['ku'] },
    { char: 'け', roman: ['ke'] },
    { char: 'こ', roman: ['ko'] },
    { char: 'が', roman: ['ga'] },
    { char: 'ぎ', roman: ['gi'] },
    { char: 'ぐ', roman: ['gu'] },
    { char: 'げ', roman: ['ge'] },
    { char: 'ご', roman: ['go'] },
    { char: 'さ', roman: ['sa'] },
    { char: 'し', roman: ['shi'] },
    { char: 'す', roman: ['su'] },
    { char: 'せ', roman: ['se'] },
    { char: 'そ', roman: ['so'] },
    { char: 'ざ', roman: ['za'] },
    { char: 'じ', roman: ['ji'] },
    { char: 'ず', roman: ['zu'] },
    { char: 'ぜ', roman: ['ze'] },
    { char: 'ぞ', roman: ['zo'] },
    { char: 'た', roman: ['ta'] },
    { char: 'ち', roman: ['chi'] },
    { char: 'つ', roman: ['tsu'] },
    { char: 'て', roman: ['te'] },
    { char: 'と', roman: ['to'] },
    { char: 'だ', roman: ['da'] },
    { char: 'ぢ', roman: ['ji'] },
    { char: 'づ', roman: ['zu'] },
    { char: 'で', roman: ['de'] },
    { char: 'ど', roman: ['do'] },
    { char: 'な', roman: ['na'] },
    { char: 'に', roman: ['ni'] },
    { char: 'ぬ', roman: ['nu'] },
    { char: 'ね', roman: ['ne'] },
    { char: 'の', roman: ['no'] },
    { char: 'は', roman: ['ha'] },
    { char: 'ひ', roman: ['hi'] },
    { char: 'ふ', roman: ['fu'] },
    { char: 'へ', roman: ['he'] },
    { char: 'ほ', roman: ['ho'] },
    { char: 'ば', roman: ['ba'] },
    { char: 'び', roman: ['bi'] },
    { char: 'ぶ', roman: ['bu'] },
    { char: 'べ', roman: ['be'] },
    { char: 'ぼ', roman: ['bo'] },
    { char: 'ぱ', roman: ['pa'] },
    { char: 'ぴ', roman: ['pi'] },
    { char: 'ぷ', roman: ['pu'] },
    { char: 'ぺ', roman: ['pe'] },
    { char: 'ぽ', roman: ['po'] },
    { char: 'ま', roman: ['ma'] },
    { char: 'み', roman: ['mi'] },
    { char: 'む', roman: ['mu'] },
    { char: 'め', roman: ['me'] },
    { char: 'も', roman: ['mo'] },
    { char: 'や', roman: ['ya'] },
    { char: 'ゆ', roman: ['yu'] },
    { char: 'よ', roman: ['yo'] },
    { char: 'ら', roman: ['ra'] },
    { char: 'り', roman: ['ri'] },
    { char: 'る', roman: ['ru'] },
    { char: 'れ', roman: ['re'] },
    { char: 'ろ', roman: ['ro'] },
    { char: 'わ', roman: ['wa'] },
    { char: 'を', roman: ['wo'] },
    { char: 'ん', roman: ['n'] }
];

const hiraganaCombinations = [
    { char: 'きゃ', roman: ['kya'] },
    { char: 'きゅ', roman: ['kyu'] },
    { char: 'きょ', roman: ['kyo'] },
    { char: 'ぎゃ', roman: ['gya'] },
    { char: 'ぎゅ', roman: ['gyu'] },
    { char: 'ぎょ', roman: ['gyo'] },
    { char: 'しゃ', roman: ['sha'] },
    { char: 'しゅ', roman: ['shu'] },
    { char: 'しょ', roman: ['sho'] },
    { char: 'じゃ', roman: ['ja', 'jya', 'zha'] },
    { char: 'じゅ', roman: ['ju', 'jyu', 'zhu'] },
    { char: 'じょ', roman: ['jo', 'jyo', 'zho'] },
    { char: 'ちゃ', roman: ['cha'] },
    { char: 'ちゅ', roman: ['chu'] },
    { char: 'ちょ', roman: ['cho'] },
    { char: 'ぢゃ', roman: ['ja', 'jya', 'zha'] },
    { char: 'ぢゅ', roman: ['ju', 'jyu', 'zhu']},
    { char: 'ぢょ', roman: ['jo', 'jyo', 'zho'] },
    { char: 'にゃ', roman: ['nya'] },
    { char: 'にゅ', roman: ['nyu'] },
    { char: 'にょ', roman: ['nyo'] },
    { char: 'ひゃ', roman: ['hya'] },
    { char: 'ひゅ', roman: ['hyu'] },
    { char: 'ひょ', roman: ['hyo'] },
    { char: 'びゃ', roman: ['bya'] },
    { char: 'びゅ', roman: ['byu'] },
    { char: 'びょ', roman: ['byo'] },
    { char: 'ぴゃ', roman: ['pya'] },
    { char: 'ぴゅ', roman: ['pyu'] },
    { char: 'ぴょ', roman: ['pyo'] },
    { char: 'みゃ', roman: ['mya'] },
    { char: 'みゅ', roman: ['myu'] },
    { char: 'みょ', roman: ['myo'] },
    { char: 'りゃ', roman: ['rya'] },
    { char: 'りゅ', roman: ['ryu'] },
    { char: 'りょ', roman: ['ryo'] }
];

// Arrays of Katakana characters and their Roman alphabet equivalents
const katakanaVowels = [
    { char: 'ア', roman: ['a'] },
    { char: 'イ', roman: ['i'] },
    { char: 'ウ', roman: ['u'] },
    { char: 'エ', roman: ['e'] },
    { char: 'オ', roman: ['o'] }
];
const katakanaConsonants = [
    { char: 'カ', roman: ['ka'] },
    { char: 'キ', roman: ['ki'] },
    { char: 'ク', roman: ['ku'] },
    { char: 'ケ', roman: ['ke'] },
    { char: 'コ', roman: ['ko'] },
    { char: 'ガ', roman: ['ga'] },
    { char: 'ギ', roman: ['gi'] },
    { char: 'グ', roman: ['gu'] },
    { char: 'ゲ', roman: ['ge'] },
    { char: 'ゴ', roman: ['go'] },
    { char: 'サ', roman: ['sa'] },
    { char: 'シ', roman: ['shi'] },
    { char: 'ス', roman: ['su'] },
    { char: 'セ', roman: ['se'] },
    { char: 'ソ', roman: ['so'] },
    { char: 'ザ', roman: ['za'] },
    { char: 'ジ', roman: ['ji', 'zi', 'zhi'] },
    { char: 'ズ', roman: ['zu'] },
    { char: 'ゼ', roman: ['ze'] },
    { char: 'ゾ', roman: ['zo'] },
    { char: 'タ', roman: ['ta'] },
    { char: 'チ', roman: ['chi'] },
    { char: 'ツ', roman: ['tsu'] },
    { char: 'テ', roman: ['te'] },
    { char: 'ト', roman: ['to'] },
    { char: 'ダ', roman: ['da'] },
    { char: 'ヂ', roman: ['ji', 'di', 'zhi'] },
    { char: 'ヅ', roman: ['zu', 'du', 'dzu'] },
    { char: 'デ', roman: ['de'] },
    { char: 'ド', roman: ['do'] },
    { char: 'ナ', roman: ['na'] },
    { char: 'ニ', roman: ['ni'] },
    { char: 'ヌ', roman: ['nu'] },
    { char: 'ネ', roman: ['ne'] },
    { char: 'ノ', roman: ['no'] },
    { char: 'ハ', roman: ['ha'] },
    { char: 'ヒ', roman: ['hi'] },
    { char: 'フ', roman: ['fu'] },
    { char: 'ヘ', roman: ['he'] },
    { char: 'ホ', roman: ['ho'] },
    { char: 'バ', roman: ['ba'] },
    { char: 'ビ', roman: ['bi'] },
    { char: 'ブ', roman: ['bu'] },
    { char: 'ベ', roman: ['be'] },
    { char: 'ボ', roman: ['bo'] },
    { char: 'パ', roman: ['pa'] },
    { char: 'ピ', roman: ['pi'] },
    { char: 'プ', roman: ['pu'] },
    { char: 'ペ', roman: ['pe'] },
    { char: 'ポ', roman: ['po'] },
    { char: 'マ', roman: ['ma'] },
    { char: 'ミ', roman: ['mi'] },
    { char: 'ム', roman: ['mu'] },
    { char: 'メ', roman: ['me'] },
    { char: 'モ', roman: ['mo'] },
    { char: 'ヤ', roman: ['ya'] },
    { char: 'ユ', roman: ['yu'] },
    { char: 'ヨ', roman: ['yo'] },
    { char: 'ラ', roman: ['ra'] },
    { char: 'リ', roman: ['ri'] },
    { char: 'ル', roman: ['ru'] },
    { char: 'レ', roman: ['re'] },
    { char: 'ロ', roman: ['ro'] },
    { char: 'ワ', roman: ['wa'] },
    { char: 'ヲ', roman: ['wo'] },
    { char: 'ン', roman: ['n'] }
];
const katakanaCombinations = [
    { char: 'キャ', roman: ['kya'] },
    { char: 'キュ', roman: ['kyu'] },
    { char: 'キョ', roman: ['kyo'] },
    { char: 'ギャ', roman: ['gya'] },
    { char: 'ギュ', roman: ['gyu'] },
    { char: 'ギョ', roman: ['gyo'] },
    { char: 'シャ', roman: ['sha'] },
    { char: 'シュ', roman: ['shu'] },
    { char: 'ショ', roman: ['sho'] },
    { char: 'ジャ', roman: ['ja', 'jya', 'zha'] },
    { char: 'ジュ', roman: ['ju', 'jyu','zhu'] },
    { char: 'ジョ', roman: ['jo', 'jyo','zho'] },
    { char: 'チャ', roman: ['cha'] },
    { char: 'チュ', roman: ['chu'] },
    { char: 'チョ', roman: ['cho'] },
    { char: 'ヂャ', roman: ['ja', 'jya', 'zha'] },
    { char: 'ヂュ', roman: ['ju', 'jyu', 'zhu'] },
    { char: 'ヂョ', roman: ['jo', 'jyo', 'zho'] },
    { char: 'ニャ', roman: ['nya'] },
    { char: 'ニュ', roman: ['nyu'] },
    { char: 'ニョ', roman: ['nyo'] },
    { char: 'ヒャ', roman: ['hya'] },
    { char: 'ヒュ', roman: ['hyu'] },
    { char: 'ヒョ', roman: ['hyo'] },
    { char: 'ビャ', roman: ['bya'] },
    { char: 'ビュ', roman: ['byu'] },
    { char: 'ビョ', roman: ['byo'] },
    { char: 'ピャ', roman: ['pya'] },
    { char: 'ピュ', roman: ['pyu'] },
    { char: 'ピョ', roman: ['pyo'] },
    { char: 'ミャ', roman: ['mya'] },
    { char: 'ミュ', roman: ['myu'] },
    { char: 'ミョ', roman: ['myo'] },
    { char: 'リャ', roman: ['rya'] },
    { char: 'リュ', roman: ['ryu'] },
    { char: 'リョ', roman: ['ryo'] }
];

// Arrays of Greek characters and their Roman alphabet equivalents
const greekUppercase = [
    { char: 'Α', roman: ['A', 'Alpha'] },
    { char: 'Β', roman: ['B', 'V', 'Beta'] },
    { char: 'Γ', roman: ['G', 'Gamma'] },
    { char: 'Δ', roman: ['D', 'Delta'] },
    { char: 'Ε', roman: ['E', 'Epsilon'] },
    { char: 'Ζ', roman: ['Z', 'Zeta'] },
    { char: 'Η', roman: ['EE', 'H', 'Eta'] },
    { char: 'Θ', roman: ['Th', 'Theta'] },
    { char: 'Ι', roman: ['I', 'Iota'] },
    { char: 'Κ', roman: ['K', 'Kappa'] },
    { char: 'Λ', roman: ['L', 'Lambda'] },
    { char: 'Μ', roman: ['M', 'Mu'] },
    { char: 'Ν', roman: ['N', 'Nu'] },
    { char: 'Ξ', roman: ['Ks', 'X', 'Xi'] },
    { char: 'Ο', roman: ['O', 'Omicron'] },
    { char: 'Π', roman: ['P', 'Pi'] },
    { char: 'Ρ', roman: ['R', 'Rho'] },
    { char: 'Σ', roman: ['S', 'Sigma'] },
    { char: 'Τ', roman: ['T', 'Tau'] },
    { char: 'Υ', roman: ['Y', 'IU', 'Upsilon'] },
    { char: 'Φ', roman: ['Ph', 'Phi'] },
    { char: 'Χ', roman: ['Ch', 'Kh', 'Chi'] },
    { char: 'Ψ', roman: ['Ps', 'Psi'] },
    { char: 'Ω', roman: ['OO', 'Omega'] }
];

const greekLowercase = [
    { char: 'α', roman: ['a', 'alpha'] },
    { char: 'β', roman: ['b', 'v', 'beta'] },
    { char: 'γ', roman: ['g', 'gamma'] },
    { char: 'δ', roman: ['d', 'delta'] },
    { char: 'ε', roman: ['e', 'epsilon'] },
    { char: 'ζ', roman: ['z', 'zeta'] },
    { char: 'η', roman: ['h', 'ee', 'eta'] },
    { char: 'θ', roman: ['th', 'theta'] },
    { char: 'ι', roman: ['i', 'iota'] },
    { char: 'κ', roman: ['k', 'kappa'] },
    { char: 'λ', roman: ['l', 'lambda'] },
    { char: 'μ', roman: ['m', 'mu'] },
    { char: 'ν', roman: ['n', 'nu'] },
    { char: 'ξ', roman: ['ks', 'x', 'xi'] },
    { char: 'ο', roman: ['o', 'omicron'] },
    { char: 'π', roman: ['p', 'pi'] },
    { char: 'ρ', roman: ['r', 'rho'] },
    { char: 'σ', roman: ['s', 'sigma'] },
    { char: 'τ', roman: ['t', 'tau'] },
    { char: 'υ', roman: ['y', 'iu', 'upsilon'] },
    { char: 'φ', roman: ['ph', 'phi'] },
    { char: 'χ', roman: ['ch', 'kh', 'chi'] },
    { char: 'ψ', roman: ['ps', 'psi'] },
    { char: 'ω', roman: ['oo', 'omega'] }
];





let characters = [];
let currentCharacterIndex = 0;
let correctScore = 0;
let incorrectScore = 0;
let timeLeft;
let timer;
let timerStarted = false;
let selectedLanguage = 'telugu';
let previousCharacter = null; // Add this line at the beginning of the script to keep track of the previous character// Function to shuffle the characters array

document.addEventListener('DOMContentLoaded', () => {
    const characterDisplay = document.getElementById('character-display');
    const inputAnswer = document.getElementById('input-answer');
    const submitAnswer = document.getElementById('submit-answer');
    const feedback = document.getElementById('feedback');
    const correctScoreDisplay = document.getElementById('correct-score');
    const incorrectScoreDisplay = document.getElementById('incorrect-score');
    const timerDisplay = document.getElementById('timer');
    const timeSlider = document.getElementById('time-slider');
    const timeValue = document.getElementById('time-value');

    timeSlider.addEventListener('input', () => {
        timeValue.textContent = timeSlider.value === "0" ? "Unlimited" : timeSlider.value;
    });
    

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
    const greekOptions = document.getElementById('greek-options');

    const hiraganaVowelsCheckbox = document.getElementById('hiragana-vowels');
    const hiraganaConsonantsCheckbox = document.getElementById('hiragana-consonants');
    const hiraganaCombinationsCheckbox = document.getElementById('hiragana-combinations');
    const katakanaVowelsCheckbox = document.getElementById('katakana-vowels');
    const katakanaConsonantsCheckbox = document.getElementById('katakana-consonants');
    const katakanaCombinationsCheckbox = document.getElementById('katakana-combinations');
    const greekUppercaseCheckbox = document.getElementById('greek-uppercase')
    const greekLowercaseCheckbox = document.getElementById('greek-lowercase')

    languageButton.addEventListener('click', () => {
        selectedLanguage = languageSelect.value;
        teluguOptions.style.display = 'none';
        arabicOptions.style.display = 'none';
        hiraganaOptions.style.display = 'none';
        katakanaOptions.style.display = 'none';
        greekOptions.style.display = 'none';

        if (selectedLanguage === 'telugu') {
            teluguOptions.style.display = 'block';
        } else if (selectedLanguage === 'arabic') {
            arabicOptions.style.display = 'block';
        } else if (selectedLanguage === 'hiragana') {
            hiraganaOptions.style.display = 'block';
        } else if (selectedLanguage === 'katakana') {
            katakanaOptions.style.display = 'block';
        } else if (selectedLanguage === 'greek') {
            greekOptions.style.display = 'block';
        }
        

        document.getElementById('language-selection').style.display = 'none';
        options.style.display = 'block';
    });

    function displayCharacter() {
        characterDisplay.textContent = characters[currentCharacterIndex].char;
    }

    function updateScore(correct) {
        if (correct) {
            correctScore++;
        } else {
            incorrectScore++;
        }
        correctScoreDisplay.textContent = `Correct: ${correctScore}`;
        incorrectScoreDisplay.textContent = `Incorrect: ${incorrectScore}`;
    }

    function checkAnswer() {
        if (!timerStarted) {
            startTimer();
            timerStarted = true;
        }
        let userAnswer = inputAnswer.value.trim();
        let correctRomanizations = characters[currentCharacterIndex].roman;
    
        // Check if correctRomanizations is an array
    if (!Array.isArray(correctRomanizations)) {
        console.error('correctRomanizations is not an array:', correctRomanizations);
        console.error('characters[currentCharacterIndex]:', characters[currentCharacterIndex]);
        return;
    }

        // Make userAnswer lowercase for case-insensitive languages
        const caseInsensitiveLanguages = ['greek', 'hiragana', 'katakana']; // Add other languages as needed
        if (caseInsensitiveLanguages.includes(selectedLanguage.toLowerCase())) {
            userAnswer = userAnswer.toLowerCase();
            correctRomanizations = correctRomanizations.map(roman => roman.toLowerCase());        }

        console.log('User Answer:', userAnswer);
        console.log('Correct Romanizations:', correctRomanizations);
    
        const correct = correctRomanizations.includes(userAnswer);
    
        console.log('Is Correct:', correct);
    
        updateScore(correct);
    
        if (correct) {
            feedback.textContent = 'Correct!';
            feedback.className = 'correct';
        } else {
            const correctAnswers = correctRomanizations.join(', ');
            feedback.innerHTML = `Incorrect! The correct answer is ${correctAnswers} (${characters[currentCharacterIndex].char}). Try to remember this for next time. <br><span style="font-size: 2em;"></span>`;
            feedback.className = 'incorrect';
        }
    
        inputAnswer.value = '';
        previousCharacter = characters[currentCharacterIndex]; // Update the previous character
        currentCharacterIndex = (currentCharacterIndex + 1) % characters.length;
    
        console.log('Current Character Index:', currentCharacterIndex);
        console.log('Next Character:', characters[currentCharacterIndex].char);
    
        displayCharacter();
    }
    
    
    
    

    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Time Left: ${timeLeft}`;
            if (timeLeft === 0) {
                clearInterval(timer);
                alert(`Time's up! Your score is ${correctScore}.`);
            }
        }, 1000);
    }

    startButton.addEventListener('click', () => {
        characters = [];
        let selectedConsonants = [];
    
        if (selectedLanguage === 'telugu') {
            if (vowelsCheckbox.checked) {
                characters = characters.concat(teluguVowels);
            }
            if (consonantsCheckbox.checked) {
                selectedConsonants = selectedConsonants.concat(teluguConsonants);
                characters = characters.concat(teluguConsonants);
            }
            if (stressedConsonantsCheckbox.checked) {
                selectedConsonants = selectedConsonants.concat(teluguStressedConsonants);
                characters = characters.concat(teluguStressedConsonants);
            }
            if (combinationsCheckbox.checked && selectedConsonants.length > 0) {
                characters = characters.concat(generateTeluguCombinations(selectedConsonants, teluguDependentVowels));
            }
        } else if (selectedLanguage === 'arabic') {
            characters = characters.concat(arabicConsonants);
        } else if (selectedLanguage === 'hiragana') {
            if (hiraganaVowelsCheckbox.checked) {
                characters = characters.concat(hiraganaVowels);
            }
            if (hiraganaConsonantsCheckbox.checked) {
                selectedConsonants = selectedConsonants.concat(hiraganaConsonants);
                characters = characters.concat(hiraganaConsonants);
            }
            if (hiraganaCombinationsCheckbox.checked && selectedConsonants.length > 0) {}
                characters = characters.concat(hiraganaCombinations);

        } else if (selectedLanguage === 'katakana') {
            if (katakanaVowelsCheckbox.checked) {
                characters = characters.concat(katakanaVowels);
            }
            if (katakanaConsonantsCheckbox.checked) {
                selectedConsonants = selectedConsonants.concat(katakanaConsonants);
                characters = characters.concat(katakanaConsonants);
            }
            if (katakanaCombinationsCheckbox.checked && selectedConsonants.length > 0) {
                characters = characters.concat(katakanaCombinations);
            }
        } else if (selectedLanguage == 'greek') {
            if (greekLowercaseCheckbox.checked) {
                characters = characters.concat(greekLowercase);
            }
            if (greekUppercaseCheckbox.checked) {
                characters = characters.concat(greekUppercase);
            }
            
        }

    
        console.log('Selected characters:', characters); // Log the selected characters
    
        if (characters.length === 0) {
            alert('Please select at least one group to practice.');
            return;
        }
    
        let time = parseInt(timeSlider.value, 10);
        if (time === 0) {
            timeLeft = Infinity; // Infinite time for unlimited setting
            timerDisplay.textContent = 'Time Left: Unlimited';
        } else {
            timeLeft = time;
            timerDisplay.textContent = `Time Left: ${timeLeft}`;
        }
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
        const baseRoman = consonant.roman[0].slice(0, -1); // Remove the "a" at the end of the first romanization
        vowels.forEach(vowel => {
            // Only combine consonants with dependent vowels
            combinations.push({
                char: consonant.char + vowel.char,
                roman: [baseRoman + vowel.roman[0]]
            });
        });
    });
    return combinations;
}


