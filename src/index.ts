import EntityManager from "./entity";
import SystemManager from "./system";
import ComponentManager from "./component";
import { Store } from "./types";

const store: Store = {
  entities: [],
  componentGroup: {},
  entityCompoentsMap: {},
  systems: [],
};

function intersection<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter((val) => arr2.includes(val));
}

function update(delta: number) {
  const { systems, componentGroup } = store;

  systems.forEach(({ filter, update }) => {
    const entities = filter
      .map((component) => componentGroup[component])
      .reduce(intersection);

    update(delta, entities);
  });
}

export default {
  entity: EntityManager(store),
  component: ComponentManager(store),
  system: SystemManager(store),
  update,
};

export * from "./types";
