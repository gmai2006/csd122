function multiplier(factor) {
    return number => number * factor;
}

function multiplier2(factor) {
    return function(number) {
        return number * factor;
    }
}