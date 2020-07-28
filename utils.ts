export function memo<K extends {}, V>(fn: (arg: K) => V) {
  let keys: K[] = [];
  const cache = new WeakMap<K, V>();

  return function (arg: K) {
    const hasCached = keys.find((key) => key === arg);
    const res = cache.get(arg);

    if (!hasCached || !res) {
      const res = fn(arg);

      keys.push(arg);
      cache.set(arg, res);

      return res;
    }

    return res;
  };
}
