"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flatDepth = (array, depth) => {
    return array.reduce((acc, val) => {
        if (depth > 1 && Array.isArray(val)) {
            return acc.concat(flatDepth(val, depth - 1));
        }
        return acc.concat(val);
    }, []);
};
const _ = {
    isArguments(x) {
        return _.isObjectLike(x) && x.toString() === '[object Arguments]';
    },
    isArray(x) {
        return Array.isArray(x);
    },
    isBoolean(x) {
        return x === true || x === false;
    },
    isObjectLike(x) {
        return typeof x === 'object' && x !== null;
    },
    compact(elements) {
        return elements.filter(Boolean);
    },
    difference(a, b) {
        const set = new Set(b);
        return a.filter(x => !set.has(x));
    },
    drop(a, count = 1) {
        return a.slice(count < 0 ? 0 : count);
    },
    dropRight(a, count = 1) {
        return a.slice(0, a.length - count);
    },
    fromEntries(pairs) {
        const obj = {};
        pairs.forEach(([key, val]) => { obj[key] = val; });
        return obj;
    },
    // TODO: use Array.prototype.flat when the standard release.
    flatten(array, depth = 1) {
        return flatDepth(array, depth);
    },
    last(array) {
        return array[array.length - 1];
    },
    take(array, n = 1) {
        return array.slice(0, n);
    },
    union(array, ...rest) {
        return _.uniq(array.concat(...rest));
    },
    uniq(array) {
        return [...new Set(array)];
    },
    zip(...arrays) {
        const len = _.max(arrays.map(x => x.length));
        const zipped = [];
        for (let i = 0; i < len; i += 1) {
            zipped.push(arrays.map(array => array[i]));
        }
        return zipped;
    },
    // TODO: Add test
    max(array) {
        return Math.max(...array);
    },
};
if (module) {
    module.exports = _;
}
exports.default = _;
//# sourceMappingURL=_.js.map