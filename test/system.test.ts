import SystemManager from "../src/system";
import { ISystem } from "../src/types";

describe("Test SystemManager", () => {
  test("constructor", () => {
    const systems = new Set<ISystem>();

    expect(SystemManager(systems)).toBeTruthy();
  });

  test("add()", () => {
    const systems = new Set<ISystem>();

    const { add } = SystemManager(systems);

    const test: ISystem = {
      id: "test",
      filter: new Set(),
      update: () => {},
    };

    const size = add(test);
    expect(systems.size === size).toBe(true);
  });

  test("get()", () => {
    const systems = new Set<ISystem>();

    const { add, get } = SystemManager(systems);

    const testA: ISystem = {
      id: "test",
      filter: new Set(),
      update: () => {},
    };

    add(testA);

    const testB = get("test");
    expect(testA === testB).toBe(true);
  });

  test("remove()", () => {
    const systems = new Set<ISystem>();

    const { add, remove, get } = SystemManager(systems);

    const testA: ISystem = {
      id: "test",
      filter: new Set(),
      update: () => {},
    };

    add(testA);

    remove("test");

    expect(get("test")).toBe(undefined);
  });
});
