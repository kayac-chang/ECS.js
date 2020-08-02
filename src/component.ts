import { IComponent, IEntity, Store, IComponentID } from "./types";

export default function ComponentManager(store: Store) {
  const groups = store.componentGroup;
  const maps = store.entityCompoentsMap;

  return {
    add(component: IComponent, entity: IEntity) {
      component.owner = entity;
      groups[component.id] = [...(groups[component.id] || []), entity];

      maps[entity] = [...(maps[entity] || []), component];

      return component;
    },

    remove(component: IComponent, entity: IEntity) {
      groups[component.id] = groups[component.id].filter(
        (item) => item !== entity
      );

      maps[entity] = maps[entity].filter(({ id }) => id !== component.id);

      return component;
    },

    get(componentID: IComponentID, entity: IEntity) {
      return maps[entity].find(({ id }) => id === componentID);
    },
  };
}
