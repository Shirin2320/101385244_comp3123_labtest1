// lowerCaseWords.js
function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            const result = mixedArray
                .filter(item => typeof item === 'string')
                .map(word => word.toLowerCase());
            resolve(result);
        } catch (error) {
            reject(`Error: ${error.message}`);
        }
    });
}

// Test input
const mixedArray = ['PIZZA', 10, true, 25, false, 'wings'];
lowerCaseWords(mixedArray).then(console.log).catch(console.error);
