export function greet(name) {
    console.log(`Hello from ${name}!`);
}

export function gcd_1(a, b) {
  return b === 0 ? a : gcd_1(b, a % b);
}

export function lcm_2(a, b) {
  return (a * b) / gcd_1(a, b);
}

export function titleCase_3(str) {
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

export function compactFalseNil_4(arr) {
  return arr.filter(Boolean);
}

export function rotateLeft_5(arr, n) {
  const len = arr.length;
  n = n % len;
  return arr.slice(n).concat(arr.slice(0, n));
}

export function rotateRight_6(arr, n) {
  const len = arr.length;
  n = n % len;
  return arr.slice(-n).concat(arr.slice(0, len - n));
}

export function fibonacciSequence_7(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  const seq = [0, 1];
  while (seq.length < n) {
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  }
  return seq;
}

export function alphabeticOnly_8(str) {
  return /^[a-zA-Z]+$/.test(str);
}

export function mode_9(arr) {
  const freq = {};
  let maxFreq = 0;
  let mode = null;
  for (const item of arr) {
    freq[item] = (freq[item] || 0) + 1;
    if (freq[item] > maxFreq) {
      maxFreq = freq[item];
      mode = item;
    }
  }
  return mode;
}

export function decimalToRoman_10(num) {
  const romanMap = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let result = '';
  for (const [val, sym] of romanMap) {
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }
  return result;
}

export function validJSON_11(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

export function countLines_12(str) {
  return str.split('\n').length;
}

export function extractDomain_13(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

export function lastNElements_14(arr, n) {
  return arr.slice(-n);
}

export function containsSpecialChars_15(str) {
  return /[^a-zA-Z0-9]/.test(str);
}

export function sumDigits_16(num) {
  return num.toString().split('').reduce((acc, d) => acc + Number(d), 0);
}

export function armstrongNumber_17(num) {
  const digits = num.toString().split('').map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);
  return sum === num;
}

export function uniquePreserveOrder_18(arr) {
  const seen = new Set();
  return arr.filter(item => {
    if (seen.has(item)) return false;
    seen.add(item);
    return true;
  });
}

export function longestWord_19(str) {
  return str.split(/\s+/).reduce((a, b) => (b.length > a.length ? b : a), '');
}

export function randomIntArray_20(size, min, max) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

export function countCharInsensitive_21(str, char) {
  const lowerChar = char.toLowerCase();
  return [...str.toLowerCase()].filter(c => c === lowerChar).length;
}

export function nthChar_22(str, n) {
  return str.charAt(n);
}

export function removePunctuation_23(str) {
  return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

export function substringsOfLengthN_24(str, n) {
  if (n > str.length) return [];
  const subs = [];
  for (let i = 0; i <= str.length - n; i++) {
    subs.push(str.substr(i, n));
  }
  return subs;
}

export function arrayToCSV_25(arr) {
  return arr.join(',');
}

export function oneCharDiff_26(str1, str2) {
  if (str1.length !== str2.length) return false;
  let diffCount = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) diffCount++;
    if (diffCount > 1) return false;
  }
  return diffCount === 1;
}

export function reverseSubarray_27(arr, startIdx, endIdx) {
  const before = arr.slice(0, startIdx);
  const middle = arr.slice(startIdx, endIdx + 1).reverse();
  const after = arr.slice(endIdx + 1);
  return before.concat(middle, after);
}

export function randomHexColor_28() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
}

export function normalizeSpaces_29(str) {
  return str.replace(/\s+/g, ' ').trim();
}

export function countSentences_30(str) {
  return (str.match(/[^.!?]+[.!?]/g) || []).length;
}

export function powerRecursive_31(base, exp) {
  if (exp === 0) return 1;
  return base * powerRecursive_31(base, exp - 1);
}

export function allLowercase_32(str) {
  return str === str.toLowerCase();
}

export function arrayDifference_33(arrA, arrB) {
  const setB = new Set(arrB);
  return arrA.filter(x => !setB.has(x));
}

export function countWordsStartUpper_34(str) {
  return (str.match(/\b[A-Z][a-z]*/g) || []).length;
}

export function factorial_35(n) {
  if (n === 0 || n === 1) return 1;
  let fact = 1;
  for (let i = 2; i <= n; i++) fact *= i;
  return fact;
}

export function sortedAscending_36(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

export function wordsExcludingStop_37(str, stopWords = ['a', 'an', 'the', 'and', 'or', 'but']) {
  return str.toLowerCase().split(/\s+/).filter(w => !stopWords.includes(w));
}

export function startsWithNumber_38(str) {
  return /^\d/.test(str);
}

export function uniqueIgnoreCase_39(arr) {
  const seen = new Set();
  return arr.filter(item => {
    const lower = item.toLowerCase();
    if (seen.has(lower)) return false;
    seen.add(lower);
    return true;
  });
}

export function smallestGreaterThanN_40(arr, n) {
  return arr.filter(x => x > n).reduce((min, val) => val < min ? val : min, Infinity);
}

export function randomBooleans_41(n) {
  return Array.from({ length: n }, () => Math.random() < 0.5);
}

export function arraysEqualUnordered_42(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const count = {};
  for (const x of arr1) count[x] = (count[x] || 0) + 1;
  for (const x of arr2) {
    if (!count[x]) return false;
    count[x]--;
  }
  return true;
}

export function intToBinaryArray_43(num) {
  return num.toString(2).split('').map(Number);
}

export function removeLastCharIf_44(str, char) {
  return str.endsWith(char) ? str.slice(0, -1) : str;
}

export function removeConsecutiveDuplicates_45(str) {
  return str.replace(/(.)\1+/g, '$1');
}

export function average_46(arr) {
  if (arr.length === 0) return null;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function balancedParentheses_47(str) {
  let count = 0;
  for (const c of str) {
    if (c === '(') count++;
    else if (c === ')') {
      count--;
      if (count < 0) return false;
    }
  }
  return count === 0;
}

export function squaresArray_48(arr) {
  return arr.map(x => x ** 2);
}

export function capitalizeSentences_49(str) {
  return str.replace(/(?:^|[.!?]\s+)([a-z])/g, (m, c) => c.toUpperCase());
}

export function randomUUID_50() {
  // Simple UUID v4 generator
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function isPrime_51(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

export function flattenArray_52(arr) {
  return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray_52(toFlatten) : toFlatten), []);
}

export function capitalizeWords_53(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

export function isPalindrome_54(str) {
  const s = str.toLowerCase().replace(/[\W_]/g, '');
  return s === s.split('').reverse().join('');
}

export function mergeObjects_55(...objs) {
  return Object.assign({}, ...objs);
}

export function arrayChunk_56(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export function debounce_57(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

export function throttle_58(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

export function deepClone_59(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function randomElement_60(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function factorialRecursive_61(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive_61(n - 1);
}

export function isAnagram_62(str1, str2) {
  const sorted1 = str1.toLowerCase().split('').sort().join('');
  const sorted2 = str2.toLowerCase().split('').sort().join('');
  return sorted1 === sorted2;
}

export function fibonacciNth_63(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

export function randomInt_64(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function camelToSnake_65(str) {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

export function snakeToCamel_66(str) {
  return str.replace(/(_\w)/g, m => m[1].toUpperCase());
}

export function clamp_67(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

export function arraySum_68(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

export function objectKeysToLowerCase_69(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
}

export function uniqueChars_70(str) {
  return [...new Set(str)].join('');
}

export function allTrue_71(arr) {
  return arr.every(Boolean);
}

export function someTrue_72(arr) {
  return arr.some(Boolean);
}

export function reverseWords_73(str) {
  return str.split(' ').reverse().join(' ');
}

export function repeatString_74(str, times) {
  return str.repeat(times);
}

export function isEven_75(num) {
  return num % 2 === 0;
}

export function isOdd_76(num) {
  return num % 2 !== 0;
}

export function roundToDecimals_77(num, decimals) {
  const factor = 10 ** decimals;
  return Math.round(num * factor) / factor;
}

export function randomString_78(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

export function sumArray_79(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

export function multiplyArray_80(arr) {
  return arr.reduce((a, b) => a * b, 1);
}

export function maxInArray_81(arr) {
  return Math.max(...arr);
}

export function minInArray_82(arr) {
  return Math.min(...arr);
}

export function arrayIncludes_83(arr, val) {
  return arr.includes(val);
}

export function capitalizeFirstLetter_84(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncateString_85(str, length) {
  return str.length > length ? str.slice(0, length) + '...' : str;
}

export function padLeft_86(str, length, char = ' ') {
  return str.length >= length ? str : char.repeat(length - str.length) + str;
}

export function padRight_87(str, length, char = ' ') {
  return str.length >= length ? str : str + char.repeat(length - str.length);
}

export function factorialIterative_88(n) {
  let result = 1;
  for(let i=2; i<=n; i++) result *= i;
  return result;
}

export function toHex_89(num) {
  return num.toString(16);
}

export function fromHex_90(hexStr) {
  return parseInt(hexStr, 16);
}

export function arrayShuffle_91(arr) {
  const copy = [...arr];
  for(let i = copy.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function removeFalsy_92(arr) {
  return arr.filter(Boolean);
}

export function groupBy_93(arr, fn) {
  return arr.reduce((acc, item) => {
    const key = fn(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

export function intersection_94(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(x => set2.has(x));
}

export function difference_95(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(x => !set2.has(x));
}

export function zip_96(arr1, arr2) {
  const length = Math.min(arr1.length, arr2.length);
  const result = [];
  for(let i=0; i<length; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}

export function unzip_97(arr) {
  const res1 = [];
  const res2 = [];
  arr.forEach(([a,b]) => {
    res1.push(a);
    res2.push(b);
  });
  return [res1, res2];
}

export function chunkBy_98(arr, size) {
  const chunks = [];
  for(let i=0; i<arr.length; i+=size) {
    chunks.push(arr.slice(i, i+size));
  }
  return chunks;
}

export function flattenDepth_99(arr, depth = 1) {
  if(depth < 1) return arr.slice();
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenDepth_99(val, depth - 1) : val), []);
}

export function removeDuplicates_100(arr) {
  return [...new Set(arr)];
}

export function debounceImmediate_101(fn, wait) {
  let timeout;
  return function(...args) {
    const callNow = !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
    }, wait);
    if (callNow) fn.apply(this, args);
  };
}

export function isObject_102(obj) {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}

export function mergeDeep_103(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject_102(target) && isObject_102(source)) {
    for (const key in source) {
      if (isObject_102(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep_103(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep_103(target, ...sources);
}

export function toTitleCase_104(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function uniqueBy_105(arr, fn) {
  const seen = new Set();
  return arr.filter(item => {
    const key = fn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function objectToQueryString_106(obj) {
  return Object.entries(obj).map(([k,v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
}

export function queryStringToObject_107(qs) {
  return Object.fromEntries(new URLSearchParams(qs));
}

export function delay_108(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function flattenObject_109(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      Object.assign(acc, flattenObject_109(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
}

export function unflattenObject_110(data) {
  const result = {};
  for (const i in data) {
    const keys = i.split('.');
    keys.reduce((r, e, j) => {
      return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 === j ? data[i] : {}) : []);
    }, result);
  }
  return result;
}

export function isValidJSON_111(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

export function randomHexColor_112() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

export function rgbToHex_113(r, g, b) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

export function hexToRgb_114(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function capitalizeSentences_115(text) {
  return text.replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
}

export function arrayDifferenceBy_116(arr1, arr2, fn) {
  const s2 = new Set(arr2.map(fn));
  return arr1.filter(x => !s2.has(fn(x)));
}

export function arrayIntersectionBy_117(arr1, arr2, fn) {
  const s2 = new Set(arr2.map(fn));
  return arr1.filter(x => s2.has(fn(x)));
}

export function sleep_118(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function sumBy_119(arr, fn) {
  return arr.reduce((acc, val) => acc + fn(val), 0);
}

export function groupByKey_120(arr, key) {
  return arr.reduce((acc, obj) => {
    (acc[obj[key]] = acc[obj[key]] || []).push(obj);
    return acc;
  }, {});
}

export function pick_121(obj, keys) {
  return keys.reduce((acc, key) => {
    if (key in obj) acc[key] = obj[key];
    return acc;
  }, {});
}

export function omit_122(obj, keys) {
  return Object.keys(obj).reduce((acc, key) => {
    if (!keys.includes(key)) acc[key] = obj[key];
    return acc;
  }, {});
}

export function isEmpty_123(obj) {
  if (obj == null) return true;
  if (Array.isArray(obj)) return obj.length === 0;
  if (typeof obj === 'object') return Object.keys(obj).length === 0;
  return false;
}

export function clampArray_124(arr, min, max) {
  return arr.map(num => Math.min(Math.max(num, min), max));
}

export function padNumber_125(num, length) {
  return num.toString().padStart(length, '0');
}

export function xor_126(a, b) {
  return Boolean(a) !== Boolean(b);
}

export function mergeArrays_127(...arrays) {
  return [].concat(...arrays);
}

export function last_128(arr) {
  return arr[arr.length - 1];
}

export function initial_129(arr) {
  return arr.slice(0, -1);
}

export function tail_130(arr) {
  return arr.slice(1);
}

export function compact_131(arr) {
  return arr.filter(Boolean);
}

export function flattenOnce_132(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

export function isSorted_133(arr, compareFn = (a,b) => a-b) {
  for (let i=1; i<arr.length; i++) {
    if (compareFn(arr[i-1], arr[i]) > 0) return false;
  }
  return true;
}

export function shuffleArray_134(arr) {
  const array = arr.slice();
  for(let i = array.length -1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function zipObject_135(keys, values) {
  const obj = {};
  keys.forEach((key, i) => {
    obj[key] = values[i];
  });
  return obj;
}

export function omitBy_136(obj, predicate) {
  return Object.keys(obj).reduce((acc, key) => {
    if (!predicate(obj[key], key)) acc[key] = obj[key];
    return acc;
  }, {});
}

export function pickBy_137(obj, predicate) {
  return Object.keys(obj).reduce((acc, key) => {
    if (predicate(obj[key], key)) acc[key] = obj[key];
    return acc;
  }, {});
}

export function range_138(start, end, step = 1) {
  const arr = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) arr.push(i);
  } else {
    for (let i = start; i >= end; i += step) arr.push(i);
  }
  return arr;
}

export function isNumber_139(value) {
  return typeof value === 'number' && !isNaN(value);
}

export function factorialBigInt_140(n) {
  let result = 1n;
  for(let i = 1n; i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
}

export function isUpperCase_141(str) {
  return str === str.toUpperCase();
}

export function isLowerCase_142(str) {
  return str === str.toLowerCase();
}

export function arrayRotate_143(arr, count) {
  const len = arr.length;
  count = ((count % len) + len) % len;
  return arr.slice(count).concat(arr.slice(0, count));
}

export function mergeUnique_144(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}

export function keyBy_145(arr, fn) {
  return arr.reduce((acc, val) => {
    acc[fn(val)] = val;
    return acc;
  }, {});
}

export function delayAsync_146(fn, ms) {
  return (...args) => new Promise(resolve => setTimeout(() => resolve(fn(...args)), ms));
}

export function capitalize_147(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function binarySearch_148(arr, target, compareFn = (a,b) => a-b) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const cmp = compareFn(arr[mid], target);
    if (cmp === 0) return mid;
    if (cmp < 0) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

export function flattenAndSort_149(arr) {
  return arr.flat().sort((a,b) => a-b);
}

export function countOccurrences_150(arr, val) {
  return arr.reduce((count, v) => (v === val ? count + 1 : count), 0);
}

export function mapObject_151(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)])
  );
}

export function invertObject_152(obj) {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    acc[v] = k;
    return acc;
  }, {});
}

export function clampArrayValues_153(arr, min, max) {
  return arr.map(n => Math.min(Math.max(n, min), max));
}

export function allUnique_154(arr) {
  return new Set(arr).size === arr.length;
}

export function differenceBy_155(arr1, arr2, fn) {
  const set = new Set(arr2.map(fn));
  return arr1.filter(x => !set.has(fn(x)));
}

export function intersectionBy_156(arr1, arr2, fn) {
  const set = new Set(arr2.map(fn));
  return arr1.filter(x => set.has(fn(x)));
}

export function groupBy_157(arr, fn) {
  return arr.reduce((acc, item) => {
    const key = fn(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

export function chunkArray_158(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export function randomChoice_159(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function lastIndex_160(arr) {
  return arr.length - 1;
}

export function arraySumBy_161(arr, fn) {
  return arr.reduce((acc, val) => acc + fn(val), 0);
}

export function isSortedAsc_162(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

export function isSortedDesc_163(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) return false;
  }
  return true;
}

export function countBy_164(arr, fn) {
  return arr.reduce((acc, item) => {
    const key = fn(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

export function deepEqual_165(a, b) {
  if (a === b) return true;

  if (typeof a !== typeof b) return false;

  if (a && b && typeof a === 'object') {
    if (Array.isArray(a) !== Array.isArray(b)) return false;

    if (Array.isArray(a)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!deepEqual_165(a[i], b[i])) return false;
      }
      return true;
    } else {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      if (keysA.length !== keysB.length) return false;
      for (let key of keysA) {
        if (!deepEqual_165(a[key], b[key])) return false;
      }
      return true;
    }
  }

  return false;
}

export function uniqueObjects_166(arr, fn) {
  const seen = new Set();
  return arr.filter(item => {
    const key = fn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function objectToPairs_167(obj) {
  return Object.entries(obj);
}

export function pairsToObject_168(pairs) {
  return Object.fromEntries(pairs);
}

export function isInteger_169(value) {
  return Number.isInteger(value);
}

export function isFloat_170(value) {
  return Number(value) === value && !Number.isInteger(value);
}

export function clampNumber_171(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

export function capitalizeWords_172(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

export function flattenDeep_173(arr) {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenDeep_173(val) : val),
    []
  );
}

export function kebabToCamel_174(str) {
  return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

export function camelToKebab_175(str) {
  return str.replace(/[A-Z]/g, char => '-' + char.toLowerCase());
}

export function arrayMax_176(arr) {
  return Math.max(...arr);
}

export function arrayMin_177(arr) {
  return Math.min(...arr);
}

export function repeatStr_178(str, n) {
  return str.repeat(n);
}

export function generateRange_179(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) arr.push(i);
  return arr;
}

export function delayPromise_180(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function arrayToObject_181(arr, keyFn, valueFn = x => x) {
  return arr.reduce((acc, item) => {
    acc[keyFn(item)] = valueFn(item);
    return acc;
  }, {});
}

export function objectMap_182(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, fn(v, k)])
  );
}

export function pickKeys_183(obj, keys) {
  return keys.reduce((acc, key) => {
    if (key in obj) acc[key] = obj[key];
    return acc;
  }, {});
}

export function omitKeys_184(obj, keys) {
  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => !keys.includes(k))
  );
}

export function snakeToCamel_185(str) {
  return str.replace(/(_\w)/g, m => m[1].toUpperCase());
}

export function camelToSnake_186(str) {
  return str.replace(/[A-Z]/g, c => '_' + c.toLowerCase());
}

export function sortByKey_187(arr, key) {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
}

export function sortByFn_188(arr, fn) {
  return [...arr].sort((a, b) => fn(a) - fn(b));
}

export function distinct_189(arr) {
  return [...new Set(arr)];
}

export function groupByProp_190(arr, prop) {
  return arr.reduce((acc, obj) => {
    const key = obj[prop];
    if (!acc[key]) acc[key] = [];
    acc[key].push(obj);
    return acc;
  }, {});
}

export function randomFloat_191(min, max) {
  return Math.random() * (max - min) + min;
}

export function randomIntInclusive_192(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function sumByKey_193(arr, key) {
  return arr.reduce((acc, obj) => acc + (obj[key] || 0), 0);
}

export function isFunction_194(value) {
  return typeof value === 'function';
}

export function delayFunc_195(fn, ms) {
  return function(...args) {
    setTimeout(() => fn.apply(this, args), ms);
  };
}

export function mergeWithoutOverwrite_196(target, source) {
  for (const key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
  return target;
}

export function jsonSafeParse_197(str, fallback = null) {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

export function jsonSafeStringify_198(obj, fallback = '') {
  try {
    return JSON.stringify(obj);
  } catch {
    return fallback;
  }
}

export function isTruthy_199(value) {
  return !!value;
}

export function isFalsy_200(value) {
  return !value;
}

export function debounce_201(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

export function throttle_202(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function memoize_203(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

export function deepClone_204(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function flattenOnce_205(arr) {
  return [].concat(...arr);
}

export function arrayDifference_206(arr1, arr2) {
  return arr1.filter(x => !arr2.includes(x));
}

export function arrayIntersection_207(arr1, arr2) {
  return arr1.filter(x => arr2.includes(x));
}

export function rangeStep_208(start, stop, step = 1) {
  const arr = [];
  if (step === 0) throw new Error('Step cannot be zero.');
  if (start < stop) {
    for (let i = start; i <= stop; i += step) arr.push(i);
  } else {
    for (let i = start; i >= stop; i -= step) arr.push(i);
  }
  return arr;
}

export function randomHexColor_209() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
}

export function capitalizeFirst_210(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function trimAllWhitespace_211(str) {
  return str.replace(/\s+/g, '');
}

export function isEmpty_212(value) {
  if (value == null) return true;
  if (Array.isArray(value) || typeof value === 'string') return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

export function uniqueBy_213(arr, fn) {
  const seen = new Set();
  return arr.filter(item => {
    const key = fn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function partition_214(arr, fn) {
  return arr.reduce(
    ([pass, fail], elem) => {
      return fn(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
    },
    [[], []]
  );
}

export function chunk_215(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export function pickRandom_216(arr, n = 1) {
  const copy = [...arr];
  const result = [];
  for (let i = 0; i < n && copy.length; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(idx, 1)[0]);
  }
  return n === 1 ? result[0] : result;
}

export function objectValues_217(obj) {
  return Object.values(obj);
}

export function objectKeys_218(obj) {
  return Object.keys(obj);
}

export function isPalindrome_219(str) {
  const s = str.toLowerCase().replace(/[\W_]/g, '');
  return s === s.split('').reverse().join('');
}

export function hexToRgb_220(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function rgbToHex_221(r, g, b) {
  return (
    '#' +
    [r, g, b]
      .map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
}

export function isPrime_222(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

export function factorial_223(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  let res = 1;
  for (let i = 1; i <= n; i++) res *= i;
  return res;
}

export function fibonacci_224(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

export function arrayRotate_225(arr, count) {
  const len = arr.length;
  const rotation = ((count % len) + len) % len;
  return arr.slice(rotation).concat(arr.slice(0, rotation));
}

export function arrayShuffle_226(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function sumRange_227(start, end) {
  let sum = 0;
  const min = Math.min(start, end);
  const max = Math.max(start, end);
  for (let i = min; i <= max; i++) sum += i;
  return sum;
}

export function uniqueChars_228(str) {
  return [...new Set(str)].join('');
}

export function repeatArray_229(arr, times) {
  let result = [];
  for (let i = 0; i < times; i++) {
    result = result.concat(arr);
  }
  return result;
}

export function isAnagram_230(str1, str2) {
  const normalize = s => s.toLowerCase().replace(/\W/g, '').split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

export function binarySearch_231(arr, target) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

export function zipArrays_232(...arrays) {
  const length = Math.min(...arrays.map(arr => arr.length));
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(arrays.map(arr => arr[i]));
  }
  return result;
}

export function unzipArrays_233(arrays) {
  const length = arrays[0]?.length || 0;
  const result = Array.from({ length }, () => []);
  arrays.forEach(arr => {
    arr.forEach((val, i) => result[i].push(val));
  });
  return result;
}

export function flattenObject_234(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flattenObject_234(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
}

export function unflattenObject_235(data) {
  const result = {};
  for (const i in data) {
    const keys = i.split('.');
    keys.reduce((r, e, j) => {
      return (
        r[e] ||
        (r[e] = isNaN(Number(keys[j + 1]))
          ? keys.length - 1 === j
            ? data[i]
            : {}
          : [])
      );
    }, result);
  }
  return result;
}

export function escapeRegExp_236(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function isValidEmail_237(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function isValidUrl_238(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function toTitleCase_239(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export function groupByMultiple_240(arr, keys) {
  return arr.reduce((acc, obj) => {
    const key = keys.map(k => obj[k]).join('|');
    if (!acc[key]) acc[key] = [];
    acc[key].push(obj);
    return acc;
  }, {});
}

export function deepFreeze_241(obj) {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (
      obj[prop] !== null &&
      (typeof obj[prop] === 'object' || typeof obj[prop] === 'function') &&
      !Object.isFrozen(obj[prop])
    ) {
      deepFreeze_241(obj[prop]);
    }
  });
  return obj;
}

export function sleep_242(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function parseQueryString_243(query) {
  return query
    .replace(/^\?/, '')
    .split('&')
    .reduce((acc, part) => {
      const [key, val] = part.split('=');
      acc[decodeURIComponent(key)] = decodeURIComponent(val || '');
      return acc;
    }, {});
}

export function buildQueryString_244(params) {
  return Object.entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
}

export function isObject_245(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

export function isArray_246(value) {
  return Array.isArray(value);
}

export function mergeDeep_247(target, source) {
  for (const key in source) {
    if (isObject(source[key])) {
      if (!target[key]) Object.assign(target, { [key]: {} });
      mergeDeep_247(target[key], source[key]);
    } else {
      Object.assign(target, { [key]: source[key] });
    }
  }
  return target;
}

export function uniqueByProp_248(arr, prop) {
  const seen = new Set();
  return arr.filter(item => {
    if (seen.has(item[prop])) return false;
    seen.add(item[prop]);
    return true;
  });
}

export function arrayMove_249(arr, fromIndex, toIndex) {
  const a = [...arr];
  const element = a.splice(fromIndex, 1)[0];
  a.splice(toIndex, 0, element);
  return a;
}

export function omitBy_250(obj, predicate) {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => !predicate(v, k)));
}

export function debounce_251(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

export function throttle_252(fn, wait) {
  let isThrottled = false;
  let savedArgs, savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    fn.apply(this, arguments);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, wait);
  }

  return wrapper;
}

export function curry_253(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...next) {
        return curried.apply(this, args.concat(next));
      };
    }
  };
}

export function unzip_254(arrays) {
  if (!arrays.length) return [];
  const length = Math.max(...arrays.map(arr => arr.length));
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(arrays.map(arr => arr[i]));
  }
  return result;
}

export function capitalizeWords_255(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

export function camelToKebab_256(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function kebabToCamel_257(str) {
  return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

export function sleep_258(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function last_259(arr) {
  return arr[arr.length - 1];
}

export function first_260(arr) {
  return arr[0];
}

export function isSorted_261(arr, compareFn = (a, b) => a - b) {
  for (let i = 1; i < arr.length; i++) {
    if (compareFn(arr[i - 1], arr[i]) > 0) return false;
  }
  return true;
}

export function range_262(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => i + start);
}

export function repeatString_263(str, times) {
  return new Array(times + 1).join(str);
}

export function objectMap_264(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v, k)]));
}

export function objectFilter_265(obj, predicate) {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => predicate(v, k)));
}

export function groupBy_266(arr, keyFn) {
  return arr.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

export function invertObject_267(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}

export function arrayToObject_268(arr, keyFn) {
  return arr.reduce((acc, item) => {
    acc[keyFn(item)] = item;
    return acc;
  }, {});
}

export function chunkArray_269(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export function flattenArray_270(arr) {
  return arr.reduce((flat, toFlatten) => flat.concat(toFlatten), []);
}

export function pick_271(obj, keys) {
  return keys.reduce((acc, key) => {
    if (key in obj) acc[key] = obj[key];
    return acc;
  }, {});
}

export function omit_272(obj, keys) {
  return Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
}

export function difference_273(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(x => !set2.has(x));
}

export function intersection_274(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(x => set2.has(x));
}

export function union_275(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}

export function symmetricDifference_276(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...arr1.filter(x => !set2.has(x)), ...arr2.filter(x => !set1.has(x))];
}

export function zip_277(...arrays) {
  const minLen = Math.min(...arrays.map(arr => arr.length));
  const zipped = [];
  for (let i = 0; i < minLen; i++) {
    zipped.push(arrays.map(arr => arr[i]));
  }
  return zipped;
}

export function unzip_278(arrays) {
  const length = arrays[0]?.length || 0;
  const result = Array.from({ length }, () => []);
  arrays.forEach(arr => arr.forEach((val, i) => result[i].push(val)));
  return result;
}

export function toQueryString_279(obj) {
  return Object.entries(obj)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
}

export function fromQueryString_280(qs) {
  return qs
    .replace(/^\?/, '')
    .split('&')
    .reduce((acc, pair) => {
      const [k, v] = pair.split('=');
      acc[decodeURIComponent(k)] = decodeURIComponent(v || '');
      return acc;
    }, {});
}

export function deepMerge_281(target, source) {
  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      Object.assign(source[key], deepMerge(target[key], source[key]));
    }
  }
  Object.assign(target || {}, source);
  return target;
}

export function randomInt_282(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffle_283(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function average_284(numbers) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

export function median_285(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

export function mode_286(numbers) {
  const freq = {};
  let maxFreq = 0;
  let modes = [];

  numbers.forEach(num => {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > maxFreq) {
      maxFreq = freq[num];
      modes = [num];
    } else if (freq[num] === maxFreq) {
      modes.push(num);
    }
  });

  return modes;
}

export function clamp_287(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

export function factorial_288(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  return n * factorial_288(n - 1);
}

export function fibonacci_289(n) {
  if (n <= 1) return n;
  return fibonacci_289(n - 1) + fibonacci_289(n - 2);
}

export function flattenDeep_290(arr) {
  return arr.reduce(
    (acc, val) => (Array.isArray(val) ? acc.concat(flattenDeep_290(val)) : acc.concat(val)),
    []
  );
}

export function debounceImmediate_291(fn, wait) {
  let timeout;
  return function(...args) {
    const callNow = !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => (timeout = null), wait);
    if (callNow) fn.apply(this, args);
  };
}

export function once_292(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

export function pipe_293(...fns) {
  return x => fns.reduce((v, f) => f(v), x);
}

export function compose_294(...fns) {
  return x => fns.reduceRight((v, f) => f(v), x);
}

export function isObject_295(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

export function isFunction_296(value) {
  return typeof value === 'function';
}

export function isArray_297(value) {
  return Array.isArray(value);
}

export function isString_298(value) {
  return typeof value === 'string';
}

export function isNumber_299(value) {
  return typeof value === 'number' && !isNaN(value);
}

export function isBoolean_300(value) {
  return typeof value === 'boolean';
}

export function debounceLeading_301(fn, wait) {
  let timeout;
  return function (...args) {
    if (!timeout) {
      fn.apply(this, args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
    }, wait);
  };
}

export function throttleTrailing_302(fn, wait) {
  let timeout = null;
  let lastArgs = null;
  return function (...args) {
    if (!timeout) {
      fn.apply(this, args);
      timeout = setTimeout(() => {
        if (lastArgs) {
          fn.apply(this, lastArgs);
          lastArgs = null;
          timeout = setTimeout(() => (timeout = null), wait);
        } else {
          timeout = null;
        }
      }, wait);
    } else {
      lastArgs = args;
    }
  };
}

export function mergeArrays_303(...arrays) {
  return [].concat(...arrays);
}

export function uniqueArray_304(arr) {
  return [...new Set(arr)];
}

export function deepClone_305(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(deepClone_305);
  const cloned = {};
  for (const key in obj) {
    cloned[key] = deepClone_305(obj[key]);
  }
  return cloned;
}

export function flattenObject_306(obj, prefix = '') {
  let result = {};
  for (const key in obj) {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(result, flattenObject_306(obj[key], pre + key));
    } else {
      result[pre + key] = obj[key];
    }
  }
  return result;
}

export function unflattenObject_307(obj) {
  const result = {};
  for (const flatKey in obj) {
    const keys = flatKey.split('.');
    keys.reduce((acc, key, i) => {
      if (i === keys.length - 1) {
        acc[key] = obj[flatKey];
      } else {
        acc[key] = acc[key] || {};
      }
      return acc[key];
    }, result);
  }
  return result;
}

export function capitalizeFirst_308(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString_309(str) {
  return str.split('').reverse().join('');
}

export function isPalindrome_310(str) {
  const s = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return s === s.split('').reverse().join('');
}

export function countWords_311(str) {
  return str.trim().split(/\s+/).length;
}

export function uniqueWords_312(str) {
  return [...new Set(str.toLowerCase().match(/\b\w+\b/g))];
}

export function arrayContains_313(arr, val) {
  return arr.indexOf(val) !== -1;
}

export function isEmpty_314(value) {
  if (value == null) return true;
  if (Array.isArray(value) || typeof value === 'string') return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

export function toTitleCase_315(str) {
  return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

export function camelCase_316(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

export function snakeCase_317(str) {
  return str
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('_');
}

export function truncate_318(str, maxLength, suffix = '...') {
  return str.length > maxLength ? str.slice(0, maxLength - suffix.length) + suffix : str;
}

export function arrayDifference_319(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(x => !set2.has(x));
}

export function arrayIntersection_320(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(x => set2.has(x));
}

export function arrayUnion_321(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

export function isSubset_322(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.every(val => set2.has(val));
}

export function allEqual_323(arr) {
  return arr.every(val => val === arr[0]);
}

export function swapArrayElements_324(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
}

export function generateUUID_325() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function deepFreeze_326(obj) {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (
      obj[prop] !== null &&
      (typeof obj[prop] === 'object' || typeof obj[prop] === 'function') &&
      !Object.isFrozen(obj[prop])
    ) {
      deepFreeze_326(obj[prop]);
    }
  });
  return obj;
}

export function removeFalsy_327(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => Boolean(v)));
}

export function findKeyByValue_328(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}

export function groupByProperty_329(arr, prop) {
  return arr.reduce((acc, obj) => {
    const key = obj[prop];
    if (!acc[key]) acc[key] = [];
    acc[key].push(obj);
    return acc;
  }, {});
}

export function pickBy_330(obj, predicate) {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => predicate(v, k)));
}

export function omitBy_331(obj, predicate) {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => !predicate(v, k)));
}

export function memoize_332(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

export function capitalizeEveryWord_333(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

export function isValidEmail_334(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function isValidURL_335(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function randomHexColor_336() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

export function formatCurrency_337(amount, locale = 'en-US', currency = 'USD') {
  return amount.toLocaleString(locale, { style: 'currency', currency });
}

export function delay_338(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function isPrime_339(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

export function randomChoice_340(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function averageBy_341(arr, fn) {
  const total = arr.reduce((sum, item) => sum + fn(item), 0);
  return total / arr.length;
}

export function factorialIter_342(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

export function fibonacciIter_343(n) {
  if (n <= 1) return n;
  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

export function zipObject_344(keys, values) {
  const result = {};
  keys.forEach((k, i) => {
    result[k] = values[i];
  });
  return result;
}

export function isAnagram_345(str1, str2) {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
}

export function camelCaseToSentence_346(str) {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
}

export function getRandomInt_347(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function sleepSync_348(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export function capitalizeAndTrim_349(str) {
  return str.trim().replace(/\b\w/g, c => c.toUpperCase());
}

export function removeDuplicates_350(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

export function flattenArray_351(arr) {
  return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray_351(toFlatten) : toFlatten), []);
}

export function chunkArray_352(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export function arraySum_353(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}

export function arrayProduct_354(arr) {
  return arr.reduce((prod, val) => prod * val, 1);
}

export function isSortedAsc_355(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

export function isSortedDesc_356(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) return false;
  }
  return true;
}

export function capitalizeWords_357(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

export function slugify_358(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function sumBy_359(arr, fn) {
  return arr.reduce((acc, val) => acc + fn(val), 0);
}

export function deepMerge_360(target, source) {
  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      Object.assign(source[key], deepMerge(target[key], source[key]));
    }
  }
  return { ...target, ...source };
}

export function randomInt_361(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function groupBy_362(array, key) {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
    return result;
  }, {});
}

export function clamp_363(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

export function isObject_364(obj) {
  return obj && typeof obj === 'object' && !Array.isArray(obj);
}

export function pick_365(obj, keys) {
  return keys.reduce((acc, key) => {
    if (key in obj) acc[key] = obj[key];
    return acc;
  }, {});
}

export function omit_366(obj, keys) {
  return Object.keys(obj)
    .filter(key => !keys.includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}

export function xorArrays_367(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...arr1.filter(x => !set2.has(x)), ...arr2.filter(x => !set1.has(x))];
}

export function countOccurrences_368(arr, val) {
  return arr.reduce((count, elem) => (elem === val ? count + 1 : count), 0);
}

export function uniqueBy_369(arr, fn) {
  const seen = new Set();
  return arr.filter(item => {
    const key = fn(item);
    return seen.has(key) ? false : seen.add(key);
  });
}

export function capitalizeLast_370(str) {
  if (!str) return '';
  return str.slice(0, -1) + str.slice(-1).toUpperCase();
}

export function swapCase_371(str) {
  return str
    .split('')
    .map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
    .join('');
}

export function mergeObjects_372(...objs) {
  return Object.assign({}, ...objs);
}

export function sleep_373(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function hexToRgb_374(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function rgbToHex_375(r, g, b) {
  return (
    '#' +
    [r, g, b]
      .map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
}

export function pluralize_376(word, count) {
  return count === 1 ? word : word + 's';
}

export function factorialRecursive_377(n) {
  return n <= 1 ? 1 : n * factorialRecursive_377(n - 1);
}

export function fibonacciRecursive_378(n) {
  return n <= 1 ? n : fibonacciRecursive_378(n - 1) + fibonacciRecursive_378(n - 2);
}

export function capitalizeAlternating_379(str) {
  return str
    .split('')
    .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
    .join('');
}

export function reverseWords_380(str) {
  return str.split(' ').reverse().join(' ');
}

export function randomString_381(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function getType_382(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

export function safeParseJSON_383(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

export function flattenDeep_384(arr) {
  return arr.reduce((acc, val) => (Array.isArray(val) ? acc.concat(flattenDeep_384(val)) : acc.concat(val)), []);
}

export function lastElement_385(arr) {
  return arr[arr.length - 1];
}

export function firstElement_386(arr) {
  return arr[0];
}

export function removeDuplicatesBy_387(arr, fn) {
  const seen = new Set();
  return arr.filter(item => {
    const key = fn(item);
    return seen.has(key) ? false : seen.add(key);
  });
}

export function toArray_388(value) {
  if (value == null) return [];
  if (Array.isArray(value)) return value;
  return [value];
}

export function toNumber_389(value) {
  const num = Number(value);
  return isNaN(num) ? null : num;
}

export function toBoolean_390(value) {
  if (typeof value === 'string') {
    const val = value.toLowerCase();
    if (val === 'true') return true;
    if (val === 'false') return false;
  }
  return Boolean(value);
}

export function objectKeys_391(obj) {
  return Object.keys(obj);
}

export function objectValues_392(obj) {
  return Object.values(obj);
}

export function objectEntries_393(obj) {
  return Object.entries(obj);
}

export function safeGet_394(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function arrayMove_395(arr, fromIndex, toIndex) {
  const newArr = [...arr];
  const element = newArr.splice(fromIndex, 1)[0];
  newArr.splice(toIndex, 0, element);
  return newArr;
}

export function randomElement_396(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function xor_397(a, b) {
  return !!(a ^ b);
}

export function isEven_398(num) {
  return num % 2 === 0;
}

export function isOdd_399(num) {
  return num % 2 !== 0;
}

export function sumRange_400(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

export function median_401(arr) {
  if (arr.length === 0) return null;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

export function mode_402(arr) {
  const frequency = {};
  let maxFreq = 0;
  let modes = [];
  for (const val of arr) {
    frequency[val] = (frequency[val] || 0) + 1;
    if (frequency[val] > maxFreq) {
      maxFreq = frequency[val];
    }
  }
  for (const key in frequency) {
    if (frequency[key] === maxFreq) modes.push(key);
  }
  return modes;
}

export function debounce_403(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

export function throttle_404(fn, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      fn.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          fn.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

export function invertObject_405(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    acc[val] = key;
    return acc;
  }, {});
}

export function range_406(start, end, step = 1) {
  const result = [];
  if (step === 0) throw new Error('Step cannot be 0');
  if (start <= end) {
    for (let i = start; i <= end; i += step) result.push(i);
  } else {
    for (let i = start; i >= end; i -= step) result.push(i);
  }
  return result;
}

export function isPalindrome_407(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}

export function capitalizeFirst_408(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncate_409(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

export function deepClone_410(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function mergeDeep_411(target, source) {
  const isObject = obj => obj && typeof obj === 'object';
  if (!isObject(target) || !isObject(source)) return source;

  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
}

export function sumDigits_412(num) {
  return Math.abs(num)
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

export function factorialIterative_413(n) {
  if (n < 0) return null;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

export function isPrime_414(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

export function gcd_415(a, b) {
  if (!b) return a;
  return gcd_415(b, a % b);
}

export function lcm_416(a, b) {
  return (a * b) / gcd_415(a, b);
}

export function randomHexColor_417() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

export function reverseString_418(str) {
  return str.split('').reverse().join('');
}

export function countWords_419(str) {
  return str.trim().split(/\s+/).length;
}

export function isAnagram_420(str1, str2) {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
}

export function xorArrays_421(arr1, arr2) {
  const setA = new Set(arr1);
  const setB = new Set(arr2);
  return [...arr1.filter(x => !setB.has(x)), ...arr2.filter(x => !setA.has(x))];
}

export function repeatString_422(str, times) {
  return str.repeat(times);
}

export function isValidEmail_423(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function capitalizeEveryWord_424(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

export function removeFalsy_425(arr) {
  return arr.filter(Boolean);
}

export function uniqueElements_426(arr) {
  return [...new Set(arr)];
}

export function flattenOnce_427(arr) {
  return [].concat(...arr);
}

export function objectToQueryString_428(obj) {
  return Object.entries(obj)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&');
}

export function queryStringToObject_429(query) {
  return query
    .replace(/^\?/, '')
    .split('&')
    .reduce((acc, pair) => {
      const [key, val] = pair.split('=');
      acc[decodeURIComponent(key)] = decodeURIComponent(val || '');
      return acc;
    }, {});
}

export function randomChoiceWeighted_430(arr, weights) {
  const total = weights.reduce((a, b) => a + b, 0);
  let rand = Math.random() * total;
  for (let i = 0; i < arr.length; i++) {
    if (rand < weights[i]) return arr[i];
    rand -= weights[i];
  }
}

export function difference_431(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(x => !set2.has(x));
}

export function symmetricDifference_432(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...arr1.filter(x => !set2.has(x)), ...arr2.filter(x => !set1.has(x))];
}

export function binarySearch_433(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

export function flattenObject_434(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      Object.assign(acc, flattenObject_434(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
}

export function unflattenObject_435(data) {
  const result = {};
  for (const i in data) {
    const keys = i.split('.');
    keys.reduce((r, e, j) => {
      return (
        r[e] ||
        (r[e] = isNaN(Number(keys[j + 1]))
          ? keys.length - 1 === j
            ? data[i]
            : {}
          : [])
      );
    }, result);
  }
  return result;
}

export function isValidURL_436(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

export function rgbToHsl_437(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}

export function hslToRgb_438(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export function capitalizeEachWord_439(str) {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

export function generateUUID_440() {
  let d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function getRandomInt_441(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function chunkString_442(str, size) {
  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}

export function reverseArray_443(arr) {
  return arr.slice().reverse();
}

export function flattenDepth_444(arr, depth = 1) {
  return depth > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flattenDepth_444(val, depth - 1) : val),
        []
      )
    : arr.slice();
}

export function removeByIndex_445(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

export function randomBoolean_446() {
  return Math.random() >= 0.5;
}

export function getRandomElement_447(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function mapValues_448(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v, k)]));
}

export function omitBy_449(obj, predicate) {
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => !predicate(v, k))
  );
}

export function pickBy_450(obj, predicate) {
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => predicate(v, k))
  );
}
