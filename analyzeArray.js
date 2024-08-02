function analyzeArray(array) {
    const sort = () => {
        let sorted = [...array].sort();
        return sorted;
    }
    return { 
        average: (array.reduce((prev, next) => prev + next, total = 0,) / 2),
        min: sort(array)[0],
        max: sort(array)[array.length - 1],
        length: array.length
    };
};

console.log(analyzeArray([4,2,6,7]));

module.exports = { analyzeArray };