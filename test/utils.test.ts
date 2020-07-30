import { eqSet, all, memo } from "../src/utils";

test("Test eqSet()", () => {
  expect(eqSet(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBe(true);

  expect(eqSet(new Set([1, 2, 3]), new Set([1, 2, 3, 4]))).toBe(false);

  {
    const a = new Set([1, 2, 3]);
    const b = a;

    expect(eqSet(a, b)).toBe(true);
  }

  {
    const a = new Set([1, 2, 3]);
    const b = new Set(a);

    expect(eqSet(a, b)).toBe(true);
  }

  {
    const a = new Set([1, 2, 3]);
    const b = new Set(a);
    b.add(4);

    expect(eqSet(a, b)).toBe(false);
  }
});

test("Test memo()", () => {
  {
    let count = 0;

    const func = memo((arg: Set<number>) => {
      count += 1;
    });

    expect(func).toBeInstanceOf(Function);

    func(new Set([1, 2, 3]));
    expect(count).toBe(1);

    func(new Set([1, 2, 3]));
    expect(count).toBe(1);
  }
  {
    let count = 0;

    const func = memo((arg: Set<number>) => {
      count += 1;

      return Array.from(arg).reduce((a, b) => a + b);
    });

    expect(func).toBeInstanceOf(Function);

    const sumA = func(new Set([1, 2, 3]));
    expect(count).toBe(1);
    expect(sumA).toBe(6);

    const sumB = func(new Set([1, 2, 3]));
    expect(count).toBe(1);
    expect(sumB).toBe(6);
  }
});
