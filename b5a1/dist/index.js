
function formatString(s, toUpper) {
    if (toUpper === void 0) { toUpper = true; }
    //   return toUpper ? s.toUpperCase() : s.toLowerCase();
    if (toUpper) {
        return s.toUpperCase();
    }
    else {
        return s.toLowerCase();
    }
}
console.log(formatString("Hello World"));
