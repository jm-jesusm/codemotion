/**
 * Transcribes DNA chains to RNA chains
 * @param dna
 * @returns rna
 */
function transcribe(dna: string): string {
    const dnaArray = dna.toUpperCase().split('');
    const rnaArray = dnaArray.map(char => {
        switch (char) {
            case 'A': return 'U'
            case 'C': return 'G'
            case 'T': return 'A'
            case 'G': return 'C'
            default: return ''
        }
    })
    const rna = rnaArray.join('')
    return rna
} 
