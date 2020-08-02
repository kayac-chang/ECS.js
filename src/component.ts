import { IComponent, IEntity, Store } from "./types";

export default function ComponentManager(store: Store) {
  const groups = store.componentGroup;
  const maps = store.entityCompoentsMap;

  return {
    add(component: IComponent, entity: IEntity) {
      component.owner = entity;
      groups[component.id] = [...(groups[component.id] || []), component];

      maps[entity] = [...(maps[entity] || []), component.id];

      return component;
    },

    remove(component: IComponent, entity: IEntity) {
      groups[component.id] = groups[component.id].filter(
        ({ owner }) => owner !== entity
      );

      maps[entity] = maps[entity].filter((id) => id !== component.id);

      return component;
    },
  };
}
