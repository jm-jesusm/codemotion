/**
 * Translates from morse code to human code
 * @param morseCode 
 * @returns human code
 */
function translate(morseCode: string) {
    const CHAR_TO_MORSE = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '0': '-----','1': '.----','2': '..---','3': '...--',
        '4': '....-', '5': '.....','6': '-....','7': '--...','8': '---..','9': '----.',
        '.': '.-.-.-',',': '--..--','?': '..--..','!': '-.-.--','/': '-..-.','(': '-.--.',
        ')': '-.--.-','&': '.-...',':': '---...',';': '-.-.-.','=': '-...-','-': '-....-',
        '_': '..--.-','+': '.-.-.','$': '...-..-','@': '.--.-.', ' ': '/', '¡': '--...-'
    };
    
    const morseWords = morseCode.split(' / ');

    const text = morseWords.map(word => {
        const morseChars = word.split(' ');
        const characters = morseChars.map(morseChar => {
            return Object.keys(CHAR_TO_MORSE).find(key => CHAR_TO_MORSE[key] === morseChar);
        });

        return characters.join('');
    });

    return text.join(' ');
}
