export function isPrime(num) {
    if (num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

export function gcd(a, b) {
    while(b) {
        [a, b] = [b, a % b];
    }
    return a;
}

export function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

export function flattenObject(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, k) => {
        const pre = prefix.length ? prefix + '.' : '';
        if(typeof obj[k] === 'object' && obj[k] !== null) {
            Object.assign(acc, flattenObject(obj[k], pre + k));
        } else {
            acc[pre + k] = obj[k];
        }
        return acc;
    }, {});
}

export function mostCommon(arr) {
    const freq = {};
    let max = 0, result = null;
    for(const item of arr) {
        freq[item] = (freq[item] || 0) + 1;
        if(freq[item] > max) {
            max = freq[item];
            result = item;
        }
    }
    return result;
}

export function transpose(matrix) {
    return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

export function camelToSnake(str) {
    return str.replace(/([A-Z])/g, letter => `_${letter.toLowerCase()}`);
}

export function swapCase(str) {
    return str.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
}

export function nestedSum(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc + nestedSum(val) : acc + val, 0);
}

export function digitSum(num) {
    return Math.abs(num).toString().split('').reduce((a,b) => a + +b, 0);
}