export declare function eqSet<T>(as: Set<T>, bs: Set<T>): boolean;
export declare function all<T>(pred: (a: T) => boolean, as: Set<T>): boolean;
export declare function isIn<T>(as: Set<T>): (a: T) => boolean;
export declare function memo<K, V>(fn: (arg: Set<K>) => V): (arg: Set<K>) => V;
