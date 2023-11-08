export function randomString(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++)
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    return result;
}

export function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

export function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s+/g, '');
    return str === str.split('').reverse().join('');
}

export function uniqueElements(arr) {
    return [...new Set(arr)];
}

export function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}

export function fibonacci(n) {
    let a = 0, b = 1;
    for(let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
}

export function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

export function mergeObjects(...objs) {
    return Object.assign({}, ...objs);
}

export function reverseWords(sentence) {
    return sentence.split(' ').map(w => w.split('').reverse().join('')).join(' ');
}

export function chunkArray(arr, size) {
    const result = [];
    for(let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}