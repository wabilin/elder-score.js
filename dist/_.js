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
const { assign, entries, keys, values } = Object;
const { isInteger, isNaN, isFinite, isSafeInteger } = Number;
const { isArray } = Array;
// e for Elder Score
const e = {
    // functions from Object
    // TODO: Add to Spec
    assign, entries, keys, values,
    // functions from Number
    // TODO: Add to Spec
    isInteger, isNaN, isFinite, isSafeInteger,
    // functions from Array
    isArray,
    isArguments(x) {
        return _.isObjectLike(x) && x.toString() === '[object Arguments]';
    },
    isBoolean(x) {
        return x === true || x === false;
    },
    isEmpty(x) {
        if (x == null) {
            return true;
        }
        if (_.isArray(x)) {
            return x.length === 0;
        }
        return _.isEmpty(keys(x));
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
    fromEntries(pairs) {
        const obj = {};
        pairs.forEach(([key, val]) => { obj[key] = val; });
        return obj;
    },
    // TODO: use Array.prototype.flat when the standard release.
    flatten(array, depth = 1) {
        return flatDepth(array, depth);
    },
    first(array, n) {
        return n ? array.slice(0, n) : array[0];
    },
    initial(array, n = 1) {
        return _.first(array, array.length - n);
    },
    intersection(...arrays) {
        if (_.isEmpty(arrays)) {
            return [];
        }
        const head = [...(new Set(arrays[0]))];
        const sets = _.rest(arrays).map(x => new Set(x));
        return head.filter(x => sets.every(set => set.has(x)));
    },
    last(array, n) {
        const { length } = array;
        return n ? array.slice(length - n) : array[length - 1];
    },
    rest(array, index = 1) {
        return array.slice(index);
    },
    take(array, n = 1) {
        return array.slice(0, n);
    },
    unzip(arrays) {
        if (_.isEmpty(arrays)) {
            return [];
        }
        return arrays[0].map((e, i) => arrays.map(array => array[i]));
    },
    without(array, ...values) {
        return _.difference(array, values);
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
    max(array) {
        return Math.max(...array);
    },
};
// alias
const _ = Object.assign({}, e, { head: e.first, tail: e.rest, drop: e.rest, dropRight: e.initial });
exports.default = _;
//# sourceMappingURL=_.js.map