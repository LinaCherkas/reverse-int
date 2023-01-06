module.exports = function reverse (n) {
    let result = ""
    n = n.toString()
    for (let i=n.length; i>=0; i--){
        result+=n.charAt(i);
    }
    return parseInt(result)
}
