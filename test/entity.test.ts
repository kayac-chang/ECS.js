import EntityManager from "../src/entity";
import { IEntity } from "../src/types";

describe("Test EntityManager", () => {
  test("constructor", () => {
    const entities = new Set<IEntity>();

    expect(EntityManager(entities)).toBeTruthy();
  });

  test("create()", () => {
    const entities = new Set<IEntity>();

    const { create } = EntityManager(entities);

    expect(create()).toBeTruthy();
    expect(entities.size).toBe(1);
  });

  test("create(): Entity", () => {
    const entities = new Set<IEntity>();

    const { create } = EntityManager(entities);

    const test1 = create();
    expect(test1).toEqual(expect.not.objectContaining({ id: "any" }));
    expect(test1).toBeInstanceOf(Map);

    const test2 = create("test2");
    expect(test2.id).toBe("test2");
  });

  test("get()", () => {
    const entities = new Set<IEntity>();

    const { create, get } = EntityManager(entities);

    const id = "test";

    const testA = create(id);
    const testB = get(id);

    expect(testA === testB).toBe(true);
  });

  test("remove()", () => {
    const entities = new Set<IEntity>();

    const { create, remove } = EntityManager(entities);

    const id = "test";

    create(id);
    remove(id);

    expect(entities.size).toBe(0);
  });
});
