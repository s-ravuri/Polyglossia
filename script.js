
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
    { char: 'ఒ', roman: ['o'] },
    { char: 'ఓ', roman: ['oo'] },
    { char: 'ఐ', roman: ['ai'] },
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
    { char: 'ఖ', roman: ['Ka', 'Kha', 'kha'] },
    { char: 'ఘ', roman: ['Ga', 'Gha', 'gha'] },
    { char: 'ఛ', roman: ['Cha', 'Chha', 'chha'] },
    { char: 'ఝ', roman: ['Ja', 'Jha', 'jha'] },
    { char: 'ఠ', roman: ['Ta', 'Tha', 'tha'] },
    { char: 'ఢ', roman: ['Da', 'Dha', 'dha'] },
    { char: 'థ', roman: ['Tha', 'Thha', 'thha'] },
    { char: 'ధ', roman: ['Dha', 'Dhha', 'dhha'] },
    { char: 'ఫ', roman: ['Pa', 'Fa', 'Pha', 'Fa', 'pha'] },
    { char: 'భ', roman: ['Ba', 'Bha', 'bha'] },
    { char: 'ష', roman: ['Sha', 'Shha', 'shha'] }
];
const teluguDiacriticVowels = [
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

// Arrays of Devanagari characters and their Roman alphabet equivalents
const devanagariVowels = [
    { char: 'अ', roman: ['a'] },
    { char: 'आ', roman: ['aa', 'ā'] },
    { char: 'इ', roman: ['i'] },
    { char: 'ई', roman: ['ii', 'ī'] },
    { char: 'उ', roman: ['u'] },
    { char: 'ऊ', roman: ['uu', 'ū'] },
    { char: 'ए', roman: ['e', 'ee', 'ē'] },
    { char: 'ओ', roman: ['o', 'oo', 'ō'] },
    { char: 'ऐ', roman: ['ai'] },
    { char: 'औ', roman: ['au'] },
    { char: 'ऋ', roman: ['r'] },
    { char: 'ॠ', roman: ['rr'] },
    { char: 'ऌ', roman: ['l'] },
    { char: 'ॡ', roman: ['ll'] }
];
const devanagariConsonants = [
    { char: 'क', roman: ['ka'] },
    { char: 'ग', roman: ['ga'] },
    { char: 'ङ', roman: ['gna'] },
    { char: 'च', roman: ['cha', 'ca'] },
    { char: 'ज', roman: ['ja'] },
    { char: 'ञ', roman: ['nya'] },
    { char: 'ट', roman: ['ta'] },
    { char: 'ड', roman: ['da'] },
    { char: 'ण', roman: ['na'] },
    { char: 'त', roman: ['tha'] },
    { char: 'द', roman: ['dha'] },
    { char: 'न', roman: ['na'] },
    { char: 'प', roman: ['pa'] },
    { char: 'ब', roman: ['ba'] },
    { char: 'म', roman: ['ma'] },
    { char: 'य', roman: ['ya'] },
    { char: 'र', roman: ['ra'] },
    { char: 'ल', roman: ['la'] },
    { char: 'व', roman: ['va'] },
    { char: 'श', roman: ['sha'] },
    { char: 'स', roman: ['sa'] },
    { char: 'ह', roman: ['ha'] },
    { char: 'ळ', roman: ['la'] }
];
const devanagariStressedConsonants = [
    { char: 'ख', roman: ['Ka', 'kha'] },
    { char: 'घ', roman: ['Ga', 'gha'] },
    { char: 'छ', roman: ['Cha', 'chha', 'Ca'] },
    { char: 'झ', roman: ['Ja', 'jha'] },
    { char: 'ठ', roman: ['Ta', 'tha'] },
    { char: 'ढ', roman: ['Da', 'dha'] },
    { char: 'थ', roman: ['Tha', 'thha'] },
    { char: 'ध', roman: ['Dha', 'dhha'] },
    { char: 'फ', roman: ['Pa', 'pha'] },
    { char: 'भ', roman: ['Ba', 'bha'] },
    { char: 'ष', roman: ['Sha', 'shha'] }
];
const devanagariDiacriticVowels = [
    { char: '', roman: ['a'] },  // empty char for inherent vowel
    { char: 'ा', roman: ['aa', 'ā'] },
    { char: 'ि', roman: ['i'] },
    { char: 'ी', roman: ['ii', 'ī'] },
    { char: 'ु', roman: ['u'] },
    { char: 'ू', roman: ['uu', 'ū'] },
    { char: 'े', roman: ['e'] },
    { char: 'ै', roman: ['ai'] },
    { char: 'ो', roman: ['o'] },
    { char: 'ौ', roman: ['au'] }
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
    { char: 'ふ', roman: ['fu', 'hu'] },
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
    { char: 'フ', roman: ['fu', 'hu'] },
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

// Arrays of Hangul characters and their Roman alphabet equivalents
const hangulVowels = [
    { char: 'ㅏ', roman: ['a'] },
    { char: 'ㅑ', roman: ['ya'] },
    { char: 'ㅓ', roman: ['eo'] },
    { char: 'ㅕ', roman: ['yeo'] },
    { char: 'ㅗ', roman: ['o'] },
    { char: 'ㅛ', roman: ['yo'] },
    { char: 'ㅜ', roman: ['u'] },
    { char: 'ㅠ', roman: ['yu'] },
    { char: 'ㅡ', roman: ['eu'] },
    { char: 'ㅣ', roman: ['i'] },
    { char: 'ㅐ', roman: ['ae'] },
    { char: 'ㅒ', roman: ['yae'] },
    { char: 'ㅔ', roman: ['e'] },
    { char: 'ㅖ', roman: ['ye'] },
    { char: 'ㅘ', roman: ['wa'] },
    { char: 'ㅙ', roman: ['wae'] },
    { char: 'ㅚ', roman: ['oe'] },
    { char: 'ㅝ', roman: ['wo'] },
    { char: 'ㅞ', roman: ['we'] },
    { char: 'ㅟ', roman: ['wi'] },
    { char: 'ㅢ', roman: ['ui'] }
];
const hangulConsonants = [
    { char: 'ㄱ', roman: ['g', 'k'] },
    { char: 'ㄴ', roman: ['n'] },
    { char: 'ㄷ', roman: ['d', 't'] },
    { char: 'ㄹ', roman: ['r', 'l'] },
    { char: 'ㅁ', roman: ['m'] },
    { char: 'ㅂ', roman: ['b', 'p'] },
    { char: 'ㅅ', roman: ['s'] },
    { char: 'ㅇ', roman: ['ng'] },
    { char: 'ㅈ', roman: ['j'] },
    { char: 'ㅊ', roman: ['ch'] },
    { char: 'ㅋ', roman: ['k'] },
    { char: 'ㅌ', roman: ['t'] },
    { char: 'ㅍ', roman: ['p'] },
    { char: 'ㅎ', roman: ['h'] },
    { char: 'ㄲ', roman: ['kk'] },
    { char: 'ㄸ', roman: ['tt'] },
    { char: 'ㅃ', roman: ['pp'] },
    { char: 'ㅆ', roman: ['ss'] },
    { char: 'ㅉ', roman: ['jj'] }
];
// Arrays of Bopomofo characters and their Roman alphabet equivalents
const bopomofoVowels = [
    { char: 'ㄚ', roman: ['a'] },
    { char: 'ㄛ', roman: ['o'] },
    { char: 'ㄜ', roman: ['e'] },
    { char: 'ㄝ', roman: ['ê', 'eh'] },
    { char: 'ㄞ', roman: ['ai'] },
    { char: 'ㄟ', roman: ['ei'] },
    { char: 'ㄠ', roman: ['ao'] },
    { char: 'ㄡ', roman: ['ou'] },
    { char: 'ㄢ', roman: ['an'] },
    { char: 'ㄣ', roman: ['en'] },
    { char: 'ㄤ', roman: ['ang'] },
    { char: 'ㄥ', roman: ['eng'] },
    { char: 'ㄦ', roman: ['er'] }
];
const bopomofoConsonants = [
    { char: 'ㄅ', roman: ['b'] },
    { char: 'ㄆ', roman: ['p'] },
    { char: 'ㄇ', roman: ['m'] },
    { char: 'ㄈ', roman: ['f'] },
    { char: 'ㄉ', roman: ['d'] },
    { char: 'ㄊ', roman: ['t'] },
    { char: 'ㄋ', roman: ['n'] },
    { char: 'ㄌ', roman: ['l'] },
    { char: 'ㄍ', roman: ['g'] },
    { char: 'ㄎ', roman: ['k'] },
    { char: 'ㄏ', roman: ['h'] },
    { char: 'ㄐ', roman: ['j'] },
    { char: 'ㄑ', roman: ['q'] },
    { char: 'ㄒ', roman: ['x'] },
    { char: 'ㄓ', roman: ['zh'] },
    { char: 'ㄔ', roman: ['ch'] },
    { char: 'ㄕ', roman: ['sh'] },
    { char: 'ㄖ', roman: ['r'] },
    { char: 'ㄗ', roman: ['z'] },
    { char: 'ㄘ', roman: ['c'] },
    { char: 'ㄙ', roman: ['s'] }
];
const bopomofoCombinations = [
    { char: 'ㄧ', roman: ['i'] },
    { char: 'ㄨ', roman: ['u'] },
    { char: 'ㄩ', roman: ['ü', 'yu'] },
    { char: 'ㄧㄚ', roman: ['ia'] },
    { char: 'ㄧㄛ', roman: ['io'] },
    { char: 'ㄧㄝ', roman: ['ie'] },
    { char: 'ㄧㄠ', roman: ['iao'] },
    { char: 'ㄧㄡ', roman: ['iou'] },
    { char: 'ㄧㄢ', roman: ['ian'] },
    { char: 'ㄧㄣ', roman: ['in'] },
    { char: 'ㄧㄤ', roman: ['iang'] },
    { char: 'ㄧㄥ', roman: ['ing'] },
    { char: 'ㄨㄚ', roman: ['ua'] },
    { char: 'ㄨㄛ', roman: ['uo'] },
    { char: 'ㄨㄞ', roman: ['uai'] },
    { char: 'ㄨㄟ', roman: ['uei'] },
    { char: 'ㄨㄢ', roman: ['uan'] },
    { char: 'ㄨㄣ', roman: ['uen'] },
    { char: 'ㄨㄤ', roman: ['uang'] },
    { char: 'ㄨㄥ', roman: ['ung'] },
    { char: 'ㄩㄝ', roman: ['üê', 'yueh', 'üeh', 'yuê'] },
    { char: 'ㄩㄢ', roman: ['üan', 'yuan'] },
    { char: 'ㄩㄣ', roman: ['ün', 'yun'] },
    { char: 'ㄩㄥ', roman: ['üng', 'yung'] }
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
    { char: 'Ξ', roman: ['Ks', 'X', 'Xi', 'ksi'] },
    { char: 'Ο', roman: ['O', 'Omicron'] },
    { char: 'Π', roman: ['P', 'Pi'] },
    { char: 'Ρ', roman: ['R', 'Rho'] },
    { char: 'Σ', roman: ['S', 'Sigma'] },
    { char: 'Τ', roman: ['T', 'Tau'] },
    { char: 'Υ', roman: ['Y', 'IU', 'Upsilon', 'U'] },
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
    { char: 'ξ', roman: ['ks', 'x', 'xi', 'ksi'] },
    { char: 'ο', roman: ['o', 'omicron'] },
    { char: 'π', roman: ['p', 'pi'] },
    { char: 'ρ', roman: ['r', 'rho'] },
    { char: 'σ', roman: ['s', 'sigma'] },
    { char: 'τ', roman: ['t', 'tau'] },
    { char: 'υ', roman: ['y', 'iu', 'upsilon', 'u'] },
    { char: 'φ', roman: ['ph', 'phi'] },
    { char: 'χ', roman: ['ch', 'kh', 'chi'] },
    { char: 'ψ', roman: ['ps', 'psi'] },
    { char: 'ω', roman: ['oo', 'omega'] }
];

// Arrays of Cyrillic characters and their Roman alphabet equivalents
const cyrillicUppercase = [
    { char: 'А', roman: ['A', 'A'] },
    { char: 'Б', roman: ['B', 'Be'] },
    { char: 'В', roman: ['V', 'Ve'] },
    { char: 'Г', roman: ['G', 'Ge'] },
    { char: 'Д', roman: ['D', 'De'] },
    { char: 'Е', roman: ['E', 'Ye'] },
    { char: 'Ё', roman: ['Yo', 'Yo'] },
    { char: 'Ж', roman: ['Zh', 'Zhe'] },
    { char: 'З', roman: ['Z', 'Ze'] },
    { char: 'И', roman: ['I', 'I'] },
    { char: 'Й', roman: ['Y', 'Short I', 'I'] },
    { char: 'К', roman: ['K', 'Ka'] },
    { char: 'Л', roman: ['L', 'El'] },
    { char: 'М', roman: ['M', 'Em'] },
    { char: 'Н', roman: ['N', 'En'] },
    { char: 'О', roman: ['O', 'O'] },
    { char: 'П', roman: ['P', 'Pe'] },
    { char: 'Р', roman: ['R', 'Er'] },
    { char: 'С', roman: ['S', 'Es'] },
    { char: 'Т', roman: ['T', 'Te'] },
    { char: 'У', roman: ['U', 'U'] },
    { char: 'Ф', roman: ['F', 'Ef'] },
    { char: 'Х', roman: ['Kh', 'Kha'] },
    { char: 'Ц', roman: ['Ts', 'Tse'] },
    { char: 'Ч', roman: ['Ch', 'Che'] },
    { char: 'Ш', roman: ['Sh', 'Sha'] },
    { char: 'Щ', roman: ['Shch', 'Shcha'] },
    { char: 'Ъ', roman: ['Hard Sign', 'Hard Sign'] },
    { char: 'Ы', roman: ['Y', 'Yeru'] },
    { char: 'Ь', roman: ['Soft Sign', 'Soft Sign'] },
    { char: 'Э', roman: ['E', 'E'] },
    { char: 'Ю', roman: ['Yu', 'Yu'] },
    { char: 'Я', roman: ['Ya', 'Ya'] }
];
const cyrillicLowercase = [
    { char: 'а', roman: ['a', 'a'] },
    { char: 'б', roman: ['b', 'be'] },
    { char: 'в', roman: ['v', 've'] },
    { char: 'г', roman: ['g', 'ge'] },
    { char: 'д', roman: ['d', 'de'] },
    { char: 'е', roman: ['e', 'ye'] },
    { char: 'ё', roman: ['yo', 'yo'] },
    { char: 'ж', roman: ['zh', 'zhe'] },
    { char: 'з', roman: ['z', 'ze'] },
    { char: 'и', roman: ['i', 'i'] },
    { char: 'й', roman: ['y', 'short i', 'i'] },
    { char: 'к', roman: ['k', 'ka'] },
    { char: 'л', roman: ['l', 'el'] },
    { char: 'м', roman: ['m', 'em'] },
    { char: 'н', roman: ['n', 'en'] },
    { char: 'о', roman: ['o', 'o'] },
    { char: 'п', roman: ['p', 'pe'] },
    { char: 'р', roman: ['r', 'er'] },
    { char: 'с', roman: ['s', 'es'] },
    { char: 'т', roman: ['t', 'te'] },
    { char: 'у', roman: ['u', 'u'] },
    { char: 'ф', roman: ['f', 'ef'] },
    { char: 'х', roman: ['kh', 'kha'] },
    { char: 'ц', roman: ['ts', 'tse'] },
    { char: 'ч', roman: ['ch', 'che'] },
    { char: 'ш', roman: ['sh', 'sha'] },
    { char: 'щ', roman: ['shch', 'shcha'] },
    { char: 'ъ', roman: ['hard sign', 'hard sign'] },
    { char: 'ы', roman: ['y', 'yeru'] },
    { char: 'ь', roman: ['soft sign', 'soft sign'] },
    { char: 'э', roman: ['e', 'e'] },
    { char: 'ю', roman: ['yu', 'yu'] },
    { char: 'я', roman: ['ya', 'ya'] }
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
let navigationStack = [];

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
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            console.log('Back button clicked');
            navigateBack();
        });
    } else {
        console.error('Back button not found in the DOM');
    }
    const characterPracticeArea = document.getElementById('character-practice-area');
    const languageSelectionScreen = document.getElementById('language-selection');
    const extraButtons = document.getElementById('extra-buttons');
    const characterOptions = document.getElementById('character-options');
    const timeLimitInput = document.getElementById('time-limit');
    const languageSelect = document.getElementById('language-select');
    const languageButton = document.getElementById('language-button');

    const teluguOptions = document.getElementById('telugu-options');
    const devanagariOptions = document.getElementById('devanagari-options')
    const arabicOptions = document.getElementById('arabic-options');
    const hiraganaOptions = document.getElementById('hiragana-options');
    const katakanaOptions = document.getElementById('katakana-options');
    const hangulOptions = document.getElementById('hangul-options');
    const bopomofoOptions = document.getElementById('bopomofo-options');
    const greekOptions = document.getElementById('greek-options');
    const cyrillicOptions = document.getElementById('cyrillic-options');

    const teluguVowelsCheckbox = document.getElementById('telugu-vowels');
    const teluguConsonantsCheckbox = document.getElementById('telugu-consonants');
    const teluguStressedConsonantsCheckbox = document.getElementById('telugu-stressed-consonants');
    const teluguCombinationsCheckbox = document.getElementById('telugu-combinations');

    const devanagariVowelsCheckbox = document.getElementById('devanagari-vowels');
    const devanagariConsonantsCheckbox = document.getElementById('devanagari-consonants');
    const devanagariStressedConsonantsCheckbox = document.getElementById('devanagari-stressed-consonants');
    const devanagariCombinationsCheckbox = document.getElementById('devanagari-combinations');

    const hiraganaVowelsCheckbox = document.getElementById('hiragana-vowels');
    const hiraganaConsonantsCheckbox = document.getElementById('hiragana-consonants');
    const hiraganaCombinationsCheckbox = document.getElementById('hiragana-combinations');

    const katakanaVowelsCheckbox = document.getElementById('katakana-vowels');
    const katakanaConsonantsCheckbox = document.getElementById('katakana-consonants');
    const katakanaCombinationsCheckbox = document.getElementById('katakana-combinations');

    const hangulVowelsCheckbox = document.getElementById('hangul-vowels');
    const hangulConsonantsCheckbox = document.getElementById('hangul-consonants');
    const hangulCombinationsCheckbox = document.getElementById('hangul-combinations');

    const bopomofoVowelsCheckbox = document.getElementById('bopomofo-vowels');
    const bopomofoConsonantsCheckbox = document.getElementById('bopomofo-consonants');
    const bopomofoCombinationsCheckbox = document.getElementById('bopomofo-combinations');

    const greekUppercaseCheckbox = document.getElementById('greek-uppercase');
    const greekLowercaseCheckbox = document.getElementById('greek-lowercase');

    const cyrillicUppercaseCheckbox = document.getElementById('cyrillic-uppercase');
    const cyrillicLowercaseCheckbox = document.getElementById('cyrillic-lowercase');


    

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
        const caseInsensitiveLanguages = ['greek', 'hiragana', 'katakana', 'bopomofo', 'cyrillic', 'hangul']; // Add other languages as needed
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
    function updateBackButtonVisibility() {
        console.log('Navigation stack:', navigationStack);
        backButton.style.display = navigationStack.length > 1 ? 'inline-block' : 'none';
    }
    function navigateBack() {
        console.log('Navigating back. Current stack:', navigationStack);
        if (navigationStack.length > 1) {
            let currentPage = navigationStack.pop();
            let previousPage = navigationStack[navigationStack.length - 1];
            console.log('Current page:', currentPage, 'Previous page:', previousPage);
            
            if (currentPage === 'practice') {
                resetPracticeArea(); // Reset state when leaving practice area
            }

            switch (previousPage) {
                case 'initial':
                    showLanguageSelection();
                    break;
                case 'character-options':
                    showCharacterOptions();
                    break;
                case 'practice':
                    showPracticeArea();
                    break;
            }
        } else {
            console.log('Cannot go back, at initial page');
        }
    }
    function showLanguageSelection() {
        console.log('Showing language selection');
        languageSelectionScreen.style.display = 'block';        
        extraButtons.style.display = 'block';
        characterOptions.style.display = 'none';
        characterPracticeArea.style.display = 'none';
        backButton.style.display = 'none';  // Hide back button on initial page
    }
    function showCharacterOptions() {
        console.log('Showing character options');
        languageSelectionScreen.style.display = 'none';        
        extraButtons.style.display = 'none';
        characterOptions.style.display = 'block';
        characterPracticeArea.style.display = 'none';
        backButton.style.display = 'inline-block';
    }
    function showPracticeArea() {
        console.log('Showing practice area');
        languageSelectionScreen.style.display = 'none';
        extraButtons.style.display = 'none';
        characterOptions.style.display = 'none';
        characterPracticeArea.style.display = 'block';
        backButton.style.display = 'inline-block'; 
    }
    function resetToLanguageSelection() {
        document.getElementById('language-selection').style.display = 'block';
        document.getElementById('extra-buttons').style.display = 'block';
        characterOptions.style.display = 'none';
        characterPracticeArea.style.display = 'none';
        // Reset other necessary states
        correctScore = 0;
        incorrectScore = 0;
        correctScoreDisplay.textContent = 'Correct: 0';
        incorrectScoreDisplay.textContent = 'Incorrect: 0';
        clearInterval(timer);
        timerStarted = false;
        navigationStack = ['initial'];
        updateBackButtonVisibility();
    }
    function resetPracticeArea() {
        characters = [];
        currentCharacterIndex = 0;
        correctScore = 0;
        incorrectScore = 0;
        timeLeft = 0;
        clearInterval(timer);
        timerStarted = false;
        correctScoreDisplay.textContent = 'Correct: 0';
        incorrectScoreDisplay.textContent = 'Incorrect: 0';
        feedback.textContent = '';
        feedback.className = '';
    }

    backButton.addEventListener('click', navigateBack);
    languageButton.addEventListener('click', () => {
        navigationStack.push('character-options');
        console.log('Pushed character-options, stack:', navigationStack);
        selectedLanguage = languageSelect.value;
        showCharacterOptions();
        updateBackButtonVisibility();  
        teluguOptions.style.display = 'none';
        devanagariOptions.style.display = 'none';
        arabicOptions.style.display = 'none';
        hiraganaOptions.style.display = 'none';
        katakanaOptions.style.display = 'none';
        hangulOptions.style.display = 'none';
        bopomofoOptions.style.display = 'none';
        greekOptions.style.display = 'none';
        cyrillicOptions.style.display = 'none';
        document.getElementById('language-selection').style.display = 'none';
        document.getElementById('extra-buttons').style.display = 'none'; 
        characterOptions.style.display = 'block';

        if (selectedLanguage === 'telugu') {
            teluguOptions.style.display = 'block';
        } else if (selectedLanguage === 'devanagari') {
            devanagariOptions.style.display = 'block';
        } else if (selectedLanguage === 'arabic') {
            arabicOptions.style.display = 'block';
        } else if (selectedLanguage === 'hiragana') {
            hiraganaOptions.style.display = 'block';
        } else if (selectedLanguage === 'katakana') {
            katakanaOptions.style.display = 'block';
        } else if (selectedLanguage === 'hangul') {
            hangulOptions.style.display = 'block';
        } else if (selectedLanguage === 'bopomofo') {
            bopomofoOptions.style.display = 'block';
        } else if (selectedLanguage === 'greek') {
            greekOptions.style.display = 'block';
        } else if (selectedLanguage === 'cyrillic') {
            cyrillicOptions.style.display = 'block';
        }
        

        document.getElementById('language-selection').style.display = 'none';
        characterOptions.style.display = 'block';
        backButton.style.display = 'block'; // Add this line
    });
    startButton.addEventListener('click', () => {
        navigationStack.push('practice');
        resetPracticeArea();
        selectedLanguage = languageSelect.value;
        showPracticeArea();
        updateBackButtonVisibility();
        characters = [];
        let selectedConsonants = [];
    
        if (selectedLanguage === 'telugu') {
            if (teluguVowelsCheckbox.checked) {
                characters = characters.concat(teluguVowels);
            }
            if (teluguConsonantsCheckbox.checked) {
                selectedConsonants = selectedConsonants.concat(teluguConsonants);
                characters = characters.concat(teluguConsonants);
            }
            if (teluguStressedConsonantsCheckbox.checked) {
                selectedConsonants = selectedConsonants.concat(teluguStressedConsonants);
                characters = characters.concat(teluguStressedConsonants);
            }
            if (teluguCombinationsCheckbox.checked && selectedConsonants.length > 0) {
                characters = characters.concat(generateIndicCombinations(selectedConsonants, teluguDiacriticVowels));
            }

        } else if (selectedLanguage === 'devanagari') {
            if (devanagariVowelsCheckbox.checked) {
                characters = characters.concat(devanagariVowels);
            }
            if (devanagariConsonantsCheckbox.checked) {
                selectedConsonants = selectedConsonants.concat(devanagariConsonants);
                characters = characters.concat(devanagariConsonants);
            }
            if (devanagariStressedConsonantsCheckbox.checked) {
                selectedConsonants = selectedConsonants.concat(devanagariStressedConsonants);
                characters = characters.concat(devanagariStressedConsonants);
            }
            if (devanagariCombinationsCheckbox.checked && selectedConsonants.length > 0) {
                characters = characters.concat(generateIndicCombinations(selectedConsonants, devanagariDiacriticVowels));
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
        } else if (selectedLanguage === 'hangul') {
            if (hangulVowelsCheckbox.checked) {
                characters = characters.concat(hangulVowels);
            }
            if (hangulConsonantsCheckbox.checked) {
                selectedConsonants = selectedConsonants.concat(hangulConsonants);
                characters = characters.concat(hangulConsonants);
            }
            if (hangulCombinationsCheckbox.checked && selectedConsonants.length > 0) {
                characters = characters.concat(generateHangulCombinations(hangulConsonants, hangulVowels));
            }
        } else if (selectedLanguage === 'bopomofo') {
            if (bopomofoVowelsCheckbox.checked) {
                characters = characters.concat(bopomofoVowels);
            }
            if (bopomofoConsonantsCheckbox.checked) {
                selectedConsonants = selectedConsonants.concat(bopomofoConsonants);
                characters = characters.concat(bopomofoConsonants);
            }
            if (bopomofoCombinationsCheckbox.checked && selectedConsonants.length > 0) {
                characters = characters.concat(bopomofoCombinations);
            }
        } else if (selectedLanguage === 'greek') {
            if (greekLowercaseCheckbox.checked) {
                characters = characters.concat(greekLowercase);
            }
            if (greekUppercaseCheckbox.checked) {
                characters = characters.concat(greekUppercase);
            }
            
        } else if (selectedLanguage === 'cyrillic') {
            if (cyrillicLowercaseCheckbox.checked) {
                characters = characters.concat(cyrillicLowercase);
            }
            if (cyrillicUppercaseCheckbox.checked) {
                characters = characters.concat(cyrillicUppercase);
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
        characterOptions.style.display = 'none';
        characterPracticeArea.style.display = 'block';
        updateBackButtonVisibility(); 
        displayCharacter();
    });
    submitAnswer.addEventListener('click', checkAnswer);
    inputAnswer.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });

    navigationStack = ['initial'];
    updateBackButtonVisibility();
});






function generateHangulCombinations(consonants, vowels) {
    const combinations = [];
    consonants.forEach(consonant => {
        vowels.forEach(vowel => {
            const syllable = createHangulSyllable(consonant.char, vowel.char);
            const romanizations = combineRoman(consonant.roman, vowel.roman);
            combinations.push({ char: syllable, roman: romanizations });
        });
    });
    return combinations;
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createHangulSyllable(consonant, vowel) {
    const initialConsonantCode = consonant.charCodeAt(0) - 0x1100;
    const medialVowelCode = vowel.charCodeAt(0) - 0x1161;
    const syllableCode = 0xAC00 + (initialConsonantCode * 588) + (medialVowelCode * 28);
    return String.fromCharCode(syllableCode);
}
function combineRoman(consonantRoman, vowelRoman) {
    const combined = [];
    consonantRoman.forEach(c => {
        vowelRoman.forEach(v => {
            combined.push(c + v);
        });
    });
    return combined;
}

function generateIndicCombinations(consonants, vowels) {
    const combinations = [];
    consonants.forEach(consonant => {
        const baseRoman = consonant.roman[0].slice(0, -1); // Remove the "a" at the end of the first romanization
        vowels.forEach(vowel => {
            // Only combine consonants with dependent vowels
            combinations.push({
                char: consonant.char + vowel.char,
                roman: consonant.roman.map(roman => roman.slice(0, -1) + vowel.roman[0])            
            });
        });
    });
    return combinations;
}


