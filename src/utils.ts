export function eqSet<T>(as: Set<T>, bs: Set<T>) {
  return as.size === bs.size && all(isIn(bs), as);
}

export function all<T>(pred: (a: T) => boolean, as: Set<T>) {
  return Array.from(as).every(pred);
}

export function isIn<T>(as: Set<T>) {
  return (a: T) => as.has(a);
}

export function memo<K, V>(fn: (arg: Set<K>) => V) {
  const keys: Set<K>[] = [];
  const cache: V[] = [];

  return function (arg: Set<K>) {
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
