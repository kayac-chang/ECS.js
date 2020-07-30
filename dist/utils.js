export function eqSet(as, bs) {
    return as.size === bs.size && all(isIn(bs), as);
}
export function all(pred, as) {
    return Array.from(as).every(pred);
}
export function isIn(as) {
    return (a) => as.has(a);
}
export function memo(fn) {
    const keys = [];
    const cache = [];
    return function (arg) {
        const idx = keys.findIndex((key) => eqSet(key, arg));
        if (idx === -1) {
            const res = fn(arg);
            keys.push(new Set(arg));
            cache.push(res);
            return res;
        }
        return cache[idx];
    };
}
