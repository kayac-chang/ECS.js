import EntityManager from "./entity";
import SystemManager from "./system";
import ComponentManager from "./component";
import { Store, IComponentID, IComponent } from "./types";

const store: Store = {
  entities: [],
  componentGroup: {},
  entityCompoentsMap: {},
  systems: [],
};

function update(delta: number) {
  const { systems, componentGroup } = store;

  systems.forEach(({ filter, update }) => {
    const components = filter.reduce(
      (config, component) =>
        Object.assign(config, { [component]: componentGroup[component] }),
      {} as Record<IComponentID, IComponent[]>
    );

    update(delta, components);
  });
}

export default {
  entity: EntityManager(store),
  component: ComponentManager(store),
  system: SystemManager(store),
  update,
};

export * from "./types";
