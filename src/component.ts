import { IComponent, IEntity, Store, IComponentID } from "./types";

export default function ComponentManager(store: Store) {
  const groups = store.componentGroup;
  const maps = store.entityCompoentsMap;

  return {
    has(componentID: IComponentID, entity: IEntity) {
      return maps[entity]?.some(({ id }) => id === componentID);
    },

    add(component: IComponent, entity: IEntity) {
      if (this.has(component.id, entity)) {
        throw new Error(`duplicate component found in this entity.`);
      }

      component.owner = entity;
      groups[component.id] = [...(groups[component.id] || []), entity];

      maps[entity] = [...(maps[entity] || []), component];

      return component;
    },

    remove(componentID: IComponentID, entity: IEntity) {
      groups[componentID] = groups[componentID].filter(
        (item) => item !== entity
      );

      maps[entity] = maps[entity].filter(({ id }) => id !== componentID);

      return componentID;
    },

    get(componentID: IComponentID, entity: IEntity) {
      return maps[entity].find(({ id }) => id === componentID);
    },
  };
}
