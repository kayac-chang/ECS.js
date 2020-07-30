function eqSet<T>(as: Set<T>, bs: Set<T>) {
  return as.size === bs.size && all(isIn(bs), as);
}

function all<T>(pred: (a: T) => boolean, as: Set<T>) {
  return Array.from(as).every(pred);
}

function isIn<T>(as: Set<T>) {
  return function (a: T) {
    return as.has(a);
  };
}

export function memo<K extends Set<any>, V>(fn: (arg: K) => V) {
  let keys: Set<any>[] = [];
  const cache = new WeakMap<K, V>();

  return function (arg: K) {
    const hasCached = keys.find((key) => eqSet(key, arg));
    const res = cache.get(arg);

    if (!hasCached || !res) {
      const res = fn(arg);

      const clone = new Set(arg);

      keys.push(clone);
      cache.set(arg, res);

      return res;
    }

    return res;
  };
}
