const CHARACTERS = {
    telugu: {
        vowels: [
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
        ],
        consonants: [
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
        ],
        stressedConsonants: [
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
        ],
        diacriticVowels: [
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
        ]
    },
    devanagari: {
        vowels: [
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
        ],
        consonants: [
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
        ],
        stressedConsonants: [
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
        ],
        diacriticVowels: [
            { char: '', roman: ['a'] },
            { char: 'ा', roman: ['aa', 'ā'] },
            { char: 'ि', roman: ['i'] },
            { char: 'ी', roman: ['ii', 'ī'] },
            { char: 'ु', roman: ['u'] },
            { char: 'ू', roman: ['uu', 'ū'] },
            { char: 'े', roman: ['e'] },
            { char: 'ै', roman: ['ai'] },
            { char: 'ो', roman: ['o'] },
            { char: 'ौ', roman: ['au'] }
        ]
    },
    arabic: {
        consonants: [
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
            { char: 'ع', roman: ["'"] },
            { char: 'غ', roman: ['gh'] },
            { char: 'ف', roman: ['f'] },
            { char: 'ق', roman: ['q'] },
            { char: 'ك', roman: ['k'] },
            { char: 'ل', roman: ['l'] },
            { char: 'م', roman: ['m'] },
            { char: 'ن', roman: ['n'] },
            { char: 'ه', roman: ['h'] },
            { char: 'ء', roman: ["'"] }
        ]
    },
    hiragana: {
        vowels: [
            { char: 'あ', roman: ['a'] },
            { char: 'い', roman: ['i'] },
            { char: 'う', roman: ['u'] },
            { char: 'え', roman: ['e'] },
            { char: 'お', roman: ['o'] }
        ],
        consonants: [
            { char: 'か', roman: ['ka'] },
            { char: 'き', roman: ['ki'] },
            { char: 'く', roman: ['ku'] },
            { char: 'け', roman: ['ke'] },
            { char: 'こ', roman: ['ko'] },
            { char: 'さ', roman: ['sa'] },
            { char: 'し', roman: ['shi'] },
            { char: 'す', roman: ['su'] },
            { char: 'せ', roman: ['se'] },
            { char: 'そ', roman: ['so'] },
            { char: 'た', roman: ['ta'] },
            { char: 'ち', roman: ['chi'] },
            { char: 'つ', roman: ['tsu'] },
            { char: 'て', roman: ['te'] },
            { char: 'と', roman: ['to'] },
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
        ],
        combinations: [
            { char: 'きゃ', roman: ['kya'] },
            { char: 'きゅ', roman: ['kyu'] },
            { char: 'きょ', roman: ['kyo'] },
            { char: 'しゃ', roman: ['sha'] },
            { char: 'しゅ', roman: ['shu'] },
            { char: 'しょ', roman: ['sho'] },
            { char: 'ちゃ', roman: ['cha'] },
            { char: 'ちゅ', roman: ['chu'] },
            { char: 'ちょ', roman: ['cho'] },
            { char: 'にゃ', roman: ['nya'] },
            { char: 'にゅ', roman: ['nyu'] },
            { char: 'にょ', roman: ['nyo'] },
            { char: 'ひゃ', roman: ['hya'] },
            { char: 'ひゅ', roman: ['hyu'] },
            { char: 'ひょ', roman: ['hyo'] },
            { char: 'みゃ', roman: ['mya'] },
            { char: 'みゅ', roman: ['myu'] },
            { char: 'みょ', roman: ['myo'] },
            { char: 'りゃ', roman: ['rya'] },
            { char: 'りゅ', roman: ['ryu'] },
            { char: 'りょ', roman: ['ryo'] }
        ]
    },
    katakana: {
        vowels: [
            { char: 'ア', roman: ['a'] },
            { char: 'イ', roman: ['i'] },
            { char: 'ウ', roman: ['u'] },
            { char: 'エ', roman: ['e'] },
            { char: 'オ', roman: ['o'] }
        ],
        consonants: [
            { char: 'カ', roman: ['ka'] },
            { char: 'キ', roman: ['ki'] },
            { char: 'ク', roman: ['ku'] },
            { char: 'ケ', roman: ['ke'] },
            { char: 'コ', roman: ['ko'] },
            { char: 'サ', roman: ['sa'] },
            { char: 'シ', roman: ['shi'] },
            { char: 'ス', roman: ['su'] },
            { char: 'セ', roman: ['se'] },
            { char: 'ソ', roman: ['so'] },
            { char: 'タ', roman: ['ta'] },
            { char: 'チ', roman: ['chi'] },
            { char: 'ツ', roman: ['tsu'] },
            { char: 'テ', roman: ['te'] },
            { char: 'ト', roman: ['to'] },
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
        ],
        combinations: [
            { char: 'キャ', roman: ['kya'] },
            { char: 'キュ', roman: ['kyu'] },
            { char: 'キョ', roman: ['kyo'] },
            { char: 'シャ', roman: ['sha'] },
            { char: 'シュ', roman: ['shu'] },
            { char: 'ショ', roman: ['sho'] },
            { char: 'チャ', roman: ['cha'] },
            { char: 'チュ', roman: ['chu'] },
            { char: 'チョ', roman: ['cho'] },
            { char: 'ニャ', roman: ['nya'] },
            { char: 'ニュ', roman: ['nyu'] },
            { char: 'ニョ', roman: ['nyo'] },
            { char: 'ヒャ', roman: ['hya'] },
            { char: 'ヒュ', roman: ['hyu'] },
            { char: 'ヒョ', roman: ['hyo'] },
            { char: 'ミャ', roman: ['mya'] },
            { char: 'ミュ', roman: ['myu'] },
            { char: 'ミョ', roman: ['myo'] },
            { char: 'リャ', roman: ['rya'] },
            { char: 'リュ', roman: ['ryu'] },
            { char: 'リョ', roman: ['ryo'] }
        ]
    },
    hangul: {
        vowels: [
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
        ],
        consonants: [
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
        ]
    },
    bopomofo: {
        vowels: [
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
        ],
        consonants: [
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
        ],
        combinations: [
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
        ]
    },
    greek: {
        uppercase: [
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
        ],
        lowercase: [
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
        ]
    },
    cyrillic: {
        uppercase: [
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
        ],
        lowercase: [
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
        ]
    }
};

let characters = [];
let selectedCharacters = [];
let characterScores = {};
let currentCharacterIndex = 0;
let correctScore = 0;
let incorrectScore = 0;
let timeLeft;
let timer;
let timerStarted = false;
let selectedLanguage = 'hiragana';
let previousCharacter = null; // Add this line at the beginning of the script to keep track of the previous character// Function to shuffle the characters array
let navigationStack = [];
const elements = {};

const correctSounds = document.querySelectorAll('#correct-sound-container audio');
const incorrectSounds = document.querySelectorAll('#incorrect-sound-container audio');
const muteButton = document.getElementById('mute-button');
let currentCorrectSound = 0;
let currentIncorrectSound = 0;
let isMuted = false;

muteButton.addEventListener('click', function() {
    isMuted = !isMuted;
    updateMuteButton();
    setAudioMuted(isMuted);
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize DOM elements
    initializeElements();

    // Event listeners
    elements.timeSlider.addEventListener('input', updateTimeValue);
    elements.backButton.addEventListener('click', navigateBack);
    elements.languageButton.addEventListener('click', selectLanguage);
    elements.startButton.addEventListener('click', startPractice);
    elements.submitAnswer.addEventListener('click', checkAnswer);
    elements.inputAnswer.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') checkAnswer();
    });

    // Initialize app
    updateBackButtonVisibility();
});
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});
// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
function initializeElements() {
    const ids = [
        'character-display', 'input-answer', 'submit-answer', 'feedback',
        'correct-score', 'incorrect-score', 'timer', 'time-slider', 'time-value',
        'start-button', 'back-button', 'character-practice-area', 'language-selection',
        'extra-buttons', 'character-options', 'language-select', 'language-button'
    ];
    ids.forEach(id => {
        elements[toCamelCase(id)] = document.getElementById(id);
        if (id === 'back-button') {
            console.log('Back button element:', elements[toCamelCase(id)]);
        }
    });
}
function toCamelCase(str) {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}
function updateTimeValue() {
    elements.timeValue.textContent = elements.timeSlider.value === "0" ? "Unlimited" : elements.timeSlider.value;
}
function navigateBack() {
    console.log('Navigating back. Current stack:', navigationStack);
    if (navigationStack.length > 1) {
        let currentPage = navigationStack.pop();
        let previousPage = navigationStack[navigationStack.length - 1];
        
        console.log('Going back to:', previousPage);
        showPage(previousPage);
        updateBackButtonVisibility();
    } else {
        console.log('Cannot go back, at initial page');
    }
}
function showPage(page) {
    console.log('Showing page:', page);
    switch(page) {
        case 'initial':
            showLanguageSelection();
            break;
        case 'character-options':
            showCharacterOptions();
            break;
        case 'practice':
            showPracticeArea();
            break;
        default:
            console.error('Unknown page:', page);
    }
    updateBackButtonVisibility();
}
function updateBackButtonVisibility() {
    console.log('Updating back button visibility. Navigation stack:', navigationStack);
    if (navigationStack.length > 1) {
        console.log('Showing back button');
        elements.backButton.style.display = 'inline-block';
    } else {
        console.log('Hiding back button');
        elements.backButton.style.display = 'none';
    }
}
function selectLanguage() {
    navigationStack = ['initial', 'character-options'];
    selectedLanguage = elements.languageSelect.value;
    showCharacterOptions();
    updateBackButtonVisibility();
}
function startPractice() {
    console.log('Starting practice...');
    if (generateCharacters()) {
        console.log('Characters generated successfully. Total characters:', characters.length);
        navigationStack.push('practice');
        resetPracticeArea();
        showPracticeArea();
        setTimer();
        displayCharacter();
        updateBackButtonVisibility();
    } else {
        console.log('Failed to generate characters');
    }
}
function generateCharacters() {
    selectedCharacters = [];
    const options = CHARACTERS[selectedLanguage];
    console.log('Selected language:', selectedLanguage);
    console.log('Available options:', options);
    
    const checkboxes = document.querySelectorAll('#options-container input[type="checkbox"]:checked');
    console.log('Checked checkboxes:', checkboxes);
    
    checkboxes.forEach(checkbox => {
        const type = checkbox.id.split('-')[1];
        console.log('Processing type:', type);
        if (options[type]) {
            selectedCharacters = selectedCharacters.concat(options[type]);
        }
    });

    console.log('Generated characters:', selectedCharacters);

    if (selectedCharacters.length === 0) {
        alert('Please select at least one group to practice.');
        return false;
    }
    characters = [...selectedCharacters]; // Create a copy of selectedCharacters
    shuffleArray(characters);
    return true;
}
function setTimer() {
    let time = parseInt(elements.timeSlider.value, 10);
    if (time === 0) {
        timeLeft = Infinity;
        elements.timer.textContent = 'Time Left: Unlimited';
    } else {
        timeLeft = time;
        elements.timer.textContent = `Time Left: ${timeLeft}`;
    }
}
function displayCharacter() {
    currentCharacterIndex = selectNextCharacter();
    elements.characterDisplay.textContent = characters[currentCharacterIndex].char;
}
function checkAnswer() {
    if (!timerStarted) startTimer();
    
    let userAnswer = elements.inputAnswer.value.trim().toLowerCase();
    let correctRomanizations = characters[currentCharacterIndex].roman.map(r => r.toLowerCase());

    const correct = correctRomanizations.includes(userAnswer);
    updateScore(correct);
    updateCharacterScore(characters[currentCharacterIndex].char, correct);
    showFeedback(correct);

    playSound(correct); //play sound

    elements.inputAnswer.value = '';
    currentCharacterIndex = (currentCharacterIndex + 1) % characters.length;
    displayCharacter();
}
function startTimer() {
    timerStarted = true;
    timer = setInterval(() => {
        timeLeft--;
        elements.timer.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft === 0) {
            clearInterval(timer);
            alert(`Time's up! Your score is ${correctScore}.`);
        }
    }, 1000);
}
function playSound(correct) {
    if (isMuted) return;
    const sounds = correct ? correctSounds : incorrectSounds;
    const currentIndex = correct ? currentCorrectSound : currentIncorrectSound;

    sounds[currentIndex].play();

    // Move to the next sound, loop back to 0 if at the end
    if (correct) {
        currentCorrectSound = (currentCorrectSound + 1) % correctSounds.length;
    } else {
        currentIncorrectSound = (currentIncorrectSound + 1) % incorrectSounds.length;
    }
}
function updateMuteButton() {
    muteButton.textContent = isMuted ? '🔇' : '🔊';
}
function setAudioMuted(muted) {
    correctSounds.forEach(sound => sound.muted = muted);
    incorrectSounds.forEach(sound => sound.muted = muted);
}
function updateScore(correct) {
    if (correct) {
        correctScore++;
        elements.correctScore.textContent = `Correct: ${correctScore}`;
    } else {
        incorrectScore++;
        elements.incorrectScore.textContent = `Incorrect: ${incorrectScore}`;
    }
}
function showFeedback(correct) {
    if (correct) {
        elements.feedback.textContent = 'Correct!';
        elements.feedback.className = 'correct';
    } else {
        const correctAnswers = characters[currentCharacterIndex].roman.join(', ');
        elements.feedback.innerHTML = `Incorrect! The correct answer is ${correctAnswers} (${characters[currentCharacterIndex].char}). Try to remember this for next time.`;
        elements.feedback.className = 'incorrect';
    }
}
function resetPracticeArea() {
    currentCharacterIndex = 0;
    correctScore = 0;
    incorrectScore = 0;
    timeLeft = 0;
    clearInterval(timer);
    timerStarted = false;
    elements.correctScore.textContent = 'Correct: 0';
    elements.incorrectScore.textContent = 'Incorrect: 0';
    elements.feedback.textContent = '';
    elements.feedback.className = '';
}
function showLanguageSelection() {
    elements.languageSelection.style.display = 'block';
    elements.extraButtons.style.display = 'block';
    elements.characterOptions.style.display = 'none';
    elements.characterPracticeArea.style.display = 'none';
    navigationStack = ['initial'];
    updateBackButtonVisibility();
}
function showCharacterOptions() {
    elements.languageSelection.style.display = 'none';
    elements.extraButtons.style.display = 'none';
    elements.characterOptions.style.display = 'block';
    elements.characterPracticeArea.style.display = 'none';

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear previous options

    const languageOptions = CHARACTERS[selectedLanguage];
    for (const [key, value] of Object.entries(languageOptions)) {
        const checkboxId = `${selectedLanguage}-${key}`;
        
        const checkboxWrapper = document.createElement('div');
        checkboxWrapper.className = 'checkbox-wrapper';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = checkboxId;
        checkbox.checked = true;

        const label = document.createElement('label');
        label.htmlFor = checkboxId;
        label.textContent = key.charAt(0).toUpperCase() + key.slice(1);

        checkboxWrapper.appendChild(checkbox);
        checkboxWrapper.appendChild(label);
        
        optionsContainer.appendChild(checkboxWrapper);
        console.log(`Created checkbox for ${selectedLanguage}-${key}`);
    }
    console.log('Options created for:', selectedLanguage); // For debugging
    updateBackButtonVisibility();
}
function showPracticeArea() {
    elements.languageSelection.style.display = 'none';
    elements.extraButtons.style.display = 'none';
    elements.characterOptions.style.display = 'none';
    elements.characterPracticeArea.style.display = 'block';
}
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
function updateCharacterScore(character, correct) {
    if (!characterScores[character]) {
        characterScores[character] = { correct: 0, total: 0 };
    }
    characterScores[character].total++;
    if (correct) {
        characterScores[character].correct++;
    }
}
function getCharacterDifficulty(character) {
    if (!characterScores[character]) return 1;
    return 1 - (characterScores[character].correct / characterScores[character].total);
}
function selectNextCharacter() {
    let totalWeight = characters.reduce((sum, char) => sum + getCharacterDifficulty(char.char), 0);
    let randomWeight = Math.random() * totalWeight;
    let weightSum = 0;
    
    for (let i = 0; i < characters.length; i++) {
        weightSum += getCharacterDifficulty(characters[i].char);
        if (weightSum > randomWeight) {
            return i;
        }
    }
    return characters.length - 1;
}


