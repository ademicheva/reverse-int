module.exports = function reverse(n) {
    if (typeof n !== 'number') {
        return;
    }
    if (n < 0) {
        n = -n;
    }
    let num = String(n);
    return num.split("").reverse().join("");

}