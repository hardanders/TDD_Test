function caesarCipher(string, key = 5) 
{
    // Ensure provided chars are string, and split into an array
    let string1 = string.toString().split('');
    // Initialize retrun string
    let encrypted = "";

    // forEach to check char values
    string1.forEach(char => 
    {
        // Assign char code to variable
        let charCode = char.charCodeAt();
        let newCode;
        // Switch case to catch Latin chars: (65-85 (A - U) || 86-91 (V - Z)) || (97-117 (a - u) || 118 - 123 (v - z))
        switch (true)  {
            // Lowercase chars
            case charCode > 64 && charCode < 86:
            case charCode > 96 && charCode < 118:
                newCode = charCode + key
                encrypted += String.fromCharCode(newCode);
                break;
            // Uppercase chars
            case charCode > 85 && charCode < 92:
            case charCode > 117 && charCode < 124:
                newCode = charCode - (26 - key);
                encrypted += String.fromCharCode(newCode);
                break;
            // All others
            default:
                encrypted += String.fromCharCode(charCode);
                break;
        }
    })
    // Return encrypted string
    return encrypted;
}

module.exports = { caesarCipher };