function reverseString(string) {
    let string1 = string.toString();
    return string1.split('').reverse().join('');
}

module.exports = { reverseString }