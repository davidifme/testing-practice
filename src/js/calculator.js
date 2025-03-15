export const calculator = (function() {

    function add(a, b) {
        return a + b
    }

    function subtract(a, b) {
        return a - b
    }

    function multiply(a, b) {
        return a * b
    }

    function divide(a, b) {
        if (a === 0 || b === 0) {
            return 0
        }
        
        return a / b
    }

    return {
        add,
        subtract,
        multiply,
        divide
    }
})();