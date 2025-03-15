export function analyzeArray(arr = []) {

    const result = {
        average: null,
        min: null,
        max: null,
        length: null
    }

    if (arr.length === 0) return result;
    
    const sortedArray = arr.sort((a, b) => a - b)
    
    result.min = sortedArray[0];
    result.max = sortedArray[sortedArray.length - 1];
    result.length = sortedArray.length;
    result.average = sortedArray.reduce((sum, num) => sum + num, 0) / sortedArray.length;

    return result
}