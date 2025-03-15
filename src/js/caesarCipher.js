export function caesarCipher(str = '', shiftFactor = 0) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

    const userInput = str.split('')
    let result = ''

    userInput.forEach(userLetter => {
        const isUpperCase = userLetter === userLetter.toUpperCase()
        const letterIndex = alphabet.findIndex(letter => letter === userLetter.toLowerCase())
        
        if (letterIndex === -1) {
            result += userLetter
            return
        }

        let newIndex = (letterIndex + shiftFactor) % alphabet.length
        if (newIndex < 0) newIndex += alphabet.length
        
        const newLetter = alphabet[newIndex]
        result += isUpperCase ? newLetter.toUpperCase() : newLetter
    })

    return result
}