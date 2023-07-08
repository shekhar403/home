let checkPalindrome = async (str) => {
    if (str.split("").reverse().join("") === str) {
        return "Palindrome";
    }
    else {
        return "Not a Palindrome";
    }
}

checkPalindrome("heh").then((output) => {
    console.log(output);
})