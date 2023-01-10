function func(s, a, b) {
    if (!s) return -1;
    return Math.max(s.lastIndexOf(a), s.lastIndexOf(b));
}
console.log(func("abcccdeef", 'h', 'g'))